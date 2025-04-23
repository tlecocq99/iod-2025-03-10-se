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
