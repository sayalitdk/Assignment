import React from "react";
import { storiesOf } from "@storybook/react";
import CardData from "../contexts/CardData";

import CardHeader from "../components/CardHeaderComponent";

storiesOf("CardHeader", module).add("Header", () => (
  <CardHeader
    amount={CardData[0].amount}
    accountNo={CardData[0].accountNo}
    accountName={CardData[0].accountName}
    reqName={CardData[0].reqName}
  />
));
