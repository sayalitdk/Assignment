import React from "react";
import AddNumbers from "../index";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("testing the first render of the page", () => {
  const addNumberComponent = render(<AddNumbers />);
  const inputNum1 = addNumberComponent.getByTestId("num1");
  expect(inputNum1).not.toBeNull();
  expect(inputNum1).toHaveTextContent("");

  const inputNum2 = addNumberComponent.getByTestId("num1");
  expect(inputNum2).not.toBeNull();
  expect(inputNum2).toHaveTextContent("");

  const addBtn = addNumberComponent.getByTestId("addBtn");
  expect(addBtn).toHaveTextContent("Add");
});

test("testing to change the input value", () => {
  const addNumberComponent = render(<AddNumbers />);
  const inputNum1 = addNumberComponent.getByTestId("num1");
  const inputNum2 = addNumberComponent.getByTestId("num2");
  fireEvent.change(inputNum1, {
    target: {
      value: "4",
    },
  });
  expect(inputNum1.value).toBe("4");
  fireEvent.change(inputNum2, {
    target: {
      value: "4",
    },
  });
  expect(inputNum2.value).toBe("4");
});

test("testing Add Numbers functionality with values", () => {
  const addNumberComponent = render(<AddNumbers />);
  const inputNum1 = addNumberComponent.getByTestId("num1");
  const inputNum2 = addNumberComponent.getByTestId("num2");
  const addBtn = addNumberComponent.getByTestId("addBtn");
  const result = addNumberComponent.getByTestId("result");
  fireEvent.change(inputNum1, {
    target: {
      value: "4",
    },
  });
  expect(inputNum1.value).toBe("4");
  fireEvent.change(inputNum2, {
    target: {
      value: "4",
    },
  });
  expect(inputNum2.value).toBe("4");

  fireEvent.click(addBtn);

  expect(result.textContent).toBe("Sum of the number is: 8");
  fireEvent.change(inputNum1, {
    target: {
      value: "5",
    },
  });
  expect(inputNum1.value).toBe("5");
  fireEvent.click(addBtn);
  expect(result.textContent).toBe("Sum of the number is: 8");
});

test("testing Add Numbers functionality with values", () => {
  const addNumberComponent = render(<AddNumbers />);
  const inputNum1 = addNumberComponent.getByTestId("num1");
  const inputNum2 = addNumberComponent.getByTestId("num2");
  const addBtn = addNumberComponent.getByTestId("addBtn");
  const result = addNumberComponent.getByTestId("result");
  fireEvent.change(inputNum1, {
    target: {
      value: "",
    },
  });
  expect(inputNum1.value).toBe("");
  fireEvent.change(inputNum2, {
    target: {
      value: "",
    },
  });
  expect(inputNum2.value).toBe("");

  fireEvent.click(addBtn);
  expect(result.textContent).toBe("");
  const error = addNumberComponent.getByTestId("error");
  expect(error.textContent).toBe("Please fill both required fields.");
});
