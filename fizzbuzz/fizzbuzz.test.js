const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  it("return Fizz when number is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
});
