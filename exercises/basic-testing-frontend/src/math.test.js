import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((prev, current) => prev + current);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  // Arrange
  const inputs = ["invalid", 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((prev, cur) => {
    return +prev + +cur;
  });
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Asset
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  // Act
  const resultFn = () => {
    add();
  };

  // Asset
  expect(resultFn).toThrow(/is not iterable/);
  // expect(resultFn).not.toThrow(); opposite
});

it("should throw an error if provided multiple arg instead of an array", () => {
  // Arrange
  const num1 = 1;
  const num2 = 2;

  // Act
  const resultFn = () => {
    add(num1, num2);
  };

  // Asset
  expect(resultFn).toThrow(/is not iterable/);
  // expect(resultFn).toThrow();
  // so basically when a function have a error handling you should put /comment/
  // because it will ignore it
});
