'use strict';

require('../../oow');
const { suite, test, assert } = require('@pmoo/testy');

suite('messages added to functions', () => {
  test('value() works with no arguments', () =>  {
    const toEvaluate = () => 'hey';
    assert.areEqual(toEvaluate.value(), 'hey');
  });
  
  test('value() works with several arguments', () =>  {
    const toEvaluate = (a, b, c) => `${a}, ${b} and ${c}`;
    assert.areEqual(toEvaluate.value('one', 'two', 'three'), 'one, two and three');
  });
});
