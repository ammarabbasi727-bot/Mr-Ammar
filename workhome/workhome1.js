// 1
function getActiveUsers() {
  return users.filter(user => user.isActive);
}

// 2
function getUserNames() {
  return users.map(user => user.name);
}

// 3
function findUserById(id) {
  return users.find(user => user.id === id);
}

// 4
function areAllUsersActive() {
  return users.every(user => user.isActive);
}

// 5
function getAverageAge() {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  return total / users.length;
}

// 6
function getActiveUsersOlderThan(age) {
  return users.filter(user => user.isActive && user.age > age);
}

// 7
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 8
function transformUsersToObject() {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

// 9
function countProductsByCategory() {
  return products.reduce((count, product) => {
    count[product.category] = (count[product.category] || 0) + 1;
    return count;
  }, {});
}

// 10
function getActiveUserEmailsSortedByAge() {
  return users
    .filter(user => user.isActive)
    .sort((a, b) => a.age - b.age)
    .map(user => user.email);
}

// 11
function getDevelopers() {
  return users.filter(user => user.tags.includes("developer"));
}

// 12
function getOrdersWithUserNames() {
  return orders.map(order => {
    const user = users.find(u => u.id === order.userId);
    return { ...order, userName: user.name };
  });
}

// 13
function getOrdersWithProductDetails() {
  return orders.map(order => {
    const productDetails = order.products.map(productId =>
      products.find(product => product.id === productId)
    );
    return { ...order, productDetails };
  });
}

// 14
function getTotalSpentByUser() {
  return users.map(user => {
    const totalSpent = orders
      .filter(order => order.userId === user.id)
      .reduce((sum, order) => sum + order.totalAmount, 0);

    return { name: user.name, totalSpent };
  });
}

// 15
function getMostPopularProduct() {
  const productCount = {};

  orders.forEach(order => {
    order.products.forEach(productId => {
      productCount[productId] = (productCount[productId] || 0) + 1;
    });
  });

  const mostPopularId = Object.keys(productCount).reduce((a, b) =>
    productCount[a] > productCount[b] ? a : b
  );

  return products.find(p => p.id == mostPopularId);
}

// 16
function getAveragePriceOfProductsPurchasedByActiveUsers() {
  const activeUserIds = users.filter(u => u.isActive).map(u => u.id);

  const purchasedProducts = orders
    .filter(order => activeUserIds.includes(order.userId))
    .flatMap(order => order.products)
    .map(productId => products.find(p => p.id === productId));

  const total = purchasedProducts.reduce((sum, p) => sum + p.price, 0);
  return total / purchasedProducts.length;
}

// 17
function getUserStatsByAgeGroup() {
  return users.reduce((stats, user) => {
    let group;

    if (user.age < 20) group = "under 20";
    else if (user.age <= 30) group = "21-30";
    else if (user.age <= 40) group = "31-40";
    else group = "over 40";

    if (!stats[group]) {
      stats[group] = { active: 0, inactive: 0 };
    }

    if (user.isActive) stats[group].active++;
    else stats[group].inactive++;

    return stats;
  }, {});
}

// 18
function addTagToQualifiedUsers(tag, isActive, minAge) {
  return users.map(user => {
    if (user.isActive === isActive && user.age > minAge) {
      return { ...user, tags: [...user.tags, tag] };
    }
    return user;
  });
}

// 19
function getUsersWhoPurchased(productId) {
  const userIds = orders
    .filter(order => order.products.includes(productId))
    .map(order => order.userId);

  return users.filter(user => userIds.includes(user.id));
}

// 20
function getCategoriesByRevenueFromActiveUsers() {
  const activeUserIds = users.filter(u => u.isActive).map(u => u.id);

  const revenueByCategory = {};

  orders
    .filter(order => activeUserIds.includes(order.userId))
    .forEach(order => {
      order.products.forEach(productId => {
        const product = products.find(p => p.id === productId);
        revenueByCategory[product.category] =
          (revenueByCategory[product.category] || 0) + product.price;
      });
    });

  return Object.entries(revenueByCategory)
    .map(([category, revenue]) => ({ category, revenue }))
    .sort((a, b) => b.revenue - a.revenue);
}