import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CardData from "../contexts/CardData";
import { DataContext } from "../contexts/DataContext";

import Card from "../components/CardComponent/index";

storiesOf("Card", module).add("Card", () => (
  <DataContext.Provider value={CardData}>
    <Card />
  </DataContext.Provider>
));
