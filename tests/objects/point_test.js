'use strict';

import '../../oow.js';
import { Point } from '../../src/objects/point.js';
import { ensurePropertyCannotBeSet } from '../test_utils.js';

import { assert, suite, test } from '@pmoo/testy';

suite('Point class', () => {
  test('x() and y() can be used to access coordinates', () => {
    const aPoint = Point.new(1, -1);
    assert.areEqual(aPoint.x(), 1);
    assert.areEqual(aPoint.y(), -1);
  });

  test('two points are equal if the x and y are both equal', () => {
    const pointOne = Point.new(2, 3);
    const pointTwo = Point.new(2, 3);
    assert.areEqual(pointOne, pointTwo, 'equals');
  });

  test('points are printed in (x, y) notation', () => {
    assert.that(Point.new(-1, 2).toString()).isEqualTo('(-1, 2)');
  });

  const pointA = Point.new(2, 4);
  const pointB = Point.new(4, 8);

  test('points can be added', () =>
    assert.that(pointA.plus(pointB)).isEqualTo(Point.new(6, 12)));

  test('points can be subtracted', () =>
    assert.that(pointA.minus(pointB)).isEqualTo(Point.new(-2, -4)));

  test('points can be multiplied', () =>
    assert.that(pointA.times(pointB)).isEqualTo(Point.new(8, 32)));

  test('points can be divided', () =>
    assert.that(pointB.dividedBy(pointA)).isEqualTo(Point.new(2, 2)));

  test('points know how to convert to an absolute value', () =>
    assert.that(Point.new(-1, 2).absolute()).isEqualTo(Point.new(1, 2)));

  test('point properties cannot be changed', () => {
    ensurePropertyCannotBeSet(pointA, '_x', assert);
    ensurePropertyCannotBeSet(pointA, '_y', assert);
  });
});
