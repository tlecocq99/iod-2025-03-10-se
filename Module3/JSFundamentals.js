//Question #1 - The function does not explicitly return a value, so it returns undefined.
const main = () => {
  "" + 1 + 0;
  "" - 1 + 0;
  true + false;
  !true;
  6 / "3";
  "2" * "3";
  4 + 5 + "px";
  "$" + 4 + 5;
  "4" - 2;
  "4px" - 2;
  " -9 " + 5;
  " -9 " - 5;
  null + 1;
  undefined + 1;
  undefined == null;
  undefined === null;
  " \t \n" - 2;
};
console.log(main());

//Question #2
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
/*let addition = three + four; This will concatenate the two strings, so the result is "34"
If we want to add the two numbers, we need to convert them to numbers first: */
let addition = Number(three) + Number(four); //7
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
//let lessThan2 = thirty < four; This one is not giving the right answer as 30 < 4 is false, so to fix it, we would do:
//let lessThan2 = thirty > four; Just doing this alone will not work, we need to convert the string to a number first:
let lessThan2 = Number(thirty) > Number(four); //true
console.log(
  addition,
  multiplication,
  division,
  subtraction,
  lessThan1,
  lessThan2
);

//Question #3: Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); //will print because "0" is a non-empty string.
if (null) console.log("null is true");
if (-1) console.log("negative is true"); //will print because -1 is a non-zero number.
if (1) console.log("positive is true"); //will print because 1 is a non-zero number.

/*Question #4: Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do? */
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
a + b < 10 ? (result += "less than 10") : (result += "greater than 10");
console.log(result);
//The '+=' operator is a shorthand for adding a value to a variable and assigning the result back to that variable.

/*Question #5: Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same. 
function getGreeting(name) {
  return "Hello " + name + "!";
} 
console.log(getGreeting("Thomas")); Hello Thomas! */
const getGreeting2 = function (name) {
  return "Hello " + name + "!"; //function expression syntax
};
console.log(getGreeting2("Thomas")); //Hello Thomas!

const getGreeting3 = (name) => "Hello " + name + "!"; //arrow function syntax
console.log(getGreeting3("Thomas")); //Hello Thomas!

/*Question #6: a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die!"
      : "Nice to meet you.",
};
inigo.greeting(westley);
inigo.greeting(rugen);

/*Question #7: The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations. */
const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}, fouls: ${this.fouls}`);
    return this;
  },
  fullTime() {
    console.log(`Fulltime score is ${this.score}, fouls: ${this.fouls}`);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .threePointer()
  .halfTime()
  .foul()
  .freeThrow()
  .basket()
  .threePointer()
  .basket()
  .basket()
  .threePointer()
  .fullTime();

/*Question #8: The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object. */
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
for (let key in sydney) {
  console.log("key: " + key);
  console.log("value: " + sydney[key]);
}

const melbourne = {
  name: "Melbourne",
  population: 4_000_000,
  state: "VIC",
  founded: "1788",
  timezone: "Australia/Melbourne",
};
for (let key in melbourne) {
  console.log("key: " + key);
  console.log("value: " + melbourne[key]);
}

/*Question #9: Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent. */
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports.slice(); // Create a shallow copy of the array
moreSports.push("Baseball", "Soccer");
moreSports.unshift("Tennis", "Rugby");
console.log(moreSports);
const dog1 = "Bingo";
let dog2 = dog1; // This creates a new variable dog2 but does not change dog1
console.log(dog2);
dog2 = "Rover";
console.log(dog2);
let cat1 = { name: "Fluffy", breed: "Siberian" };
const cat2 = { ...cat1, name: "Whiskers" }; // Create a shallow copy of the object
console.log(cat2);
console.log(teamSports);
console.log(dog1); //The original variables have not changed as shallow copies were created for the array and object.
console.log(cat1);

/*Question #10: 10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive. */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16; // Assuming 16 is the minimum age to drive
}
let person1 = new Person();
let person2 = new Person("John", 25);
console.log(person1.name, person1.age);
console.log(person2.name, person2.age);
function PersonClass(name, age) {
  this.name = name;
  this.age = age;
  this.canDrive = () => this.age >= 16;
}
let person3 = new PersonClass("Jake", 27);
console.log(person3.name, person3.age);
console.log(person3.canDrive()); // true
console.log(person2.canDrive()); // true
console.log(person1.canDrive()); // false
