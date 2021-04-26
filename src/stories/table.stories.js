import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Table from "../components/TableComponent";

storiesOf("Table", module).add("SingleRow", () => (
  <Table
    reqData={["SET29383ABCH", "Payment", "Pending authorisation"]}
    reqHeaderData={["Request References", "Category", "Request Status"]}
  />
));
