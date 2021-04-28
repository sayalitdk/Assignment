import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardComponent from "../index";
import CardData from "../../../contexts/CardData";
import { DataContext } from "../../../contexts/DataContext";

test("testing the first render of the page", () => {
  const cardCmp = render(
    <DataContext.Provider value={CardData}>
      <CardComponent />
    </DataContext.Provider>
  );
  const card0 = cardCmp.getByTestId("cardCmp0");
  const cardHeaderComponent = cardCmp.getByTestId("cardHeaderCmp0");
  const tableComponent = cardCmp.getByTestId("tableCmp0");
  const fulldetailsComponent = cardCmp.getByTestId("fulldetails0");
  expect(card0).not.toBeEmptyDOMElement();
  expect(card0).toContainElement(cardHeaderComponent);
  expect(card0).toContainElement(tableComponent);
  expect(card0).toContainElement(fulldetailsComponent);
  expect(fulldetailsComponent).toHaveTextContent("Full details");
});

test("testing the header part of the card", () => {
  const cardCmp = render(
    <DataContext.Provider value={CardData}>
      <CardComponent />
    </DataContext.Provider>
  );
  const card0 = cardCmp.getByTestId("cardCmp0");
  expect(card0).not.toBeEmptyDOMElement();

  const cardHeaderComponent = cardCmp.getByTestId("cardHeaderCmp0");
  const rejectBtnComponent = cardCmp.getByTestId("reject0");
  const authorizeBtnComponent = cardCmp.getByTestId("authorize0");

  expect(card0).toContainElement(cardHeaderComponent);
  expect(cardHeaderComponent).toContainElement(rejectBtnComponent);
  expect(rejectBtnComponent).toHaveTextContent("Reject");
  expect(cardHeaderComponent).toContainElement(authorizeBtnComponent);
  expect(authorizeBtnComponent).toHaveTextContent("Authorize");
});

test("testing the table part of the card component", () => {
  const cardCmp = render(
    <DataContext.Provider value={CardData}>
      <CardComponent />
    </DataContext.Provider>
  );
  const card0 = cardCmp.getByTestId("cardCmp0");
  const tableComponent = cardCmp.getByTestId("tableCmp0");

  expect(card0).not.toBeEmptyDOMElement();
  expect(card0).toContainElement(tableComponent);
  expect(tableComponent.innerHTML).toContain("Request References");
  expect(tableComponent.innerHTML).toContain("Category");
  expect(tableComponent.innerHTML).toContain("Request Status");
  expect(tableComponent.innerHTML).toContain(CardData[0].reqReference);
  expect(tableComponent.innerHTML).toContain(CardData[0].reqCategory);
  expect(tableComponent.innerHTML).toContain(CardData[0].reqStatus);
});
