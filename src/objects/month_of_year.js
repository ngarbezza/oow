'use strict';

export class MonthOfYear {
  static errorMessageForInvalidYear(year) {
    return `${year} is not a valid year number`;
  }

  static errorMessageForInvalidMonth(monthNumber) {
    return `${monthNumber} is not a valid month number`;
  }

  constructor(monthNumber, year) {
    this._ensureMonthIsValid(monthNumber);
    this._ensureYearIsValid(year);
    Object.defineProperty(this, '_monthNumber', { value: monthNumber });
    Object.defineProperty(this, '_year', { value: year });
  }

  _ensureYearIsValid(year) {
    if (year < 0)
      throw this.class().errorMessageForInvalidYear(year);
  }

  _ensureMonthIsValid(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12)
      throw this.class().errorMessageForInvalidMonth(monthNumber);
  }

  year() {
    return this._year;
  }

  monthNumber() {
    return this._monthNumber;
  }

  equals(anotherMonthOfYear) {
    return this.monthNumber() === anotherMonthOfYear.monthNumber() && this.year() === anotherMonthOfYear.year();
  }
}
