const smash = require("./sentence_smash");

describe("sentence smash", () => {
  it("should return an empty string for an empty array", () => {
    expect(smash([])).toBe("");
  });

  it("should return the word for a single word array", () => {
    expect(smash(["hello"])).toBe("hello");
  });

  it("should return multiple words separated by spaces", () => {
    expect(smash(["hello", "world", "this", "works"])).toBe(
      "hello world this works"
    );
  });
});
