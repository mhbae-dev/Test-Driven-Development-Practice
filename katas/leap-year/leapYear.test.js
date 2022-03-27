const LeapYear = require("./leapYear");

// describe("leapyear()", () => {
//   it("should return false if not divisible by 4", () => {
//     expect(leapYear(1997)).toBe(false);
//   });

//   it("should return true if divisible by 4", () => {
//     expect(leapYear(1996)).toBe(true);
//   });

//   it("should return true if a year is divisible by 400", () => {
//     expect(leapYear(1600)).toBe(true);
//   });

//   it("should return false if a year is dividible by 4 & 100 and not 400", () => {
//     expect(leapYear(1800)).toBe(false);
//   });
// });

describe("leapYear", () => {
  it("should return false if the year is not divisible by 4", () => {
    const leapYear = new LeapYear(1997);
    expect(leapYear.check()).toBe(false);
  });

  it("should return true if the year is divisible by 4", () => {
    const leapYear = new LeapYear(1996);
    expect(leapYear.check()).toBe(true);
  });

  it("should return true if the year is divisible by 400", () => {
    const leapYear = new LeapYear(1600);
    expect(leapYear.check()).toBe(true);
  });

  it("should return false if divisible by 100 but not 400", () => {
    const leapYear = new LeapYear(1800);
    expect(leapYear.check()).toBe(false);
  });
});
