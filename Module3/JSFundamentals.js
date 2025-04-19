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
return {
  addition,
  multiplication,
  division,
  subtraction,
  lessThan1,
  lessThan2,
};
