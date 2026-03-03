let numbers = [1, 2, 3, 4, 5];

// 1.
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of the numbers:", sum);

// 2. Add new number to end
numbers.push(6);
console.log("Array after adding a new number:", numbers);

// 3. Remove first number
numbers.shift();
console.log("Array after removing the first number:", numbers);

// 4. Reverse the array
numbers.reverse();
console.log("Reversed array:", numbers);

// 5. Check if specific number exists
console.log("Does the array contain 5?", numbers.includes(5));

// 6. Multiply each number by 2 using map()
let multiplied = numbers.map(num => num * 2);
console.log("New array with numbers multiplied by 2:", multiplied);

// 7. Filter numbers greater than 3
let greaterThanThree = numbers.filter(num => num > 3);
console.log("Numbers greater than 3:", greaterThanThree);

// 8. Find first number divisible by 2
let divisibleByTwo = numbers.find(num => num % 2 === 0);
console.log("First number divisible by 2:", divisibleByTwo);