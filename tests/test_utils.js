'use strict';

export function ensurePropertyCannotBeSet(object, property, assert) {
    assert
      .that(() => { object[property] = 3; })
      .raises(/Cannot assign to read only property/);
  }
