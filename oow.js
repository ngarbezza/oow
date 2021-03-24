'use strict';

require('./src/extensions/collections');
require('./src/extensions/date');
require('./src/extensions/function');
require('./src/extensions/object');
require('./src/extensions/number');

module.exports = {
  Point: require('./src/objects/point'),
  DayOfMonth: require('./src/objects/day_of_month'),
  MonthOfYear: require('./src/objects/month_of_year'),
};
