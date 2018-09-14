Collection = {
  isEmpty() { return this.length === 0; },
  notEmpty() { return !this.isEmpty(); },
  first() { return this[0]; },
  last() { return this[this.length-1]; },
};

// ideal implementation, not recommended
//Object.setPrototypeOf(Array.prototype, Collection);
//Object.setPrototypeOf(String.prototype, Collection);

// implementation w/o changing prototypes hierarchy
Object.keys(Collection).forEach(function (methodName) {
  Array.prototype[methodName] = Collection[methodName];
  String.prototype[methodName] = Collection[methodName];
});
