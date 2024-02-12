'use strict';

export class Point {
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
    return this.class().new(this.x() + anotherPoint.x(), this.y() + anotherPoint.y());
  }

  minus(anotherPoint) {
    return this.class().new(this.x() - anotherPoint.x(), this.y() - anotherPoint.y());
  }

  times(anotherPoint) {
    return this.class().new(this.x() * anotherPoint.x(), this.y() * anotherPoint.y());
  }

  dividedBy(anotherPoint) {
    return this.class().new(this.x() / anotherPoint.x(), this.y() / anotherPoint.y());
  }

  absolute() {
    return this.class().new(Math.abs(this.x()), Math.abs(this.y()));
  }
}
