'use strict';

require('../extensions/object');

class DayOfMonth {
  static errorMessageForInvalidDay(day) {
    return `${day} is not a valid day number`;
  }
  
  static errorMessageForInvalidMonth(monthNumber) {
    return `${monthNumber} is not a valid month number`;
  }
  
  static errorMessageForInvalidDayInMonth(day, monthNumber) {
    return `${day} is not a valid day number for month ${monthNumber}`;
  }
  
  constructor(day, monthNumber) {
    this._ensureDayIsValid(day);
    this._ensureMonthIsValid(monthNumber);
    this._ensureDayIsValidForMonth(day, monthNumber);
    Object.defineProperty(this, '_day', { value: day });
    Object.defineProperty(this, '_monthNumber', { value: monthNumber });
  }
  
  _ensureDayIsValid(day) {
    if (day < 1 || day > 31)
      throw this.class().errorMessageForInvalidDay(day);
  }
  
  _ensureMonthIsValid(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12)
      throw this.class().errorMessageForInvalidMonth(monthNumber);
  }
  
  _ensureDayIsValidForMonth(day, monthNumber) {
    const expectedNumberOfDaysForEachMonth = {
      1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };
    if (day > expectedNumberOfDaysForEachMonth[monthNumber])
      throw this.class().errorMessageForInvalidDayInMonth(day, monthNumber);
  }

  day() {
    return this._day;
  }

  monthNumber() {
    return this._monthNumber;
  }
  
  equals(anotherDayOfMonth) {
    return this.day() === anotherDayOfMonth.day() && this.monthNumber() === anotherDayOfMonth.monthNumber();
  }
}

module.exports = DayOfMonth;
