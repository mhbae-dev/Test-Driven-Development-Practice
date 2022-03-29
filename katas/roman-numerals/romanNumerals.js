const { DecimationAlgorithm } = require("chart.js");

class RomanNumeralGenerator {
  romanFor(number) {
    let roman = "";

    const romanToDecimal = [{value: 10, numeral: "X"},{value: 9, numeral: "IX"}, {value: 5, numeral: "V"}, {value: 4, numeral: "IV"},{value: 1, numeral: "I"}]
    

    romanToDecimal.forEach(item => {
      while (number >= item.value) {
        roman += item.numeral;
        number -= item.value;
      }
    })

    return roman;
  }
}

module.exports = RomanNumeralGenerator;
