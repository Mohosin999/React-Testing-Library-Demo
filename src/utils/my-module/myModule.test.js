import { myFunction } from "./myModule";

jest.mock("./myModule", () => {
  const originalModule = jest.requireActual("./myModule");
  return {
    __esModule: true,
    ...originalModule,
    add: jest.fn((a, b) => 7),
  };
});

describe("Mocking My Module to Test Function", () => {
  it('should return "Big" when the sum is 10 or greater', () => {
    const result = myFunction(10, 6);
    expect(result).toEqual("Big");
  });

  it('should return "Small" when the sum is less than 10', () => {
    const result = myFunction(2, 6);
    expect(result).toEqual("Small");
  });
});
