const fizzBuzz = require("fizzbuzz.js");

describe("fizzBuzz", () => {
  it("return Fizz when number is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
});
