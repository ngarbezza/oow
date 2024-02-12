'use strict';

import { DayOfMonth } from '../../src/objects/day_of_month.js';
import { ensurePropertyCannotBeSet } from '../test_utils.js';

import '../../oow.js';
import { assert, suite, test } from '@pmoo/testy';

suite('DayOfMonth class', () => {
  test('day() and monthNumber() can be used to access properties', () => {
    const dayOfMonth = DayOfMonth.new(1, 2);
    assert.areEqual(dayOfMonth.day(), 1);
    assert.areEqual(dayOfMonth.monthNumber(), 2);
  });

  test('two day of months are equal if the day and month are both equal', () => {
    const dayOfMonthOne = DayOfMonth.new(2, 3);
    const dayOfMonthTwo = DayOfMonth.new(2, 3);
    assert.areEqual(dayOfMonthOne, dayOfMonthTwo, 'equals');
  });

  test('day of month properties cannot be changed', () => {
    const dayOfMonth = DayOfMonth.new(2, 4);
    ensurePropertyCannotBeSet(dayOfMonth, '_day', assert);
    ensurePropertyCannotBeSet(dayOfMonth, '_monthNumber', assert);
  });

  test('a day of month cannot be created if the day is less than 1', () => {
    assert
      .that(() => { DayOfMonth.new(0, 12); })
      .raises(DayOfMonth.errorMessageForInvalidDay(0));
  });

  test('a day of month cannot be created if the day is greater than 31', () => {
    assert
      .that(() => { DayOfMonth.new(32, 12); })
      .raises(DayOfMonth.errorMessageForInvalidDay(32));
  });

  test('a day of month cannot be created if the month is less than 1', () => {
    assert
      .that(() => { DayOfMonth.new(9, 0); })
      .raises(DayOfMonth.errorMessageForInvalidMonth(0));
  });

  test('a day of month cannot be created if the month is greater than 12', () => {
    assert
      .that(() => { DayOfMonth.new(9, 13); })
      .raises(DayOfMonth.errorMessageForInvalidMonth(13));
  });

  test('a day of month cannot be created if the day number is not valid for a particular month', () => {
    assert
      .that(() => { DayOfMonth.new(30, 2); })
      .raises(DayOfMonth.errorMessageForInvalidDayInMonth(30, 2));
  });
});
