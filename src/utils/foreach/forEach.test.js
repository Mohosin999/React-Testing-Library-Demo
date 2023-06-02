import { forEach } from "./forEach";

const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([10, 11, 12], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(3);

  // The first argument of the first call to the function was 10
  expect(mockCallback.mock.calls[0][0]).toBe(10);

  // The first argument of the second call to the function was 11
  expect(mockCallback.mock.calls[1][0]).toBe(11);

  // The first argument of the third call to the function was 11
  expect(mockCallback.mock.calls[2][0]).toBe(12);

  // The return value of the first call to the function was 52
  expect(mockCallback.mock.results[0].value).toBe(52);

  // The return value of the second call to the function was 53
  expect(mockCallback.mock.results[1].value).toBe(53);

  // The return value of the third call to the function was 54
  expect(mockCallback.mock.results[2].value).toBe(54);
});
