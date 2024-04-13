# OOW
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

An "Object-Oriented way" for JS (methods that should exist by default). The idea is to add more OO
experience, especially suited for teaching OOP. **Not intended for production usage.**

## Installation

`npm install @pmoo/oow`

**Supported Node versions**: 18.x or higher (versions with active and security support
listed [here](https://endoflife.date/nodejs))

## Extensions

### Summary

| object or objects affected  | class or instance | extension method             | comment                                                                                                             |
|:----------------------------|:------------------|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------|
| `Object`                    | instance          | `childResponsibility()`      | mark a method as _abstract_ (to be used on objects)                                                                 |
|                             |                   | `subclassResponsibility()`   | mark a method as _abstract_ (to be used on classes)                                                                 |
|                             |                   | `class()`                    | returns the receiver's class                                                                                        |
|                             |                   | `isString()`                 | `true` if the receiver is a `String`, `false` otherwise                                                             |
| `Function`                  | instance          | `value(...args)`             | evaluates the function with the given arguments, equivalent to `apply` with the first argument being `undefined`    |
|                             |                   | `new(...args)`               | to be able to write `Class.new()` as equivalent to `new Class()`                                                    |
| `Date`                      | class             | `today()`                    | returns today's date                                                                                                |
|                             |                   | `tomorrow()`                 | returns tomorrow's date                                                                                             |
|                             |                   | `yesterday()`                | returns yesterday's date                                                                                            |
|                             | instance          | `day()`                      | returns the day number                                                                                              |
|                             |                   | `monthNumber()`              | returns the month number (from 1 to 12)                                                                             |
|                             |                   | `year()`                     | returns the year number (4 digits)                                                                                  |
| `Array`                     | class             | `with(...objects)`           | returns a new instance with the given objects                                                                       |
|                             | instance          | `add(anObject)`              | adds one element, equivalent to `push(anObject)`                                                                    |
|                             |                   | `remove(anObject)`           | removes an element from the collection                                                                              |
|                             |                   | `equals(anArray)`            | equality comparison (elements one by one)                                                                           |
|                             |                   | `clear()`                    | removes all the elements                                                                                            |
| `String`                    | instance          | `filter(condition)`          | filters letters that match the given condition                                                                      |
|                             |                   | `forEach(function)`          | iterates over every letter evaluating the given function                                                            |
|                             |                   | `equals(aString)`            | equality comparison, equivalent to `===`                                                                            |
|                             |                   | `reverse()`                  | returns the reversed version of the receiver                                                                        |
| `Set`                       | class             | `with(...objects)`           | returns a new instance with the given objects                                                                       |
|                             | instance          | `dimension()`                | returns the collection size, equivalent to calling the `size` property                                              |
|                             |                   | `includes(anObject)`         | check for element inclusion, equivalent to `has(anObject)`                                                          |
|                             |                   | `equals(aSet)`               | equality comparison, based on mutual inclusion                                                                      |
|                             |                   | `filter(condition)`          | filters all the elements matching the given condition                                                               |
|                             |                   | `map(function)`              | returns a new `Set` with the result of applying a function to every element in the collection                       |
|                             |                   | `remove(anObject)`           | removes an object, equivalent to `delete(anObject)`                                                                 |
|                             |                   | `union(aSet)`                | returns a new `Set` representing the union of the receiver and the argument                                         |
|                             |                   | `intersection(aSet)`         | returns a new `Set` representing the intersection of the receiver and the argument                                  |
| `Array` and `Set`           | instance          | `compact()`                  | returns a new instance without `null` and `undefined` values                                                        |
|                             |                   | `removeAll()`                | removes all the elements, equivalent to `clear()`                                                                   |
| `Array` and `String`        | instance          | `at(position)`               | returns the n-th element, equivalent to using `collection[n]`                                                       |
|                             |                   | `dimension()`                | returns the collection size, equivalent to call the `length` property                                               |
|                             |                   | `first()`                    | returns the first element                                                                                           |
|                             |                   | `second()`                   | returns the second element                                                                                          |
|                             |                   | `third()`                    | returns the third element                                                                                           |
|                             |                   | `last()`                     | returns the last element                                                                                            |
|                             |                   | `take(n)`                    | returns a new collection with the first n elements                                                                  |
|                             |                   | `drop(n)`                    | returns a new collection discarding the first n elements                                                            |
|                             |                   | `occurrencesOf(anObject)`    | returns how many times an object appears in the collection                                                          |
|                             |                   | `allButFirst()`              | returns a copy of the collection except for the first element                                                       |
|                             |                   | `allButLast()`               | returns a copy of the collection except for the last element                                                        |
| `Array`, `Set` and `String` | instance          | `isEmpty()`                  | returns if the collection is empty                                                                                  |
|                             |                   | `notEmpty()`                 | returns if the collection is not empty                                                                              |
|                             |                   | `any(condition)`             | returns `true` if any element matches the given condition                                                           |
|                             |                   | `all(condition)`             | returns `true` if all elements match the given condition                                                            |
|                             |                   | `includesAllOf(collection)`  | returns `true` if the collection includes all the elements from the argument                                        |
|                             |                   | `count(condition)`           | returns how many elements match the given condition                                                                 |
|                             |                   | `atRandom()`                 | returns a random element                                                                                            |
|                             |                   | `sample()`                   | returns a random element, equivalent to `atRandom()`                                                                |
|                             |                   | `asArray()`                  | returns a new `Array` with all the collection elements                                                              |
|                             |                   | `asSet()`                    | returns a new `Set` with all the collection elements                                                                |
| `Number`                    | instance          | `isDivisibleBy(aNumber)`     | returns `true` if the receiver is divisible by the argument                                                         |
|                             |                   | `isOdd()`                    | returns `true` if the receiver is odd                                                                               |
|                             |                   | `isEven()`                   | returns `true` if the receiver is even                                                                              |
|                             |                   | `isPositive()`               | returns `true` if the receiver is positive                                                                          |
|                             |                   | `isNegative()`               | returns `true` if the receiver is negative                                                                          |
|                             |                   | `isBetween(minimum,maximum)` | returns `true` if the receiver is between the first and the second arguments                                        |
|                             |                   | `timesRepeat(aFunction)`     | call aFunction as many times as the receiver of the message                                                         |


To see how all the available extensions are being used, please have a look at the tests inside the `test` folder.

### Collections

`Array`, `String` and `Set` are classes that have very few methods in common, even though
they are all collections. For instance, `Set` has `size` and Array has `length`. So this
library defines some common behavior to make sure we can have more polymorphism.

Most of the added message names are inspired by Smalltalk (`isEmpty`, `includesAllOf`, `at`)
and Ruby (`take`, `drop`, `compact`).

#### Polymorphism achieved so far

Among many of the messages added to the collection protocols, these are the messages that some collections have by default but others don't:

* `add(obj)` works for `Array` and `Set` (we added the `Array` version)
* `includes(obj)` works for `Array` and `Set` (we added the `Set` version)
* `filter(condition)` works for every collection (we added the `String` and `Set` versions)
* `forEach(function)` works for every collection (we added the `String` version)
* `reverse()` works for `Array` and `String` (we added the `String` version)
* `clear()` works for `Array` and `Set` (we added the `Array` version)

### `Date`

Working with `Date` is not so easy so there are also helper methods like `monthNumber` that
returns a number from 1 to 12.

## New Objects

### `Point`

`Point` class represents an (x, y) pair. You can access its parts by sending `x()` and `y()` messages. Instances of this class are immutable.

### `DayOfMonth`

`DayOfMonth` represents a day in a month, not specific to a year, like "November 9th". The `day()` and `monthNumber()` messages can be used to access the information. Instances of this class are immutable. 

### `MonthOfYear`

`MonthOfYear` represents a month in a specific year like "May of 2020". The `monthNumber()` and `year()` messages can be used to access the information. Instances of this class are immutable. 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/federicostulich"><img src="https://avatars.githubusercontent.com/u/51274964?v=4?s=100" width="100px;" alt=""/><br /><sub><b>federicostulich</b></sub></a><br /><a href="https://github.com/ngarbezza/oow/commits?author=federicostulich" title="Code">💻</a> <a href="https://github.com/ngarbezza/oow/commits?author=federicostulich" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/davidgonzalezjs"><img src="https://avatars.githubusercontent.com/u/31224430?v=4?s=100" width="100px;" alt=""/><br /><sub><b>davidgonzalezjs</b></sub></a><br /><a href="https://github.com/ngarbezza/oow/commits?author=davidgonzalezjs" title="Code">💻</a> <a href="https://github.com/ngarbezza/oow/commits?author=davidgonzalezjs" title="Documentation">📖</a> <a href="https://github.com/ngarbezza/oow/commits?author=davidgonzalezjs" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
