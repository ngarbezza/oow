# OOW

An "Object-Oriented way" for JS (methods that should exist by default). The idea is to add more OO
experience, especially suited for teaching OOP.

## Extensions

To see all the available extensions, please have a look at the tests inside the `test` folder.

### Collections

`Array`, `String` and `Set` are classes that have very few methods in common, even though
they are all collections. For instance, `Set` has `size` and Array has `length`. So this
library defines some common behavior to make sure we can have more polymorphism.

Most of the added message names are inspired by Smalltalk (`isEmpty`, `includesAllOf`, `at`)
and Ruby (`take`, `drop`, `compact`).

#### Polymorphism achieved so far

These are the messages that some collections have by default but others don't.

* `add(obj)` works for `Array` and `Set` (we added the Array version)
* `filter(condition)` works for all collection (we added the String version)

### Date

Working with `Date` is not so easy so there're also helper methods like `monthNumber` that
returns a number from 1 to 12.

## New Objects

### Point

`Point` class represents an (x, y) pair. You can access its parts by sending `x()` and `y()` messages.
