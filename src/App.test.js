import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

test("renders learn react link", () => {
  render(<App />);
  const timezoneLinkElement = screen.getByText(/Timezone/i);
  expect(timezoneLinkElement).toBeInTheDocument();
  const cardLinkElement = screen.getByText(/Card/i);
  expect(cardLinkElement).toBeInTheDocument();
  const addNumberLinkElement = screen.getByText(/Add Numbers/i);
  expect(addNumberLinkElement).toBeInTheDocument();
});

it("should render the home page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const link = getByTestId("addNumbers-link");
  expect(navbar).toContainElement(link);
  expect(container.innerHTML).toMatch("Add Numbers");
});

it("should navigate to the add numbers page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  fireEvent.click(getByTestId("addNumbers-link"));
  const inputD = getByTestId("num1");
  expect(container).toContainElement(inputD);
  expect(inputD).not.toBeNull();
  expect(inputD).toHaveTextContent("");
  expect(container.innerHTML).toMatch("Add Numbers");
});

it("should navigate to the card page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  fireEvent.click(getByTestId("card-link"));
  const table = getByTestId("cardCmp0");
  expect(container).toContainElement(table);
});
