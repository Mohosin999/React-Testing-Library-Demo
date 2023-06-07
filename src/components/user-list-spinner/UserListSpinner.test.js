import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserListSpinner from "./UserListSpinner";

jest.mock("axios");

describe("User List Spinner", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should display a loading spinner while the request is in progress", () => {
    render(<UserListSpinner />);
    const loadingSpinner = screen.getByText("Loading");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("should display a list of users successfully", async () => {
    const expectedUser = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ];

    axios.get.mockResolvedValueOnce({ data: expectedUser });

    render(<UserListSpinner />);

    await waitFor(() => {
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();

      const listItems = screen.getAllByRole("listitem");

      listItems.forEach((item, index) => {
        expect(item).toHaveTextContent(expectedUser[index].name);
      });
    });
  });

  it("should display an error message when the request fails", async () => {
    const ExpectedErrorMessage = "Network Error";

    axios.get.mockRejectedValueOnce({ message: ExpectedErrorMessage });

    render(<UserListSpinner />);

    await waitFor(() => {
      const errorElement = screen.getByText(ExpectedErrorMessage);

      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent(ExpectedErrorMessage);
    });
  });
});
