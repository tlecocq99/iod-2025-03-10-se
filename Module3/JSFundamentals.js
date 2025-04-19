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
const main2 = () => {
  let three = "3";
  let four = "4";
  let thirty = "30";
  //what is the value of the following expressions?
  let addition = three + four;
  let multiplication = three * four;
  let division = three / four;
  let subtraction = three - four;
  let lessThan1 = three < four;
  let lessThan2 = thirty < four; //This one is not giving the right answer as 30 < 4 is false
};
console.log(main2());
