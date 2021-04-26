import { useState } from "react";
import CardButtonComponent from "../ButtonComponent";
import AddNumberWrapper from "./AddNumberStyle";
import InputBox from "../InputBox";

function addNumber(num1, num2) {
  addNumber = function () {
    return null;
  };
  return num1 + num2;
}

const AddNumbers = () => {
  const [result, setResult] = useState();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState();

  const handleClick = () => {
    if (!num1 || !num2) {
      setError("Please fill both required fields.");
    } else {
      var numResult = addNumber(num1, num2);
      setError("");
      if (numResult) {
        setResult(numResult);
      }
    }
  };
  return (
    <AddNumberWrapper>
      <div className="text-center">
        {error && <div className="errorMsg">{error}</div>}
        <div className="numInputDiv">
          <InputBox
            className="numInput"
            typeValue="number"
            inputValue={num1}
            handleClick={(value) => setNum1(value)}
          />
          <InputBox
            typeValue="number"
            className="numInput"
            inputValue={num2}
            handleClick={(value) => setNum2(value)}
          />
        </div>
        <CardButtonComponent handleClick={handleClick} text="Add" />
        <div className="resultCls">
          {result && "Sum of the number is: " + result}
        </div>
      </div>
    </AddNumberWrapper>
  );
};

export default AddNumbers;
