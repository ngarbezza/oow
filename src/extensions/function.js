'use strict';

import { applyExtension } from './extension_applier.js';

const FunctionExtension = {
  class: {
  },
  instance: {
    value(...args) {
      return this.apply(undefined, args);
    },

    new(...args) {
      return new this(...args);
    },
  },
};

export const install = () => {
  applyExtension(FunctionExtension, Function);
};
