const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num3);
  let number2 = parseInt(req.query.num4);
  let sum = number1 - number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num5);
  let number2 = parseInt(req.query.num6);
  let sum = number1 * number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num7);
  let number2 = parseInt(req.query.num8);
  let sum = number1 / number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };
