'use strict';

import { applyExtension } from './extension_applier.js';

const FunctionExtension = {
  targets: [Function],
  class: {
  },
  instance: {
    value(...args) {
      return this(...args);
    },

    new(...args) {
      return new this(...args);
    },
  },
};

export const install = () => {
  applyExtension(FunctionExtension);
};
