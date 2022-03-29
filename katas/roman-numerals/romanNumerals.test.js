const RomanNumeralGenerator = require("./romanNumerals");

describe("roman numerals", () => {
  const romanNumeral = new RomanNumeralGenerator();
  it("generate a roman numeral for a given number", () => {
    expect(romanNumeral.romanFor(1)).toBe("I");
    expect(romanNumeral.romanFor(2)).toBe("II");
    expect(romanNumeral.romanFor(3)).toBe("III");
    expect(romanNumeral.romanFor(4)).toBe("IV");
    expect(romanNumeral.romanFor(5)).toBe("V");
    expect(romanNumeral.romanFor(7)).toBe("VII");
    expect(romanNumeral.romanFor(10)).toBe("X");
    expect(romanNumeral.romanFor(18)).toBe("XVIII");
    expect(romanNumeral.romanFor(30)).toBe("XXX");
  });
});
