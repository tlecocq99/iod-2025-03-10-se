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

/* Question #5 - a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10. */
let twentyCents = 0.2;
let tenCents = 0.1;
let float1 = parseFloat(twentyCents.toFixed(2));
let float2 = parseFloat(tenCents.toFixed(2));
console.log(float1 + float2); //why is this not working? This is not working because it is treating the numbers as strings. To fix this, we would just need to add parseFloat infront of a result to convert it to a number.
let currencyAddition = parseFloat((float1 + float2).toFixed(2)); // This will give the correct result of 0.3
console.log(currencyAddition); // 0.3
let currencyOperation = function (float1, float2, operation, numDecimals = 2) {
  if (numDecimals < 1 || numDecimals > 10) {
    return "numDecimals must be between 1 and 10";
  }
  switch (operation) {
    case "+":
      return parseFloat((float1 + float2).toFixed(numDecimals));
    case "-":
      return parseFloat((float1 - float2).toFixed(numDecimals));
    case "*":
      return parseFloat((float1 * float2).toFixed(numDecimals));
    case "/":
      return parseFloat((float1 / float2).toFixed(numDecimals));
    default:
      return "Invalid operation";
  }
};
console.log(currencyOperation(0.2, 0.1, "+")); // 0.3
console.log(currencyOperation(0.2, 0.1, "-")); // 0.1

/* Question #6 - Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}
const animals2 = [
  "Tiger",
  "Giraffe",
  "Elephant",
  "Lion",
  "Monkey",
  "Tiger",
  "Elephant",
  "Lion",
];
console.log(unique(animals2)); // [ 'Tiger', 'Giraffe', 'Elephant', 'Lion', 'Monkey' ]

/* Question #7 - Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
/*a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.*/
function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}
console.log(getBookTitle(1)); // The Great Gatsby
/*b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.*/
function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log(JSON.stringify(getOldBooks()));

/*c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.*/
function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}
console.log(JSON.stringify(addGenre()));
/*d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.*/
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}
console.log(getTitles("F")); // [ 'The Great Gatsby' ]
/*e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. */
function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}
console.log(latestBook()); // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

/*Question #8 - The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
//a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();
//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
Array.from([
  ["Diana", "0412312343"],
  ["Ethan", "0433221117"],
  ["Fiona", "0455221182"],
]).forEach(([key, value]) => phoneBookDEF.set(key, value));
console.log(phoneBookDEF);
//Update the phone number for Caroline
phoneBookABC.set("Caroline", "0455224923");
console.log(phoneBookABC);
/*d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map */
function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}
printPhoneBook(phoneBookABC);
//e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
//f) Print out the full list of names in the combined phone book
printPhoneBook(phoneBook);

//Question #9 - Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
/*a) Write a function sumSalaries(salaries) that calculates and returns the total of all
salaries*/
function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}
console.log(sumSalaries(salaries)); // 233000
/* b) Write a function topEarner(salaries) that calculates and returns the name of the
person earning the highest salary */
function topEarner(salaries) {
  let maxSalary = 0;
  let topEarner = "";
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarner = name;
    }
  }
  return topEarner;
}
console.log(topEarner(salaries)); // Christina

/* Question #10 - 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: */
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
//a) Print the total number of minutes that have passed so far today
console.log(
  today.getHours() * 60 +
    today.getMinutes() +
    " minutes have passed so far today"
);
//b) Print the total number of seconds that have passed so far today
console.log(
  today.getHours() * 3600 +
    today.getMinutes() * 60 +
    today.getSeconds() +
    " seconds have passed so far today"
);
//c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthDate = new Date("02-16-1999");

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
    monthDiff = (monthDiff + 12) % 12; // Adjust month difference
  }

  if (dayDiff < 0) {
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    dayDiff += previousMonth.getDate(); // Add days from the previous month
    monthDiff--;
  }

  return { age, months: monthDiff, days: dayDiff };
}

const { age, months, days } = calculateAge(birthDate);
console.log(`I am ${age} years, ${months} months and ${days} days old`);
/*d) Write a function daysInBetween(date1, date2) which calculates and returns the
amount of days in between the two given dates. */
function daysInBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((date2 - date1) / oneDay));
}
const present = new Date();
const date2 = new Date("09-01-1939");
console.log(
  `There are ${daysInBetween(
    present,
    date2
  )} days between ${present} and ${date2}`
);
