import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  GET_BY_ZONE,
  GET_BY_ZONE_SUCCESS,
  GET_BY_ZONE_FAILURE,
} from "../actions/timeZoneAction";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
const timeZoneReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_SUCCESS: {
      return {
        ...state,
        records: action.records,
        status: REQUEST_STATUS.SUCCESS,
      };
    }
    case GET_ALL_FAILURE: {
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.error,
      };
    }
    case GET_BY_ZONE: {
      return {
        ...state,
        recordStatus: REQUEST_STATUS.LOADING,
      };
    }
    case GET_BY_ZONE_SUCCESS: {
      return {
        ...state,
        record: action.record,
        recordStatus: REQUEST_STATUS.SUCCESS,
      };
    }
    case GET_BY_ZONE_FAILURE: {
      return {
        ...state,
        recordStatus: REQUEST_STATUS.ERROR,
        recordError: action.recordError,
      };
    }
    default:
      return state;
  }
};
export default timeZoneReducer;
