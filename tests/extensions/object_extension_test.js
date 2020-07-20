'use strict';

require('../../oow');
const { suite, test, assert } = require('@pmoo/testy');

suite('messages added to objects', () => {
  // child responsibility
  test('childResponsibility() raises an error', () => {
    const object = { };
    assert
      .that(() => object.childResponsibility())
      .raises(`${object} had the responsibility to implement this method`);
  });
});
