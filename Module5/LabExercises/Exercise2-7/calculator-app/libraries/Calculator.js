const Logger = require("./Logging");
const loggerAdd = new Logger("addition");
const loggerSubtract = new Logger("subtraction");
const loggerMultiply = new Logger("multiplication");
const loggerDivide = new Logger("division");
class Calculator {
  add(num1, num2) {
    const value = num1 + num2;
    loggerAdd.log(value);
    return value;
  }
  subtract(num3, num4) {
    const value = num3 - num4;
    loggerSubtract.log(value);
    return value;
  }
  multiply(num5, num6) {
    const value = num5 * num6;
    loggerMultiply.log(value);
    return value;
  }
  divide(num7, num8) {
    const value = num7 / num8;
    loggerDivide.log(value);
    return value;
  }
}
module.exports = Calculator;
