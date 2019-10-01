'use strict';

const eachExtensionOf = (extension, block) =>
  Object.keys(extension).forEach(block);

const extend = (proto, extension, methodName) =>
  Object.defineProperty(proto, methodName, { value: extension[methodName] });

const applyExtension = (extension, ...targetTypes) => {
  eachExtensionOf(extension.instance, methodName =>
    targetTypes.forEach(type => extend(type.prototype, extension.instance, methodName))
  );
  eachExtensionOf(extension.class, methodName =>
    targetTypes.forEach(type => extend(type, extension.class, methodName))
  );
};

module.exports = {
  eachExtensionOf,
  extend,
  applyExtension,
};
