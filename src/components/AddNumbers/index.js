import { useState } from "react";
import AddButtonComponent from "../ButtonComponent";
import AddNumberWrapper from "./AddNumberStyle";
import InputBox from "../InputBox";

function addNumber() {
  var sum;
  function getSum(num1, num2) {
    if (sum) {
      return sum;
    } else {
      sum = num1 + num2;
      return sum;
    }
  }
  return getSum;
}

var addNumberOnce = addNumber();

const AddNumbers = () => {
  const [result, setResult] = useState();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState();

  const handleClick = () => {
    if (!num1 || !num2) {
      setError("Please fill both required fields.");
    } else {
      setError("");
      setResult(addNumberOnce(num1, num2));
    }
  };
  return (
    <AddNumberWrapper>
      <div className="text-center">
        {error && (
          <div className="errorMsg" data-testid="error">
            {error}
          </div>
        )}
        <div className="numInputDiv" data-testid="inputDiv">
          <InputBox
            id="num1"
            className="numInput"
            typeValue="number"
            inputValue={num1}
            handleClick={(value) => setNum1(value)}
          />
          <InputBox
            id="num2"
            typeValue="number"
            className="numInput"
            inputValue={num2}
            handleClick={(value) => setNum2(value)}
          />
        </div>
        <AddButtonComponent
          handleClick={handleClick}
          text="Add"
          btnClsName="add"
          testid="addBtn"
        />
        <div className="resultCls" data-testid="result">
          {result && "Sum of the number is: " + result}
        </div>
      </div>
    </AddNumberWrapper>
  );
};

export default AddNumbers;
