'use strict';

require('../../oow');
const { suite, test, assert } = require('@pmoo/testy');

suite('messages added to Date', () => {
  test('today() returns todays date', () =>  {
    const today = Date.today();
    const now = new Date();
    assert.areEqual(today.toString(), now.toString());
  });
  
  test('tomorrow() returns tomorrows date', () =>  {
    const tomorrow = Date.tomorrow();
    const now = new Date();
    now.setDate(now.getDate() + 1);
    assert.areEqual(tomorrow.toString(), now.toString());
  });
  
  test('yesterday() returns yesterdays date', () =>  {
    const yesterday = Date.yesterday();
    const now = new Date();
    now.setDate(now.getDate() - 1);
    assert.areEqual(yesterday.toString(), now.toString());
  });
  
  test('day() is equivalent to getDate()', () => {
    const now = new Date();
    assert.areEqual(now.day(), now.getDate());
  });
  
  test('monthNumber() is equivalent to getMonth() but starting month numbers at 1', () => {
    const now = new Date();
    assert.areEqual(now.monthNumber(), now.getMonth() + 1);
  });
  
  test('year() is equivalent to getFullYear()', () => {
    const now = new Date();
    assert.areEqual(now.year(), now.getFullYear());
  });
});
