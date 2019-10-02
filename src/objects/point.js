'use strict';

class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  x() { return this._x; }
  y() { return this._y; }
  
  equals(anotherPoint) {
    return this.x() === anotherPoint.x() && this.y() === anotherPoint.y();
  }
}

module.exports = Point;
