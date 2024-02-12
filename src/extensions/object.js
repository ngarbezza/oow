'use strict';

import { applyExtension } from './extension_applier.js';

const ObjectExtension = {
  class: {
  },
  instance: {
    class() {
      return this.constructor;
    },

    childResponsibility() {
      throw `${this} had the responsibility to implement this method`;
    },

    subclassResponsibility() {
      this.childResponsibility();
    },
  },
};

export const install = () => {
  applyExtension(ObjectExtension, Object);
};
