const minMax = require('./minMax');


describe("min", () => {
  it("should return a number given an array", () => {
    expect(minMax.min([5])).toBe(5)
  })

  it("should return the smallest number", () => {
    expect(minMax.min([1, 2, 3])).toBe(1)
  })
})

describe("max", () => {
  it("should return a number given an array", () => {
    expect(minMax.max([5])).toBe(5)
  })
  it("should return the largest number", () => {
    expect(minMax.max([1, 2, 3])).toBe(3)
  })
})