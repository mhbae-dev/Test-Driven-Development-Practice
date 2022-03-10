const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  it("returns Fizz when number is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Buzz when number is 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("returns FizzBuzz when number is divisible by 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  })
  it("returns the input number when the number is not dividible by 3,5 or 15", () => {
    expect(fizzBuzz(2)).toBe(2)
  })
});
