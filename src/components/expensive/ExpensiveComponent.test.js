import { render, screen } from "@testing-library/react";
import ExpensiveComponent from "./ExpensiveComponent";
import { computeSomethingExpensive } from "../../utils/utils";

// akhon amra puro module takei mock korbo
jest.mock("../../utils/utils");

test("Expensive component should display the result of the computeSomethingExpensive", () => {
  computeSomethingExpensive.mockReturnValueOnce(100);

  render(<ExpensiveComponent />);
  const element = screen.getByTestId("expensive-node");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(100);
});
