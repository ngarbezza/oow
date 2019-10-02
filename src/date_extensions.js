'use strict';

const { applyExtension } = require('./extension_applier');

const DateExtensions = {
  class: {
    today() {
      return new Date();
    },
    tomorrow() {
      const result = this.today();
      result.setDate(result.getDate() + 1);
      return result;
    },
    yesterday() {
      const result = this.today();
      result.setDate(result.getDate() - 1);
      return result;
    },
  },
  instance: {
    day() {
      return this.getDate();
    },
    monthNumber() {
      return this.getMonth() + 1;
    },
    year() {
      return this.getFullYear();
    },
  },
};

applyExtension(DateExtensions, Date);
