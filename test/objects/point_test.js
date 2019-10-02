'use strict';

const { suite, test, assert } = require('@pmoo/testy');
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
});
