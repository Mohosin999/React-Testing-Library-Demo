import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserListSpinner from "./UserListSpinner";

jest.mock("axios");

describe("User List Spinner", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should display a loading spinner while the request is in progress", async () => {});

  it("should display a list of user successfull", async () => {});

  it("should display an error message when the request face", async () => {});
});
