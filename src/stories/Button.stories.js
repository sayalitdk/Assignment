import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../components/ButtonComponent";

storiesOf("Button", module)
  .add("Reject", () => (
    <Button onClick={action("click")} text="Reject" btnClsName="reject" />
  ))
  .add("Authorize", () => (
    <Button text="Authorize" onClick={action("click")} btnClsName="authorize" />
  ));
