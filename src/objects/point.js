'use strict';

require('../extensions/object');

class Point {
  constructor(x, y) {
    Object.defineProperty(this, '_x', { value: x });
    Object.defineProperty(this, '_y', { value: y });
  }

  x() {
    return this._x;
  }

  y() {
    return this._y;
  }
  
  equals(anotherPoint) {
    return this.x() === anotherPoint.x() && this.y() === anotherPoint.y();
  }
  
  toString() {
    return `(${this.x()}, ${this.y()})`;
  }
  
  plus(anotherPoint) {
    return new (this.class())(this.x() + anotherPoint.x(), this.y() + anotherPoint.y());
  }
  
  minus(anotherPoint) {
    return new (this.class())(this.x() - anotherPoint.x(), this.y() - anotherPoint.y());
  }
  
  times(anotherPoint) {
    return new (this.class())(this.x() * anotherPoint.x(), this.y() * anotherPoint.y());
  }
  
  dividedBy(anotherPoint) {
    return new (this.class())(this.x() / anotherPoint.x(), this.y() / anotherPoint.y());
  }
  
  absolute() {
    return new (this.class())(Math.abs(this.x()), Math.abs(this.y()));
  }
}

module.exports = Point;
