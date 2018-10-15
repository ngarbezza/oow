require('./oow');
const { suite, test, assertTrue, assertFalse, assertEquals } = require('@ngarbezza/testy');

function assertEqual(actual, expected) {
  let result;
  if (expected instanceof Array) {
    result = actual.equals(expected);
  } else {
    result = actual === expected;
  }
  return { success: result, errorMessage: `Expected ${expected} got ${actual}` };
}

suite(
  // isEmpty
  test('list is empty',   assertTrue([].isEmpty())),
  test('string is empty', assertTrue("".isEmpty())),
  // notEmpty
  test('list is not empty',   assertTrue([1].notEmpty())),
  test('string is not empty', assertTrue("a".notEmpty())),
  // first
  test('first of list',   assertEqual([1, 2, 3].first(), 1)),
  test('first of string', assertEqual("hola".first(), 'h')),
  // second
  test('second of list',   assertEqual([1, 2, 3].second(), 2)),
  test('second of string', assertEqual("hola".second(), 'o')),
  // third
  test('third of list',   assertEqual([1, 2, 3].third(), 3)),
  test('third of string', assertEqual("hola".third(), 'l')),
  // last
  test('last of list',   assertEqual([1, 2, 3].last(), 3)),
  test('last of string', assertEqual("hola".last(), 'a')),
  // any
  test('any in case true - lists',  assertTrue([1,2,3].any(num => num > 2))),
  test('any in case true - string', assertTrue("hola".any(letter => letter === "o"))),
  test('any in case false - lists', assertFalse([1,2,3].any(num => num > 5))),
  test('any in case false - lists', assertFalse("hola".any(letter => letter === "w"))),
  test('any in case empty',         assertFalse([].any(_ => false))),
  // all
  test('all in case true - lists',  assertTrue([1,2,3].all(num => num < 4))),
  test('all in case true - string', assertTrue("hola".all(letter => letter.match(/[a-z]/i)))),
  test('all in case false - lists', assertFalse([1,2,3].all(num => num > 2))),
  test('all in case false - lists', assertFalse("aaah".all(letter => letter === "a"))),
  test('all in case empty',         assertTrue([].all(_ => false))),
  // take
  test('take 2 on a list',   assertEqual([3,2,1].take(2), [3,2])),
  test('take 2 on a string', assertEqual("hola".take(2), "ho")),
  // drop
  test('drop 2 on a list',   assertEqual([3,2,1].drop(2), [1])),
  test('drop 2 on a string', assertEqual("hola".drop(2), "la")),
  // compact
  test('compact a list with nulls', assertEqual([1, null, 2].compact(), [1,2])),
  test('compact a list with undefineds', assertEqual([undefined, 1, undefined, 2].compact(), [1,2]))
);