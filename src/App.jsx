import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [display, setDisplay] = useState("");

  // Add numbers/operators
  function appendValue(value) {
    let current = display;
    let lastChar = current.slice(-1);

    if (['+', '-', '*', '/'].includes(value)) {
      if (['+', '-', '*', '/'].includes(lastChar)) {
        setDisplay(current.slice(0, -1) + value);
        return;
      }
    }

    setDisplay(current + value);
  }

  // Decimal
  function appendDecimal() {
    let current = display;
    let lastNumber = current.split(/[\+\-\*\/]/).pop();

    if (!lastNumber.includes(".")) {
      setDisplay(current + ".");
    }
  }

  // Clear
  function clearDisplay() {
    setDisplay("");
  }

  // Calculate
  function calculate() {
    let expression = display;

    if (['+', '-', '*', '/'].includes(expression.slice(-1))) {
      expression = expression.slice(0, -1);
    }

    try {
      setDisplay(eval(expression).toString());
    } catch {
      setDisplay("Error");
    }
  }

  // Delete
  function deleteLast() {
    if (display.length > 0) {
      setDisplay(display.slice(0, -1));
    }
  }

  return (
    <div className="calculator">

      <Display display={display} />

      <div className="buttons">
        <Button text="C" className="operator" onClick={clearDisplay} />

        <Button text="÷" className="operator" onClick={() => appendValue('/')} />

        <Button text="×" className="operator" onClick={() => appendValue('*')} />

        <Button text="-" className="operator" onClick={() => appendValue('-')} />

        <Button text="7" onClick={() => appendValue('7')} />
        <Button text="8" onClick={() => appendValue('8')} />
        <Button text="9" onClick={() => appendValue('9')} />

        <Button text="+" className="operator" onClick={() => appendValue('+')} />

        <Button text="4" onClick={() => appendValue('4')} />
        <Button text="5" onClick={() => appendValue('5')} />
        <Button text="6" onClick={() => appendValue('6')} />

        <Button text="=" className="operator" onClick={calculate} />

        <Button text="1" onClick={() => appendValue('1')} />
        <Button text="2" onClick={() => appendValue('2')} />
        <Button text="3" onClick={() => appendValue('3')} />

        <Button text="⌫" className="operator" onClick={deleteLast} />

        <Button text="." onClick={appendDecimal} />

        <Button text="0" className="zero" onClick={() => appendValue('0')} />
      </div>

    </div>
  );
}

export default App;