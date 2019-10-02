'use strict';

require('../oow');
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
});
