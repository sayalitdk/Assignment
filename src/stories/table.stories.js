import React from "react";
import { storiesOf } from "@storybook/react";
import CardData from "../contexts/CardData";
import Table from "../components/TableComponent";

storiesOf("Table", module).add("SingleRow", () => (
  <Table
    reqData={[
      CardData[0].reqReference,
      CardData[0].reqCategory,
      CardData[0].reqStatus,
    ]}
    reqHeaderData={["Request References", "Category", "Request Status"]}
  />
));
