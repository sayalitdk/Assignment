import React, { useContext, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import useTimeZoneRequest from "../hooks/useTimeZoneHooks";

import SelectedTimeZone from "../components/TimezoneComponent/SelectedTimeZone";
let funCalled = true;
storiesOf("SelectedTimeZone", module).add("seltimeZone", () => {
  const state = useTimeZoneRequest();
  if (
    state.records &&
    state.records[0] &&
    state.records[0].zoneName &&
    Object.keys(state.record).length == 0 &&
    funCalled
  ) {
    state.getByZone(state.records[0].zoneName);
    funCalled = false;
  }

  return (
    <SelectedTimeZone
      record={state.record}
      recordError={state.recordError}
      recordStatus={state.recordStatus}
    />
  );
});
