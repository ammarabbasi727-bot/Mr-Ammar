console.log("===== OBJECT DESTRUCTURING =====");

let student = {
  name: "Ammar",
  age: 13,
  course: "Physics"
};

// Destructuring
let { name, age, course } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);



console.log("\n===== ARRAY DESTRUCTURING =====");

let colors = ["red", "green", "blue"];

let [first, second, third] = colors;

console.log("First Color:", first);
console.log("Second Color:", second);
console.log("Third Color:", third);



console.log("\n===== SPREAD OPERATOR (ARRAY COPY) =====");

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

arr2.push(4);

console.log("Original Array:", arr1);
console.log("Copied Array:", arr2);



console.log("\n===== SPREAD OPERATOR (OBJECT COPY + UPDATE) =====");

let user = {
  username: "Ammar",
  age: 20
};

let updatedUser = {
  ...user,
  age: 21,
  country: "Pakistan"
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);



console.log("\n===== DESTRUCTURING + SPREAD TOGETHER =====");

let product = {
  title: "Premium Shoes",
  price: 3000,
  brand: "Nike"
};

// Destructuring
let { title, price } = product;

// Spread update
let discountedProduct = {
  ...product,
  price: 2500
};

console.log("Title:", title);
console.log("Original Product:", product);
console.log("Discounted Product:", discountedProduct);