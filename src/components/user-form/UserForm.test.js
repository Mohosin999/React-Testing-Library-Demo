import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "./UserForm";

jest.mock("./InputField", () => ({
  __esModule: true,
  default: jest.fn(({ label, type, value, onChange, required }) => (
    <input
      type={type}
      id={label}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={`mocked-input-${label.toLowerCase()}`}
    />
  )),
}));

describe("User Form", () => {
  it("should render the form with input field and submit button", () => {
    render(<UserForm />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const submitButton = screen.getByText("Submit");
  });

  it("should log the user input when the form is submitted", () => {
    const mockOnChange = jest.fn();
    jest.spyOn(console, "log").mockImplementation(() => {});

    render(<UserForm />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.click(submitButton);

    expect(mockOnChange).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(
      "name: John Doe, email: johndoe@example.com"
    );
    console.log.mockRestore();
  });
});
