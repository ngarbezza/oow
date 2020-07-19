'use strict';

module.exports = {
  ensurePropertyCannotBeSet(object, property, assert) {
    assert
      .that(() => { object[property] = 3; })
      .raises(/Cannot assign to read only property/);
  }
};
