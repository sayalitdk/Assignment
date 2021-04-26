import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import InputBox from "../components/InputBox";

storiesOf("Input", module).add("InputBox", () => (
  <InputBox
    className="numInput"
    typeValue="number"
    inputValue={0}
    handleClick={action("click")}
  />
));
