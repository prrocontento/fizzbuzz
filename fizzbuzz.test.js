const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("Display an error message if type is not number", () => {
    const expected = "Error: the argument must be a number";
    const result = fizzbuzz("16");
    expect(expected).toBe(result);
  });
  test("should print 1 if they receive 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });
  test("should print fizz if they receive 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  })
  test("should print fizz if they receive a multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  })
  test("should return buzz if they receive 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  })
  test("should return buzz if they receive a multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  })
  test("should return fizzbuzz if they receive a multiple of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  })
});