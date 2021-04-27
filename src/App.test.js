import { render, screen } from "@testing-library/react";
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
  const linkElement = screen.getByText(/Timezone/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render the home page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const link = getByTestId("addNumbers-link");

  expect(container.innerHTML).toMatch("Add");
});
