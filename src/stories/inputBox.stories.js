import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import InputBox from "../components/InputBox";

storiesOf("Input", module).add("InputBox", () => {
  const [numValue, setNumValue] = useState();
  return (
    <InputBox
      className="numInput"
      typeValue="number"
      inputValue={numValue}
      handleClick={(value) => setNumValue(value)}
    />
  );
});
