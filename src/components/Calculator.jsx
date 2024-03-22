import Button from "./Button";
import Display from "./Display";
import "./calculator.css";
import { useState } from 'react'

const Calculator = () => {


  const [displayValue, setDisplayValue] = useState("")

  const handleButtonClick = (buttonValues) => {
    if (buttonValues === "C") {
      setDisplayValue("")
    } else if (buttonValues === "=") {

      try {
        const result = eval(displayValue)
        setDisplayValue(result.toString())
        setTimeout(() => setDisplayValue(""), 2000);
      }
      catch (e) {
        setDisplayValue("Error")

      }
    } else {
      setDisplayValue((prevValue) => prevValue + buttonValues);
    }
  }

  let buttonValues = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return <>
    <center>
      <div className="border">
        <Display displayValue={displayValue} />
        {<Button value={buttonValues} onClick={handleButtonClick} />}
      </div>
    </center>
  </>
};

export default Calculator;
