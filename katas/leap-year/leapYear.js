// const leapYear = (year) => {
//   if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// module.exports = leapYear;

class LeapYear {
  constructor(year) {
    this.year = year;
  }
  check() {
    return (
      this.isDivisibleBy(4) &&
      !(this.isDivisibleBy(100) && this.notDivisibleBy(400))
    );
  }

  isDivisibleBy(number) {
    return this.year % number === 0;
  }

  notDivisibleBy(number) {
    return this.year % number !== 0;
  }
}

module.exports = LeapYear;
