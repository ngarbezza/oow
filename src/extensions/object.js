'use strict';

import { applyExtension } from './extension_applier.js';

const ObjectExtension = {
  targets: [Object],
  class: {
  },
  instance: {
    class() {
      return this.constructor;
    },

    childResponsibility() {
      throw new Error(`${this.class()} had the responsibility to implement this method`);
    },

    subclassResponsibility() {
      this.childResponsibility();
    },

    isString() {
      return false;
    },
  },
};

export const install = () => {
  applyExtension(ObjectExtension);
};
