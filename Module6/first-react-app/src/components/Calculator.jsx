import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Error: enter valid numbers");
      return;
    }
    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "∞";
        break;
      default:
        res = "Unknown operator";
    }
    setResult(res);
  };

  return (
    <>
      <form onSubmit={handleCalculate} className="calculator">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
        <button type="submit">=</button>
      </form>
      {result !== null && (
        <div className="calculator-result">Result: {result}</div>
      )}
    </>
  );
}
