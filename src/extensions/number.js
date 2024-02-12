'use strict';

import { applyExtension } from './extension_applier.js';

const NumberExtensions = {
  instance: {
    isDivisibleBy(aNumber) {
      return this % aNumber === 0;
    },
    isEven() {
      return this.isDivisibleBy(2);
    },
    isOdd() {
      return !this.isEven();
    },
    isPositive() {
      return this > 0;
    },
    isNegative() {
      return this < 0;
    },
    isBetween(minumum, maximum) {
      return this >= minumum && this <= maximum;
    },
    absolute() {
      return Math.abs(this);
    },
    timesRepeat(aFunction) {
      for (let i = 0; i < this; i++) aFunction();
    }
  }
};

export const install = () => {
  applyExtension(NumberExtensions, Number);
};
