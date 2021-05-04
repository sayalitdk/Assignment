import React from "react";
import TimeZoneComponent from "../index";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useTimeZoneRequest from "../../../hooks/useTimeZoneHooks";

const mockFn = jest.fn();
test("testing the first render of the page", () => {
  jest.mock("../../../hooks/useTimeZoneHooks", () => {
    return jest.fn(() => ({
      useTimeZoneRequest: mockFn,
    }));
  });

  const timeZoneCmp = render(<TimeZoneComponent />);
  // expect(mockFn).toBeCalled();
  //   const inputNum1 = addNumberComponent.getByTestId("num1");
  //expect(timeZoneCmp).not.toBeNull();

  // const DropDownInTimeZone = timeZoneCmp.getByTestId("DropDownInTimeZone");
  // console.log("DropDownInTimeZone ------------", DropDownInTimeZone);

  //   expect(inputNum1).toHaveTextContent("");

  //   const inputNum2 = addNumberComponent.getByTestId("num1");
  //   expect(inputNum2).not.toBeNull();
  //   expect(inputNum2).toHaveTextContent("");

  //   const addBtn = addNumberComponent.getByTestId("addBtn");
  //   expect(addBtn).toHaveTextContent("Add");
});
