'use strict';

import '../../oow.js';
import { MonthOfYear } from '../../src/objects/month_of_year.js';
import { ensurePropertyCannotBeSet } from '../test_utils.js';
import { assert, suite, test } from '@pmoo/testy';

suite('MonthOfYear class', () => {
  test('monthNumber() and year() can be used to access properties', () => {
    const monthOfYear = MonthOfYear.new(12, 2020);
    assert.areEqual(monthOfYear.monthNumber(), 12);
    assert.areEqual(monthOfYear.year(), 2020);
  });

  test('two months of year are equal if the month and year are both equal', () => {
    const monthOfYearOne = MonthOfYear.new(2, 1990);
    const monthOfYearTwo = MonthOfYear.new(2, 1990);
    assert.areEqual(monthOfYearOne, monthOfYearTwo);
  });

  test('month of year properties cannot be changed', () => {
    const monthOfYear = MonthOfYear.new(2, 4);
    ensurePropertyCannotBeSet(monthOfYear, '_monthNumber', assert);
    ensurePropertyCannotBeSet(monthOfYear, '_year', assert);
  });

  test('a month of year cannot be created if the year is less than 0', () => {
    assert
      .that(() => { MonthOfYear.new(12, -1); })
      .raises(MonthOfYear.errorMessageForInvalidYear(-1));
  });

  test('a month of year cannot be created if the month is less than 1', () => {
    assert
      .that(() => { MonthOfYear.new(0, 2001); })
      .raises(MonthOfYear.errorMessageForInvalidMonth(0));
  });

  test('a month of year cannot be created if the month is greater than 12', () => {
    assert
      .that(() => { MonthOfYear.new(13, 2001); })
      .raises(MonthOfYear.errorMessageForInvalidMonth(13));
  });
});
