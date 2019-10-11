'use strict';

const { applyExtension } = require('./extension_applier');

const Collection = {
  class: {
  },
  instance: {
    isEmpty() {
      return this.dimension() === 0;
    },
    
    notEmpty() {
      return !this.isEmpty();
    },
    
    any(predicate) {
      let found = false;
      this.forEach(elem => {
        if (predicate(elem)) return found = true;
      });
      return found;
    },
    
    all(predicate) {
      return !this.any(elem => !predicate(elem));
    },
    
    includesAllOf(collection) {
      return collection.all(elem => this.includes(elem));
    },
    
    count(predicate) {
      return this.filter(predicate).dimension();
    },
  },
};

const SequenceableCollection = {
  class: {
  },
  instance: {
    at(position) {
      return this[position];
    },
    
    dimension() {
      return this.length;
    },
    
    first() {
      return this.at(0);
    },
    
    second() {
      return this.at(1);
    },
    
    third() {
      return this.at(2);
    },
    
    last() {
      return this.at(this.dimension() - 1);
    },
    
    take(n) {
      return this.slice(0, n);
    },
    
    drop(n) {
      return this.slice(n, this.dimension());
    },
    
    asSet() {
      return new Set(this);
    },
    
    occurrencesOf(object) {
      return this.count(elem => elem === object);
    },
  },
};

const HeterogeneousCollection = {
  class: {
  },
  instance: {
    compact() {
      return this.filter(elem => elem !== null && elem !== undefined);
    },
    
    sum(func, startValue) {
      let result = startValue || 0;
      this.forEach(elem => result += (func && func(elem)) || elem);
      return result;
    },
  },
};

const ArrayExtensions = {
  class: {
    with(...objects) {
      return objects;
    }
  },
  instance: {
    equals(array) {
      if (!array) return false;
      let differentLength = this.dimension() !== array.dimension();
      if (differentLength) return false;
      
      for (let i = 0, l = this.dimension(); i < l; i++) {
        let elemsAreArrays = (this[i] instanceof Array) && (array[i] instanceof Array);
        if (elemsAreArrays && !this[i].equals(array[i])) return false;
        if (this[i] !== array[i]) return false
      }
      return true
    },
  }
};

const StringExtensions = {
  class: {
  },
  instance: {
    filter(predicate) {
      return this.split('').filter(predicate).join('');
    },
    
    forEach(func) {
      for (let index in this)
        func(this[index]);
    },
    
    equals(string) {
      return this === string;
    },
  },
};

const SetExtensions = {
  class: {
    with(...objects) {
      return objects.asSet();
    }
  },
  instance: {
    dimension() {
      return this.size;
    },
    
    includes(element) {
      return this.has(element);
    },
    
    equals(set) {
      return this.includesAllOf(set) && set.includesAllOf(this);
    },
    
    filter(predicate) {
      let result = new Set();
      this.forEach(elem => {
        if (predicate(elem)) result.add(elem);
      });
      return result;
    },
    
    asSet() {
      return this;
    }
  },
};

applyExtension(Collection, Array, String, Set);
applyExtension(SequenceableCollection, Array, String);
applyExtension(HeterogeneousCollection, Array, Set);
applyExtension(ArrayExtensions, Array);
applyExtension(StringExtensions, String);
applyExtension(SetExtensions, Set);
