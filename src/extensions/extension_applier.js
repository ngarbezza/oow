'use strict';

const eachExtensionOf = (extension, block) =>
  Object.keys(extension).forEach(block);

const extend = (proto, extension, methodName) =>
  Object.defineProperty(proto, methodName, { value: extension[methodName] });

export const applyExtension = (extension) => {
  eachExtensionOf(extension.instance, methodName =>
    extension.targets.forEach(type => extend(type.prototype, extension.instance, methodName))
  );
  eachExtensionOf(extension.class, methodName =>
    extension.targets.forEach(type => extend(type, extension.class, methodName))
  );
};
