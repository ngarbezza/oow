Collection = {
  isEmpty() { return this.length === 0; },
  notEmpty() { return !this.isEmpty(); },
};

String.prototype.__proto__ = Collection;
Array.prototype.__proto__ = Collection;
