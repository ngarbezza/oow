(function () {
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
    },
    take(n) { return this.slice(0, n); },
    drop(n) { return this.slice(n, this.length); }
  };
  
  const ArrayExtensions = {
    equals(array) {
      if (!array) return false;
      if (this.length !== array.length) return false;
      
      for (let i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
          if (!this[i].equals(array[i])) return false;
        }
        else if (this[i] !== array[i]) {
          return false;
        }
      }
      return true;
    }
  };
  
  let eachExtensionOf = function(extension, block) {
    Object.keys(extension).forEach(block)
  };
  
  let extend = function(proto, extension, methodName) {
    Object.defineProperty(proto, methodName, { value: extension[methodName] });
  };
  
  eachExtensionOf(Collection, function (methodName) {
    [Array.prototype, String.prototype].forEach(function (proto) {
      extend(proto, Collection, methodName);
    });
  });
  
  eachExtensionOf(ArrayExtensions, function (methodName) {
    extend(Array.prototype, ArrayExtensions, methodName);
  });
})();
