# OOW

An "Object-Oriented way" for JS (methods that should exist by default). The idea is to add more OO
experience, especially suited for teaching OOP.

## Extensions

To see all the available extensions, please have a look at the tests indide the `test` folder.

### Collections

`Array`, `String` and `Set` are classes that have very few methods in common, even though
they are all collections. For instance, `Set` has `size` and Array has `length`. So this
library defines some common behavior to make sure we can have more polymorphism.

Most of the added methods are inspired from Smalltalk (`isEmpty`, `includesAllOf`, `at`)
and Ruby (`take`, `drop`, `compact`).

### Date

Working with `Date` is not so easy so there're also helper methods like `monthNumber` that
returns a number from 1 to 12.
