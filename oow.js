'use strict';

(function () {
  const Collection = {
    isEmpty() { return this.length === 0; },
    notEmpty() { return !this.isEmpty(); },
    first() { return this[0]; },
    second() { return this[1]; },
    third() { return this[2]; },
    last() { return this[this.length-1]; },
    any(predicate) {
      for (let elem in this)
        if (predicate(this[elem])) return true;
      return false;
    },
    all(predicate) { return !this.any(elem => !predicate(elem)); },
    take(n) { return this.slice(0, n); },
    drop(n) { return this.slice(n, this.length); },
    count(predicate) { return this.filter(predicate).length; },
    asSet() { return new Set(this); },
    occurrencesOf(object) { return this.count(elem => elem === object); },
  };
  
  const ArrayExtensions = {
    equals(array) {
      if (!array) return false;
      let differentLength = this.length !== array.length;
      if (differentLength) return false;
      
      for (let i = 0, l = this.length; i < l; i++) {
        let elemsAreArrays = (this[i] instanceof Array) && (array[i] instanceof Array);
        if (elemsAreArrays && !this[i].equals(array[i])) return false;
        if (this[i] !== array[i]) return false
      }
      return true
    },
    compact() {
      return this.filter(elem => elem !== null && elem !== undefined);
    },
    sum(func, startValue) {
      let sumElement = (acc, elem) => acc + ((func && func(elem)) || elem);
      return this.reduce(sumElement, startValue || 0);
    },
  };
  
  const StringExtensions = {
    filter(predicate) {
      return this.split('').filter(predicate).join('');
    }
  };
  
  let eachExtensionOf = (extension, block) =>
    Object.keys(extension).forEach(block);
  
  let extend = (proto, extension, methodName) =>
    Object.defineProperty(proto, methodName, { value: extension[methodName] });
  
  eachExtensionOf(Collection, methodName =>
    [Array.prototype, String.prototype].forEach(proto =>
      extend(proto, Collection, methodName)
    )
  );
  
  eachExtensionOf(ArrayExtensions, methodName =>
    extend(Array.prototype, ArrayExtensions, methodName)
  );
  
  eachExtensionOf(StringExtensions, methodName =>
    extend(String.prototype, StringExtensions, methodName)
  );
})();
