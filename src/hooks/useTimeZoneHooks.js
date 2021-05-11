import React, { useReducer, useEffect } from "react";
import timeZoneReducer, { REQUEST_STATUS } from "../reducers/timeZoneReducer";
import axios from "axios";
import {
  GET_ALL_FAILURE,
  GET_ALL_SUCCESS,
  GET_BY_ZONE,
  GET_BY_ZONE_SUCCESS,
  GET_BY_ZONE_FAILURE,
} from "../actions/timeZoneAction";

const useTimeZoneRequest = () => {
  const [
    { records, status, error, record, recordStatus, recordError },
    dispatch,
  ] = useReducer(timeZoneReducer, {
    records: [],
    status: REQUEST_STATUS.LOADING,
    error: null,
    record: {},
    recordStatus: REQUEST_STATUS.LOADING,
    recordError: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zoneName=Europe`,
          {
            cancelToken: signal.current.token,
          }
        );
        dispatch({
          type: GET_ALL_SUCCESS,
          records: response.data.zones,
          recordError: null,
        });
      } catch (e) {
        console.log("Loading data error", e);
        if (axios.isCancel(e)) {
          console.log("Get request canceled");
        } else {
          dispatch({
            type: GET_ALL_FAILURE,
            error: e,
          });
        }
      }
    };
    fetchData();
    return () => {
      console.log("unmount and cancel running axios request");
      signal.current.cancel();
    };
  }, [signal]);

  const propsLocal = {
    records,
    status,
    error,
    record,
    recordStatus,
    recordError,
    getByZone: React.useCallback(async (zone, record) => {
      try {
        if (zone === undefined || zone === null) {
          throw new Error("Selected value has either undefined or null value.");
        }
        dispatch({
          type: GET_BY_ZONE,
          zone,
        });
        const newSelectedRecord = await axios.get(
          `http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${zone}`,
          record
        );
        dispatch({
          type: GET_BY_ZONE_SUCCESS,
          record: newSelectedRecord.data,
        });
      } catch (e) {
        dispatch({
          type: GET_BY_ZONE_FAILURE,
          recordError: e,
        });
      }
    }, []),
  };
  return propsLocal;
};

export default useTimeZoneRequest;
