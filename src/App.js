import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    if (input === "0" && !isNaN(value)) {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };
  
  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setInput(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };
  const clearInput = () => {
    setInput("0");
    setResult("");
  };

  return (
    <div id="drum-machine">
      <div id="display">
        <h1>{result || input}</h1>
      </div>
      <div className="calculator">
        <button id="clear" onClick={clearInput}>AC</button>
        <button id="divide" onClick={() => handleInput("/")}>/</button>
        <button id="multiply" onClick={() => handleInput("*")}>*</button>
        <button id="seven" onClick={() => handleInput("7")}>7</button>
        <button id="eight" onClick={() => handleInput("8")}>8</button>
        <button id="nine" onClick={() => handleInput("9")}>9</button>
        <button id="subtract" onClick={() => handleInput("-")}>-</button>
        <button id="four" onClick={() => handleInput("4")}>4</button>
        <button id="five" onClick={() => handleInput("5")}>5</button>
        <button id="six" onClick={() => handleInput("6")}>6</button>
        <button id="add" onClick={() => handleInput("+")}>+</button>
        <button id="one" onClick={() => handleInput("1")}>1</button>
        <button id="two" onClick={() => handleInput("2")}>2</button>
        <button id="three" onClick={() => handleInput("3")}>3</button>
        <button id="equals" onClick={calculateResult}>=</button>
        <button id="zero" onClick={() => handleInput("0")}>0</button>
        <button id="decimal" onClick={() => handleInput(".")}>.</button>
      </div>
    </div>
  );
};

export default App;
