'use strict';

const { suite, test, assert } = require('@pmoo/testy');
const MonthOfYear = require('../../src/objects/month_of_year');
const { ensurePropertyCannotBeSet } = require('../test_utils');

suite('MonthOfYear class', () => {
  test('monthNumber() and year() can be used to access properties', () => {
    const monthOfYear = new MonthOfYear(12, 2020);
    assert.areEqual(monthOfYear.monthNumber(), 12);
    assert.areEqual(monthOfYear.year(), 2020);
  });
  
  test('two months of year are equal if the month and year are both equal', () => {
    const monthOfYearOne = new MonthOfYear(2, 1990);
    const monthOfYearTwo = new MonthOfYear(2, 1990);
    assert.areEqual(monthOfYearOne, monthOfYearTwo);
  });
  
  test('month of year properties cannot be changed', () => {
    const monthOfYear = new MonthOfYear(2, 4);
    ensurePropertyCannotBeSet(monthOfYear, '_monthNumber', assert);
    ensurePropertyCannotBeSet(monthOfYear, '_year', assert);
  });
  
  test('a month of year cannot be created if the year is less than 0', () => {
    assert
      .that(() => { new MonthOfYear(12, -1); })
      .raises(MonthOfYear.errorMessageForInvalidYear(-1));
  });

  test('a month of year cannot be created if the month is less than 1', () => {
    assert
      .that(() => { new MonthOfYear(0, 2001); })
      .raises(MonthOfYear.errorMessageForInvalidMonth(0));
  });

  test('a month of year cannot be created if the month is greater than 12', () => {
    assert
      .that(() => { new MonthOfYear(13, 2001); })
      .raises(MonthOfYear.errorMessageForInvalidMonth(13));
  });
});
