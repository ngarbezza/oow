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

  // subclass responsibility
  test('subclassResponsibility() raises an error', () => {
    const object = { };
    assert
      .that(() => object.subclassResponsibility())
      .raises(`${object} had the responsibility to implement this method`);
  });

  test('class() for literal objects return Object', () => {
    assert.that({}.class()).isEqualTo(Object);
  });

  test('class() for instances of a class return that class', () => {
    class C1 {}

    assert.that(new C1().class()).isEqualTo(C1);
  });
});
