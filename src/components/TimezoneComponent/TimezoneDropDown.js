import React, { useContext, useEffect, memo } from "react";
import { useMemo } from "react";
import { DataContext } from "../../contexts/DataContext";

const TimezoneDropDown = (props) => {
  const { records: timezoneRecords, status, error } = useContext(DataContext);
  useEffect(() => {
    if (timezoneRecords && timezoneRecords.length > 0) {
      props.onChangeHandler(timezoneRecords[0].zoneName);
    }
  }, [timezoneRecords]);
  const memoizedTimeZoneRecords = useMemo(() => {
    return timezoneRecords;
  }, [timezoneRecords]);
  return status === "loading" ? (
    <div data-testid="LoadingInDropdownTimeZone">
      Loading dropdown for you...
    </div>
  ) : error && error.message ? (
    <div data-testid="ErrorInDropdownTimeZone">
      Something went wrong in getting dropdown details. The error message says:{" "}
      {error.message}
    </div>
  ) : (
    memoizedTimeZoneRecords &&
    memoizedTimeZoneRecords.length > 0 && (
      <select
        value={props.selectedTimeZone}
        onChange={(e) => props.onChangeHandler(e.currentTarget.value)}
        data-testid="DropDownInTimeZone"
      >
        {memoizedTimeZoneRecords.map((item) => (
          <option key={item.zoneName} value={item.zoneName}>
            {item.zoneName}
          </option>
        ))}
      </select>
    )
  );
};

export default memo(TimezoneDropDown);
