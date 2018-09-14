require('./oow');

function suite() {
  let total = arguments.length;
  let passed = 0;
  for (let result in arguments)
    if (arguments[result]) passed++;
  let failed = total - passed;
  console.log(`${total} tests, ${passed} passed, ${failed} failed`);
}

function assert(message, actual, expected) {
  let success = actual === expected;
  if (success) {
    console.log(`[OK] ${message}`);
  } else {
    console.log(`[FAIL] ${message}. Expected ${expected} got ${actual}`);
  }
  return success;
}

suite(
  // isEmpty
  assert('list is empty', [].isEmpty(), true),
  assert('string is empty', "".isEmpty(), true),
  // notEmpty
  assert('list is not empty', [1].notEmpty(), true),
  assert('string is not empty', "a".notEmpty(), true),
  // first
  assert('first of list', [1, 2, 3].first(), 1),
  assert('first of string', "hola".first(), 'h'),
  // last
  assert('last of list', [1, 2, 3].last(), 3),
  assert('last of string', "hola".last(), 'a'),
  // any
  assert('any in case true - lists', [1,2,3].any(num => num > 2), true),
  assert('any in case true - string', "hola".any(letter => letter === "o"), true),
  assert('any in case false - lists', [1,2,3].any(num => num > 5), false),
  assert('any in case false - lists', "hola".any(letter => letter === 'w'), false),
  assert('any in case empty', [].any(_ => false), false),
  // all
  assert('all in case true - lists', [1,2,3].all(num => num < 4), true),
  assert('all in case true - string', "hola".all(letter => letter.match(/[a-z]/i)), true),
  assert('all in case false - lists', [1,2,3].all(num => num > 2), false),
  assert('all in case false - lists', "aaah".all(letter => letter === "a"), false),
  assert('all in case empty', [].all(_ => false), true),
);