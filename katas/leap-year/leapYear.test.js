const leapYear = require("./leapYear");

describe("leapyear()", () => {
  it("should return false if not divisible by 4", () => {
    expect(leapYear(1997)).toBe(false);
  });

  it("should return true if divisible by 4", () => {
    expect(leapYear(1996)).toBe(true);
  });

  it("should return true if a year is divisible by 400", () => {
    expect(leapYear(1600)).toBe(true);
  });

  it("should return false if a year is dividible by 4 & 100 and not 400", () => {
    expect(leapYear(1800)).toBe(false);
  });
});
