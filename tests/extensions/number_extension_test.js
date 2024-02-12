'use strict';

import { assert, suite, test } from '@pmoo/testy';

/*

Messages cannot be sent to number literals.
A message can be sent to a number in the following cases:

  * To a variable containing a number
    const two = 2
    two.isEven()

  * To an instance of Number
    new Number(2).isEven()

  * To a number returned from a function
    function two() { return 2 }
    two().isEven()

  * On some browsers a message can be sent to a number literal inside parenthesis

*/
const minusOne = -1;
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;

suite('messages added to Number', () => {

  test('timesRepeat call a function as many times as the receiver of the message if it is greater than zero', () => {
    let counter = 0;

    two.timesRepeat(() => counter++);

    assert.that(counter).isEqualTo(2);
  });

  test('timesRepeat do nothing if the receiver of the message is to zero', () => {
    let counter = 0;

    zero.timesRepeat(() => counter++);

    assert.that(counter).isEqualTo(0);
  });

  test('timesRepeat do nothing if the receiver of the message is less than zero', () => {
    let counter = 0;

    minusOne.timesRepeat(() => counter++);

    assert.that(counter).isEqualTo(0);
  });

  test('isDivisibleBy returns a boolean indicating if the receiver is divisible by another number', () => {
    assert.isTrue(four.isDivisibleBy(2));
    assert.isFalse(four.isDivisibleBy(3));
  });

  test('isOdd returns true if the receiver is odd', () => {
    assert.isTrue(one.isOdd());
    assert.isFalse(two.isOdd());
  });

  test('isEven returns true if the receiver is even', () => {
    assert.isTrue(two.isEven());
    assert.isFalse(one.isEven());
  });

  test('isPositive returns true if the receiver is positive', () => {
    assert.isTrue(one.isPositive());
    assert.isFalse(zero.isPositive());
    assert.isFalse(minusOne.isPositive());
  });

  test('isNegative returns true if the receiver is negative', () => {
    assert.isTrue(minusOne.isNegative());
    assert.isFalse(zero.isNegative());
    assert.isFalse(one.isNegative());
  });

  test('isBetween returns true if the receiver is between two numbers', () => {
    assert.isTrue(one.isBetween(1, 3));
    assert.isTrue(two.isBetween(1, 3));
    assert.isTrue(three.isBetween(1, 3));
  });

  test('isBetween returns false if the receiver is not between two numbers', () => {
    assert.isFalse(zero.isBetween(1, 3));
    assert.isFalse(four.isBetween(1, 3));
  });

  test('absolute returns the absolute value of the receiver', () => {
    assert.that(one.absolute()).isEqualTo(1);
    assert.that(minusOne.absolute()).isEqualTo(1);
  });

});
