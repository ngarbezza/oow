'use strict';

import { install as installCollection } from './src/extensions/collections.js';
import { install as installDate } from './src/extensions/date.js';
import { install as installFunction } from './src/extensions/function.js';
import { install as installObject } from './src/extensions/object.js';
import { install as installNumber } from './src/extensions/number.js';

import { Point } from './src/objects/point.js';
import { DayOfMonth } from './src/objects/day_of_month.js';
import { MonthOfYear } from './src/objects/month_of_year.js';

installCollection();
installDate();
installFunction();
installObject();
installNumber();

export {
  Point,
  DayOfMonth,
  MonthOfYear,
};
