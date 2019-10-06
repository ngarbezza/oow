'use strict';

const { suite, test, assert, fail } = require('@pmoo/testy');
const Point = require('../../src/objects/point');

suite('Point class', () => {
  test('x() and y() can be used to access coordinates', () => {
    const aPoint = new Point(1, -1);
    assert.areEqual(aPoint.x(), 1);
    assert.areEqual(aPoint.y(), -1);
  });
  
  test('two points are equal if the x and y are both equal', () => {
    const pointOne = new Point(2, 3);
    const pointTwo = new Point(2, 3);
    assert.areEqual(pointOne, pointTwo, 'equals');
  });
  
  test('points are printed in (x, y) notation', () =>
    assert.that(new Point(-1, 2).toString()).isEqualTo('(-1, 2)'));
  
  const pointA = new Point(2, 4);
  const pointB = new Point(4, 8);
  
  test('points can be added', () =>
    assert.that(pointA.plus(pointB)).isEqualTo(new Point(6, 12)));
  
  test('points can be subtracted', () =>
    assert.that(pointA.minus(pointB)).isEqualTo(new Point(-2, -4)));
  
  test('points can be multiplied', () =>
    assert.that(pointA.times(pointB)).isEqualTo(new Point(8, 32)));
  
  test('points can be divided', () =>
    assert.that(pointB.dividedBy(pointA)).isEqualTo(new Point(2, 2)));
  
  test('points know how to convert to an absolute value', () =>
    assert.that(new Point(-1, 2).absolute()).isEqualTo(new Point(1, 2)));
  
  test('point properties cannot be changed', () => {
    ensurePropertyCannotBeSet(pointA, '_x');
    ensurePropertyCannotBeSet(pointA, '_y');
  });

  // can be refactored once we add support for regex matches on Testy
  function ensurePropertyCannotBeSet(object, property) {
    try {
      object[property] = 3;
      fail.with('expected point to be immutable');
    } catch (e) {
      assert.isTrue(e.message.match(/Cannot assign to read only property/).notEmpty());
    }
  }
});
