import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import useUser from "./useUser";

jest.mock("axios");

describe("useUser", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch and update data successfully", async () => {
    const expectedData = [{ id: 1, name: "John Doe" }];

    axios.get.mockResolvedValueOnce({ data: expectedData });

    const { result, waitForNextUpdate } = renderHook(() => useUser());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(expectedData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle error properly", async () => {
    const expectedErrorMessage = "Network Error";

    axios.get.mockRejectedValueOnce({ message: expectedErrorMessage });

    const { result, waitForNextUpdate } = renderHook(() => useUser());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(expectedErrorMessage);
  });
});
