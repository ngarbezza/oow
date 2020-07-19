'use strict';

const { suite, test, assert } = require('@pmoo/testy');
const Point = require('../../src/objects/point');
const { ensurePropertyCannotBeSet } = require('../test_utils');

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
    ensurePropertyCannotBeSet(pointA, '_x', assert);
    ensurePropertyCannotBeSet(pointA, '_y', assert);
  });
});
