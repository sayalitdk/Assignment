import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CardHeader from "../components/CardHeaderComponent";

storiesOf("CardHeader", module).add("Header", () => (
  <CardHeader
    amount={1000.6789658}
    accountNo={3254353498654646}
    accountName={"ABC Company"}
    reqName={"Cancel / recall payment"}
  />
));
