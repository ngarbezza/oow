'use strict';

import { applyExtension } from './extension_applier.js';

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
      for(const elem of this) {
        if (predicate(elem))
          return true;
      }
      return false;
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

    atRandom() {
      return this.asArray().at(Math.floor(Math.random() * this.dimension()));
    },

    sample() {
      return this.atRandom();
    },

    asArray() {
      return Array.from(this);
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
      return Set.new(this);
    },

    occurrencesOf(object) {
      return this.count(elem => elem === object);
    },

    allButFirst() {
      return this.drop(1);
    },

    allButLast() {
      return this.take(this.dimension() - 1);
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
      this.forEach(elem => {
        const valueFromFunction = func && func(elem);
        // eslint-disable-next-line eqeqeq
        const valueToSum = valueFromFunction != null ? valueFromFunction : elem;
        result += valueToSum;
      });
      return result;
    },

    removeAll() {
      return this.clear();
    }
  },
};

const ArrayExtensions = {
  class: {
    with(...objects) {
      return objects;
    }
  },
  instance: {
    add(anObject) {
      this.push(anObject);
    },

    remove(object) {
      this.splice(this.indexOf(object), 1);
    },

    equals(array) {
      if (!array) return false;
      const differentLength = this.dimension() !== array.dimension();
      if (differentLength) return false;

      for (let i = 0, l = this.dimension(); i < l; i++) {
        const elemsAreArrays = (this[i] instanceof Array) && (array[i] instanceof Array);
        if (elemsAreArrays && !this[i].equals(array[i])) return false;
        if (this[i] !== array[i]) return false;
      }
      return true;
    },

    clear() {
      this.length = 0;
    },
  },
};

const StringExtensions = {
  class: {
  },
  instance: {
    filter(predicate) {
      return this.split('').filter(predicate).join('');
    },

    forEach(func) {
      for (const element of this)
        func(element);
    },

    equals(string) {
      return this === string;
    },

    reverse() {
      return this.split('').reverse().join('');
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
      return this.asArray().filter(predicate).asSet();
    },

    asSet() {
      return this;
    },

    remove(object) {
      return this.delete(object);
    },

    union(set) { //Refactor with addAll
      const result = this.class().new(this);
      set.forEach(elem =>
        result.add(elem)
      );
      return result;
    },

    intersection(set) {
      return this.filter(elem => set.includes(elem));
    },

    map(func) {
      const result = this.class().new();
      this.forEach(elem => result.add(func(elem)));
      return result;
    },
  },
};

export const install = () => {
  applyExtension(Collection, Array, String, Set);
  applyExtension(SequenceableCollection, Array, String);
  applyExtension(HeterogeneousCollection, Array, Set);
  applyExtension(ArrayExtensions, Array);
  applyExtension(StringExtensions, String);
  applyExtension(SetExtensions, Set);
};
