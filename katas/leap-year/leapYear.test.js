const leapYear = require("./leapYear");

describe("leapyear", () => {
  it("should return false if not divisible by 4", () => {
    expect(leapYear(1997)).toBe(false);
  });
});
