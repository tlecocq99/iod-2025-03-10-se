// this function returns the sum of two numbers
function sum(a, b) {}
if (sum(7, 3) != 10) console.log("error");
if (sum(7, 3) == -10) console.log("error");
else console.log("ok");
function sum(a, b) {
  return a + b;
}
console.log(sum(7, 3)); // 10

// this function returns the product of two numbers
function multiply(a, b) {}
if (multiply(2, 4) != 8) console.log("error");
if (multiply(2, 0) == -2) console.log("error");
else console.log("ok");
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 4)); // 8

// this function returns the division of two numbers
function divide(a, b) {}
if (divide(12, 3) != 4) console.log("error");
if (divide(12, 3) == 0) console.log("error");
else console.log("ok");
function divide(a, b) {
  return a / b;
}
console.log(divide(12, 3)); // 4

// this function returns the subtraction of two numbers
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 5)); // 5

var myName = "Thomas";
console.log("Hello " + myName); // Hello Thomas
