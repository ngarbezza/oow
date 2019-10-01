'use strict';

const { Testy } = require('@pmoo/testy');

Testy.configuredWith({
  // Absolute path. Resolved by 'path' module
  directory: require('path').resolve('./test'),
}).run();
