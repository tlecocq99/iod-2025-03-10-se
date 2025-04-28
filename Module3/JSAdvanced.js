/*Question #1 makeCounter below is a decorator function which creates and returns a function that
increments a counter. */
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1 (3 with incrementBy 3)
counter1(); // 2 (6 with incrementBy 3)
/*a) Create a second counter 'counter2' using the makeCounter function and test to see if
it remains independent to counter1 */
let counter2 = makeCounter();
counter2(); // 1 (3 with incrementBy 3)
counter2(); // 2 (6 with incrementBy 3)
/*b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0) */
function makeCounter(startFrom) {
  let currentCount = startFrom || 5;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter3 = makeCounter(10);
counter3(); // 11 (13 with incrementBy 3)
/* c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by. */
function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom || 0;
  return function () {
    currentCount += incrementBy || 3;
    console.log(currentCount);
    return currentCount;
  };
}

/* Question #2: The following delayMsg function is intended to be used to delay printing a message until
some time has passed. */
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
// a) What order will the four tests below print in? Why?
// The order will be: #4, #3, #2, #1. The setTimeout function is asynchronous, so it will not block the execution of the code. The delayMsg function will be called after the specified delay time, but the rest of the code will continue. So, the "not delayed at all" message will be printed first, followed by the messages with delays of 0ms, 20ms, and 100ms respectively.

// b) Rewrite delayMsg as an arrow function
const delayMsg2 = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg2, 200, "#5: Delayed by 200ms");
setTimeout(delayMsg2, 120, "#6: Delayed by 120ms");
setTimeout(delayMsg2, 101, "#7: Delayed by 101ms");
delayMsg2("#8: Not delayed at all");
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
const delayMsg3 = (msg) => {
  console.log(`This message will be printed after a delay ${msg}`);
};
const timeoutId = setTimeout(delayMsg3, 20000, "#9: Delayed by 20 seconds");
//d) Use clearTimeout to prevent the fifth test from printing at all.
clearTimeout(timeoutId);
console.log("Timeout cleared for test #9");

//Question #3: Using the following code to test and start with:
function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
/*fire off 3 calls to printMe within 300ms - only the LAST one should print, after
1000ms of no calls */
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
/* a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored. */
function debounce(func) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), 1000);
  };
}
/* b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms */
function debounce(func, ms) {
  //added ms as a parameter
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), ms || 1000); //default to 1000ms if not provided
  };
}
/* c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement. */
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}
const debouncedPrintMe = debounce(printMe, 1000);
debouncedPrintMe("Hello, world!");

/* Question #4: The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2. */
/*a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second. */
function printFibonacci() {
  let a = 0;
  let b = 1;
  setInterval(() => {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }, 1000);
}
//printFibonacci(); prints Fibonacci numbers every second
/* b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing */
function printFibonacciTimeouts() {
  let a = 0;
  let b = 1;
  function printNext() {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
    setTimeout(printNext, 1000);
  }
  setTimeout(printNext, 1000); // start the first timeout
}
//printFibonacciTimeouts(); prints Fibonacci numbers every second using setTimeout
/* c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping. */
function printFibonacciWithLimit(limit) {
  let a = 0;
  let b = 1;
  let count = 0;
  const intervalId = setInterval(() => {
    console.log(a);
    count++;
    if (count >= limit) {
      clearInterval(intervalId); // stop the interval when the limit is reached
    }
    const next = a + b;
    a = b;
    b = next;
  }, 1000);
}
printFibonacciWithLimit(10); // prints 10 Fibonacci numbers every second

/* Question #5: The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why? */
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails
/* a) Fix the setTimeout call by wrapping the call to car.description() inside a
function */
setTimeout(() => car.description(), 200); //works now
/* b) Change the year for the car by creating a clone of the original and overriding it */
car = { ...car, year: 2011 };
/*c) Does the delayed description() call use the original values or the new values from
b)? Why?*/
// The delayed description() call uses the original values because the context of 'this' in the setTimeout function is not bound to the car2 object. It still refers to the original car object. To fix this, we can use an arrow function or bind the context explicitly.
/*d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function*/
car.description = car.description.bind(car); //binds the context to car2
setTimeout(car.description, 200); //works now with car2 values
/*e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)*/
car = { ...car, make: "Ferarri" }; //changes the make to Ferarri but keeps bound value of porsche

/* Question# 6: Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/
function multiply(a, b) {
  console.log(a * b);
}
/* a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters*/
Function.prototype.delay = function (ms) {
  const originalFunc = this; // store the original function
  return function (...args) {
    setTimeout(() => {
      originalFunc.apply(this, args); // call the original function with the provided arguments
    }, ms);
  };
};
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
/* b) Use apply to improve your solution so that delayed functions can take any number of
parameters*/
Function.prototype.delayB = function (ms) {
  const originalFunc = this; // store the original function
  return function (...args) {
    setTimeout(() => {
      originalFunc.apply(this, args); // call the original function with the provided arguments
    }, ms);
  };
};
function multiply4(a, b, c) {
  console.log(a * b * c);
}
multiply4.delayB(500)(5, 5, 2); // prints 50 after 500 milliseconds

/* Question #7: The following DigitalClock class uses an interval to print the time every second once
started, until stopped. */
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();
/*a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.*/
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const myPrecisionClock = new PrecisionClock("my precision clock:", 500);
myPrecisionClock.start();
/*b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
  start() {
    this.display();
    this.timer = setInterval(() => {
      this.display();
      const currentTime = new Date();
      const currentHours = String(currentTime.getHours()).padStart(2, "0");
      const currentMinutes = String(currentTime.getMinutes()).padStart(2, "0");
      if (`${currentHours}:${currentMinutes}` === this.wakeupTime) {
        console.log("Wake Up!");
        this.stop();
      }
    }, 1000);
  }
}
const myAlarmClock = new AlarmClock("my alarm clock:", "07:00");
myAlarmClock.start();

/* Question #8: Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.*/
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}
/* a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not*/
function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string");
    }
    return fn(arg);
  };
}
/* b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string*/

/* c) Extend the decorator function to validate as strings all arguments passed to fn */
function validateStringArgs(fn) {
  return function () {
    for (let arg of arguments) {
      if (typeof arg !== "string") {
        throw new Error(`Argument ${arg} must be a string`);
      }
    }
    return fn.apply(this, arguments);
  };
}
/*d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments*/
try {
  console.log(validatedOrderItem("Apple Watch")); // should run the function
  //console.log(validatedOrderItem(123)); // should throw an error

  console.log(validatedOrderItems("Apple Watch", "Airpods")); // should run the function
  console.log(validatedOrderItems("abc", 123)); // should throw an error
} catch (err) {
  console.log(err);
}

/* Question #9: We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute. */
/* a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below*/
function randomDelay() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 20000) + 1000; // random delay between 1 and 20 seconds
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
randomDelay().then(() => console.log("There appears to have been a delay."));
/*b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it*/
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000; // random delay between 1 and 20 seconds
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve();
      } else {
        reject(new Error("Random delay was odd, rejecting promise."));
      }
    }, delay);
  });
}
/* c) Update the testing code to catch rejected promises and print a different message*/
randomDelay()
  .then(() => console.log("There appears to have been a delay."))
  .catch((error) => console.log(error.message));
/* d) Try to update the then and catch messages to include the random delay value*/
randomDelay()
  .then((delay) =>
    console.log(`There appears to have been a delay of ${delay}ms.`)
  )
  .catch((error) => console.log(`Error: ${error.message}`));

/* Question #10: Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.) */
import fetch from "node-fetch";
globalThis.fetch = fetch;
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
/* a) Write a new version of this function using async/await*/
async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}
/* b) Test both functions with valid and invalid URLs*/
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
fetchURLData("https://jsonplaceholder.typicode.com/todos/invalid");
/* c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.*/
async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map((url) => fetchURLDataAsync(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    console.error(error.message);
  }
}
fetchMultipleURLs([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
])
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
