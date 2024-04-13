'use strict';

import { assert, suite, test } from '@pmoo/testy';

suite('messages added to strings', () => {
  test('isString is true for a String', () => {
    assert.isTrue('foo'.isString());
    assert.isTrue(''.isString());
    assert.isTrue(String.new().isString());
  });

  test('isString is false for objects that are not strings', () => {
    assert.isFalse({}.isString());
    assert.isFalse([].isString());
    assert.isFalse(RegExp.new().isString());
  });
});
