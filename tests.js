require('./oow');

function suite() {
  let total = arguments.length;
  let passed = 0;
  for (let result in arguments)
    if (arguments[result]) passed++;
  let failed = total - passed;
  console.log(`${total} tests, ${passed} passed, ${failed} failed`);
}

function assert(message, matcher) {
  if (matcher.success) {
    console.log(`[OK] ${message}`);
  } else {
    console.log(`[FAIL] ${message}. ${matcher.errorMessage}`);
  }
  return matcher.success;
}

function equal(actual, expected) {
  let result;
  if (expected instanceof Array) {
    result = actual.equals(expected);
  } else {
    result = actual === expected;
  }
  return { success: result, errorMessage: `Expected ${expected} got ${actual}` };
}

function isTrue(value) {
  return { success: value, errorMessage: `Expected ${value} to be true` };
}

function isFalse(value) {
  return { success: !value, errorMessage: `Expected ${value} to be false` };
}

suite(
  // isEmpty
  assert('list is empty',   isTrue([].isEmpty())),
  assert('string is empty', isTrue("".isEmpty())),
  // notEmpty
  assert('list is not empty',   isTrue([1].notEmpty())),
  assert('string is not empty', isTrue("a".notEmpty())),
  // first
  assert('first of list',   equal([1, 2, 3].first(), 1)),
  assert('first of string', equal("hola".first(), 'h')),
  // last
  assert('last of list',   equal([1, 2, 3].last(), 3)),
  assert('last of string', equal("hola".last(), 'a')),
  // any
  assert('any in case true - lists',  isTrue([1,2,3].any(num => num > 2))),
  assert('any in case true - string', isTrue("hola".any(letter => letter === "o"))),
  assert('any in case false - lists', isFalse([1,2,3].any(num => num > 5))),
  assert('any in case false - lists', isFalse("hola".any(letter => letter === "w"))),
  assert('any in case empty',         isFalse([].any(_ => false))),
  // all
  assert('all in case true - lists',  isTrue([1,2,3].all(num => num < 4))),
  assert('all in case true - string', isTrue("hola".all(letter => letter.match(/[a-z]/i)))),
  assert('all in case false - lists', isFalse([1,2,3].all(num => num > 2))),
  assert('all in case false - lists', isFalse("aaah".all(letter => letter === "a"))),
  assert('all in case empty',         isTrue([].all(_ => false))),
  // take
  assert('take 2 on a list',   equal([3,2,1].take(2), [3,2])),
  assert('take 2 on a string', equal("hola".take(2), "ho")),
  // drop
  assert('drop 2 on a list',   equal([3,2,1].drop(2), [1])),
  assert('drop 2 on a string', equal("hola".drop(2), "la"))
);