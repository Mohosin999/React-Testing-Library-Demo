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
    const loadingSpinner = screen.getByText("Spinner Loading");
    expect(loadingSpinner).toBeInTheDocument();
  });

  //   it("should display a list of users successfully", async () => {
  //     const mockData = [
  //       { id: 1, name: "John Doe", email: "john.doe@example.com" },
  //       { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  //     ];
  //     axios.get.mockResolvedValue({ data: mockData });

  //     render(<UserListSpinner />);

  //     await waitFor(() => {
  //       const userElements = screen.getAllByRole("listitem");
  //       expect(userElements).toHaveLength(2);
  //     });
  //   });

  //   it("should display an error message when the request fails", async () => {
  //     const errorMessage = "Request failed";
  //     axios.get.mockRejectedValue(new Error(errorMessage));

  //     render(<UserListSpinner />);

  //     await waitFor(() => {
  //       const errorElement = screen.getByText(errorMessage);
  //       expect(errorElement).toBeInTheDocument();
  //     });
  //   });
});

// import { render, screen, waitFor } from "@testing-library/react";
// import axios from "axios";
// import UserListSpinner from "./UserListSpinner";

// jest.mock("axios");

// describe("User List Spinner", () => {
//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it("should display a loading spinner while the request is in progress", () => {
//     render(<UserListSpinner />);

//     const loadingSpinner = screen.getByText("Spinner Loading");
//     expect(loadingSpinner).toBeInTheDocument();
//   });

//   it("should display a list of user successfull", async () => {});

//   it("should display an error message when the request face", async () => {});
// });
