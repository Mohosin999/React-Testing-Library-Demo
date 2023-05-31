// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText("Learn Jest");
  const linkElement = screen.getByTestId("React-Link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Learn Jest");
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org");
});

test("should return react logo", () => {
  render(<App />);
  const image = screen.getByAltText("logo");
  expect(image).toBeInTheDocument();
});
