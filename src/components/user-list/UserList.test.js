import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserList from "./userList";

jest.mock("axios");

describe("User List", () => {
  it("should display the list of users when the request is successfull", async () => {
    const expectedUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];

    axios.get.mockResolvedValueOnce({ data: expectedUsers });

    render(<UserList />);

    await waitFor(() => {
      const userTable = screen.getByRole("table");

      expectedUsers.forEach((user) => {
        const idElement = screen.queryByText(user.id);
        const nameElement = screen.queryByText(user.name);
        const emailElement = screen.queryByText(user.email);

        expect(idElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
      });
    });
  });

  it("should display an error message when the request fails", async () => {
    const expectedErrorMessage = "Network Error";

    axios.get.mockRejectedValueOnce({ message: expectedErrorMessage });

    render(<UserList />);

    await waitFor(() => {
      const errorElement = screen.queryByText(expectedErrorMessage);

      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent(expectedErrorMessage);
    });
  });
});
