/* Question #1 - Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

function capitalizeFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("javascript is fun"));

/* Question #2 - Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator. */
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  }
  return str;
}
console.log(truncate("Hello, world!", 10)); // Hello, wor...
console.log(truncate("Hello, world!", 25)); // Hello, world!
function truncateWithConditional(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}
console.log(truncateWithConditional("Hello, world!", 10)); // Hello, wor...
console.log(truncateWithConditional("Hell, world!", 25)); // Hello, world!

/* Question #3 - Use the following animals array for the below tasks. Test each one by printing the result to
the console. 
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */
const animals = ["Tiger", "Giraffe"];
console.log(animals);
animals.push("Elephant", "Goat");
animals.unshift("Lion", "Monkey");
console.log(animals);
function replaceMiddleAnimal(newValue) {
  const midAnimal = Math.floor(animals.length / 2);
  animals[midAnimal] = newValue;
}
replaceMiddleAnimal("Panda");
console.log(animals);
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) => animal.startsWith(beginsWith, 0)); //basic without upper/lower case fix
}
console.log(findMatchingAnimals("T"));
console.log(findMatchingAnimals("g"));
function findMatchingAnimals2(beginsWith) {
  return animals.filter(
    (animal) => animal.toLowerCase().startsWith(beginsWith.toLowerCase()) //regardless of upper/lower case
  );
}
console.log(findMatchingAnimals2("T"));
console.log(findMatchingAnimals2("g"));

/* Question #4 - Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.4 - */
function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
function camelCase2(cssProp) {
  let result = "";
  for (let i = 0; i < cssProp.length; i++) {
    if (cssProp[i] === "-") {
      i++;
      result += cssProp[i].toUpperCase();
    }
    result += cssProp[i];
  }
  return result;
}
console.log(camelCase2("margin-left")); // marginLeft
