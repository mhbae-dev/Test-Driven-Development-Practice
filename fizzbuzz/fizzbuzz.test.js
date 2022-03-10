const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  it("return Fizz when number is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("return Buzz when number is 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
});
