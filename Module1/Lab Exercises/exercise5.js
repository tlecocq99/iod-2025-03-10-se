let sports = ["soccer", "baseball", "basketball", "football", "hockey"];
console.log(sports); // ["soccer", "baseball", "basketball", "football", "hockey"]
let index = sports.indexOf("baseball");
if (index !== -1) {
  sports[index] = "softball"; // Replace baseball with softball
}
let index2 = sports.indexOf("hockey");
if (index2 !== -1) {
  sports[index2] = "handball"; // Replace hockey with handball
}
console.log(sports); // ["soccer", "softball", "basketball", "football", "handball"]
sports.unshift("volleyball"); // Add volleyball to the beginning of the array
console.log(sports); // ["volleyball", "soccer", "softball", "basketball", "football", "handball"]
sports.pop(); // Remove the last element of the array
console.log(sports); // ["volleyball", "soccer", "softball", "basketball", "football"]
