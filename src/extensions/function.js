'use strict';

const { applyExtension } = require('./extension_applier');

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

applyExtension(FunctionExtension, Function);
