import { createContext } from "react";
import useTimeZoneRequest from "../hooks/useTimeZoneHooks";
const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const state = useTimeZoneRequest();
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
export { DataContext, DataProvider };
