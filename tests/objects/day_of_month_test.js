'use strict';

const { suite, test, assert } = require('@pmoo/testy');
const DayOfMonth = require('../../src/objects/day_of_month');
const { ensurePropertyCannotBeSet } = require('../test_utils');

suite('DayOfMonth class', () => {
  test('day() and monthNumber() can be used to access properties', () => {
    const dayOfMonth = new DayOfMonth(1, 2);
    assert.areEqual(dayOfMonth.day(), 1);
    assert.areEqual(dayOfMonth.monthNumber(), 2);
  });
  
  test('two day of months are equal if the day and month are both equal', () => {
    const dayOfMonthOne = new DayOfMonth(2, 3);
    const dayOfMonthTwo = new DayOfMonth(2, 3);
    assert.areEqual(dayOfMonthOne, dayOfMonthTwo, 'equals');
  });
  
  test('day of month properties cannot be changed', () => {
    const dayOfMonth = new DayOfMonth(2, 4);
    ensurePropertyCannotBeSet(dayOfMonth, '_day', assert);
    ensurePropertyCannotBeSet(dayOfMonth, '_monthNumber', assert);
  });
  
  test('a day of month cannot be created if the day is less than 1', () => {
    assert.that(() => { new DayOfMonth(0, 12); }).raises(DayOfMonth.errorMessageForInvalidDay(0));
  });
  
  test('a day of month cannot be created if the day is greater than 31', () => {
    assert.that(() => { new DayOfMonth(32, 12); }).raises(DayOfMonth.errorMessageForInvalidDay(32));
  });
  
  test('a day of month cannot be created if the month is less than 1', () => {
    assert.that(() => { new DayOfMonth(9, 0); }).raises(DayOfMonth.errorMessageForInvalidMonth(0));
  });
  
  test('a day of month cannot be created if the month is greater than 13', () => {
    assert.that(() => { new DayOfMonth(9, 13); }).raises(DayOfMonth.errorMessageForInvalidMonth(13));
  });
  
  test('a day of month cannot be created if the day number is not valid for a particular month', () => {
    assert.that(() => { new DayOfMonth(30, 2); }).raises(DayOfMonth.errorMessageForInvalidDayInMonth(30, 2));
  });
});
