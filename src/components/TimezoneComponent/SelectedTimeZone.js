import React, { useState, useEffect, useMemo, useContext } from "react";
import { formatTime } from "../../utils/format";
import { DataContext } from "../../contexts/DataContext";

const SelectedTimeZone = ({ selectedTimeZone }) => {
  const { record, recordError, getByZone } = useContext(DataContext);
  const { countryCode, countryName, zoneName, formatted } = record;
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedTimeZone) {
        getByZone(selectedTimeZone);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedTimeZone]);

  useEffect(() => {
    if (selectedTimeZone) {
      getByZone(selectedTimeZone);
    }
  }, [selectedTimeZone]);

  const getTimerValue = useMemo(() => {
    return record.formatted;
  }, [record.formatted]);
  return (
    <>
      {recordError ? (
        <div data-testid="ErrorInSelTimeZone">
          Something went wrong in getting the timezone detail.
          <p>The error message says: {recordError.message}</p>
        </div>
      ) : selectedTimeZone ? (
        <>
          <div data-testid="TimerInSelTimeZone">
            {formatted && formatTime(formatted)}
          </div>
          <div>
            <p>Country Code: {countryCode}</p>
            <p>Country Name: {countryName}</p>
            <p>Zone Name: {zoneName}</p>
            <p>Date/Time: {formatted}</p>
          </div>
        </>
      ) : null}
    </>
  );
};
export default SelectedTimeZone;
