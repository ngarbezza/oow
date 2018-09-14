const Collection = {
  isEmpty() { return this.length === 0; },
  notEmpty() { return !this.isEmpty(); },
  first() { return this[0]; },
  last() { return this[this.length-1]; },
  any(predicate) {
    for (let elem in this)
      if (predicate(this[elem])) return true;
    return false;
  },
  all(predicate) {
    return !this.any(elem => !predicate(elem));
  }
};

// ideal implementation, not recommended
//Object.setPrototypeOf(Array.prototype, Collection);
//Object.setPrototypeOf(String.prototype, Collection);

// implementation w/o changing prototypes hierarchy
Object.keys(Collection).forEach(function (methodName) {
  [Array.prototype, String.prototype].forEach(function (proto) {
    Object.defineProperty(proto, methodName, { value: Collection[methodName] });
  });
});
