'use strict';

require('./oow');
const { suite, test, assert } = require('@pmoo/testy');

suite('messages added to array and string', () => {
  // isEmpty
  test('list is empty',   () => assert.isTrue([].isEmpty()));
  test('string is empty', () => assert.isTrue("".isEmpty()));
  // notEmpty
  test('list is not empty',  () => assert.isTrue([1].notEmpty()));
  test('string is not empty', () => assert.isTrue("a".notEmpty()));
  // first
  test('first of list',   () => assert.areEqual([1, 2, 3].first(), 1));
  test('first of string', () => assert.areEqual("hola".first(), 'h'));
  // second
  test('second of list',   () => assert.areEqual([1, 2, 3].second(), 2));
  test('second of string', () => assert.areEqual('hola'.second(), 'o'));
  // third
  test('third of list',   () => assert.areEqual([1, 2, 3].third(), 3));
  test('third of string', () => assert.areEqual('hola'.third(), 'l'));
  // last
  test('last of list',   () => assert.areEqual([1, 2, 3].last(), 3));
  test('last of string', () => assert.areEqual('hola'.last(), 'a'));
  // any
  test('any in case true - lists',  () => assert.isTrue([1,2,3].any(num => num > 2)));
  test('any in case true - string', () => assert.isTrue("hola".any(letter => letter === "o")));
  test('any in case false - lists', () => assert.isFalse([1,2,3].any(num => num > 5)));
  test('any in case false - lists', () => assert.isFalse("hola".any(letter => letter === "w")));
  test('any in case empty',         () => assert.isFalse([].any(_ => false)));
  // all
  test('all in case true - lists',  () => assert.isTrue([1,2,3].all(num => num < 4)));
  test('all in case true - string', () => assert.isTrue('hola'.all(letter => letter.match(/[a-z]/i))));
  test('all in case false - lists', () => assert.isFalse([1,2,3].all(num => num > 2)));
  test('all in case false - lists', () => assert.isFalse('aaah'.all(letter => letter === 'a')));
  test('all in case empty',         () => assert.isTrue([].all(_ => false)));
  // take
  test('take 2 on a list',   () => assert.areEqual([3,2,1].take(2), [3,2]));
  test('take 2 on a string', () => assert.areEqual('hola'.take(2), 'ho'));
  // drop
  test('drop 2 on a list',   () => assert.areEqual([3,2,1].drop(2), [1]));
  test('drop 2 on a string', () => assert.areEqual('hola'.drop(2), 'la'));
  // compact
  test('compact a list with nulls',      () => assert.areEqual([1, null, 2].compact(), [1,2]));
  test('compact a list with undefineds', () => assert.areEqual([undefined, 1, undefined, 2].compact(), [1,2]));
  // count
  test('counting on list',   () => assert.areEqual([1, 42, 2, 23].count(n => n >= 2), 3));
  test('counting on string', () => assert.areEqual('holaaaaa'.count(l => l === "a"), 5));
  // filter on string
  test('filtering on string', () => assert.areEqual('asaoamaeatahaianaga'.filter(l => l !== 'a'), 'something'));
}).run();
