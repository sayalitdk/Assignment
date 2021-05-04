import React, { useState } from "react";
import { DataProvider } from "../../contexts/DataContext";
import SelectedTimeZone from "./SelectedTimeZone";
import TimeZoneDropDown from "./TimezoneDropDown";

const TimeZone = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState();
  return (
    <>
      <TimeZoneDropDown
        selectedTimeZone={selectedTimeZone}
        onChangeHandler={(value) => setSelectedTimeZone(value)}
      />
      <SelectedTimeZone selectedTimeZone={selectedTimeZone} />
    </>
  );
};

const TimezoneComponent = (props) => {
  return (
    <DataProvider>
      <TimeZone {...props} />
    </DataProvider>
  );
};

export default TimezoneComponent;
