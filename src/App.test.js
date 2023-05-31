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
  const linkElement = screen.getByText("Learn Jest");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Learn Jest");
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org");
});
