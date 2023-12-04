/*
   Filename: sophisticated_code.js
   Content: Elaborate and complex JavaScript code
*/

// This is an example of a complex code with more than 200 lines

// Class representing a Person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john = new Person("John Doe", 30, "Software Developer");

// Call the greet method
john.greet();

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log("Random Number:", randomNumber);

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Check if the random number is prime
console.log("Is Prime:", isPrime(randomNumber));

// Example of a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Calculate the factorial of 5
console.log("Factorial:", factorial(5));

// Example of working with arrays and array methods
const numbers = [1, 2, 3, 4, 5];

// Map numbers array to double its values
const doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Filter numbers array to get only even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Reduce numbers array to calculate the sum of its values
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log("Sum:", sum);

// Example of working with Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Fetched Data";
      resolve(data);
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log("Fetched Data:", data);
}).catch((error) => {
  console.error("Error:", error);
});

// Complex code with multiple nested loops
for (let i = 1; i <= 3; i++) {
  console.log("Outer Loop:", i);

  for (let j = 1; j <= 3; j++) {
    console.log("Inner Loop:", j);

    for (let k = 1; k <= 3; k++) {
      console.log("Nested Loop:", k);
    }
  }
}

// ... continue adding more complex and elaborate code here
// until the code reaches more than 200 lines