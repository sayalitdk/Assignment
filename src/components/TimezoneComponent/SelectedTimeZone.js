import React, { useState, useEffect } from "react";
import SingleRowTable from "../TableComponent";
import { formatTime } from "../../utils/format";

const SelectedTimeZone = ({ record, recordError, recordStatus }) => {
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds) {
        setSeconds((seconds) => {
          var temp = new Date(seconds).getTime() + 5000;
          setSeconds(temp);
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    setSeconds(record.formatted);
  }, [record]);

  return (
    <>
      {recordStatus === "loading" ? (
        <div>Loading TimeZone detail and Timer for you....</div>
      ) : recordError ? (
        <div>
          Something went wrong in getting the timezone detail.
          <p>The error message says: {recordError.message}</p>
        </div>
      ) : (
        <>
          <div>{seconds && formatTime(seconds)}</div>
          <SingleRowTable
            reqData={[
              record.countryCode,
              record.countryName,
              record.zoneName,
              record.formatted,
            ]}
            reqHeaderData={[
              "Country Code",
              "Country Name",
              "Zone Name",
              "Date/Time",
            ]}
          />
        </>
      )}
    </>
  );
};
export default SelectedTimeZone;
