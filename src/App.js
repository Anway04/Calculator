import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
 const [display, setDisplay] = useState('0');
 const [operation, setOperation] = useState(null);
 const [operand, setOperand] = useState(null);

 const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
 };

 const handleOperatorClick = (operator) => {
    if (!operation) {
      setOperand(parseFloat(display));
      setOperation(operator);
      setDisplay('0');
    } else {
      const result = calculateResult();
      setOperand(result);
      setOperation(operator);
      setDisplay('0');
    }
 };

 const calculateResult = () => {
    const operand2 = parseFloat(display);
    switch (operation) {
      case '+':
        return operand + operand2;
      case '-':
        return operand - operand2;
      case '*':
        return operand * operand2;
      case '÷':
        return operand / operand2;
      default:
        return operand2;
    }
 };

 const handleEqualClick = () => {
    if (!operand || !operation) {
      return;
    }
    const result = calculateResult();
    setDisplay(result.toString());
    setOperation(null);
 };

 const handleClearClick = () => {
    setDisplay('0');
    setOperation(null);
    setOperand(null);
 };

 return (
    <div className="calculator">
        <h2>  Calculator </h2>
      <input type="text" className="display" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('÷')}>÷</button>

        <button onClick={handleClearClick}>AC</button>
      </div>
    </div>
 );
};

export default Calculator;