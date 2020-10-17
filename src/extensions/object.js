'use strict';

const { applyExtension } = require('./extension_applier');

const ObjectExtension = {
  class: {
  },
  instance: {
    childResponsibility() {
      throw `${this} had the responsibility to implement this method`;
    },
    subclassResponsibility() {
      this.childResponsibility();
    },
  },
};

applyExtension(ObjectExtension, Object);
