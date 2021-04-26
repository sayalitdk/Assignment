import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DataContext } from "../contexts/DataContext";

import SelectedTimeZone from "../components/TimezoneComponent/SelectedTimeZone";
console.log("DataContext", DataContext);
storiesOf("SelectedTimeZone", module).add("seltimeZone", () => (
  <SelectedTimeZone record={""} recordError={""} recordStatus={""} />
));
