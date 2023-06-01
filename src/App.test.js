import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("RED-BLUE Button", () => {
  it("should have the correct initial color", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });
    expect(button).toHaveStyle("background-color: red");
  });

  it("should have the correct initial text", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });
    expect(button).toHaveTextContent("Change to Blue");
  });

  it("should turns blue when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color: blue");
  });

  it("should change the text when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent("Change to Red");
  });
});

describe("Button Controller Checkbox", () => {
  it("should be unchecked initially", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {
      name: "Change the button state",
    });
    expect(checkbox).not.toBeChecked();
  });

  it("should enable the button initially", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });
    expect(button).toBeEnabled();
  });

  it("should disabled the button when clicked", () => {});
});
