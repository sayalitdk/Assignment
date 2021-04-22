import React, { useState, useContext, useEffect } from "react";
import { DataContext, DataProvider } from "../../contexts/DataContext";
import SelectedTimeZone from "./SelectedTimeZone";

const TimeZone = () => {
  const {
    records: timezoneRecords,
    status,
    error,
    record,
    recordStatus,
    recordError,
    getByZone,
  } = useContext(DataContext);
  const [selectedTimeZone, setSelectedTimeZone] = useState();

  useEffect(() => {
    if (timezoneRecords && timezoneRecords.length > 0) {
      setSelectedTimeZone(timezoneRecords[0].zoneName);
    }
  }, [timezoneRecords]);

  useEffect(() => {
    if (selectedTimeZone) {
      getByZone(selectedTimeZone);
    }
  }, [selectedTimeZone, getByZone]);

  return status === "loading" ? (
    <div>Loading dropdown for you...</div>
  ) : error && error.message ? (
    <div>
      Something went wrong in getting dropdown details. The error message says:{" "}
      {error.message}
    </div>
  ) : (
    <>
      {timezoneRecords && timezoneRecords.length > 0 && (
        <select
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.currentTarget.value)}
        >
          {timezoneRecords.map((item) => (
            <option key={item.zoneName} value={item.zoneName}>
              {item.zoneName}
            </option>
          ))}
        </select>
      )}
      {record && Object.keys(record).length > 0 && (
        <SelectedTimeZone
          record={record}
          recordError={recordError}
          recordStatus={recordStatus}
        />
      )}
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
