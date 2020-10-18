'use strict';

require('../../oow');
const { suite, test, assert } = require('@pmoo/testy');

suite('messages added to functions', () => {
  test('value() works with no arguments', () => {
    const toEvaluate = () => 'hey';
    assert.areEqual(toEvaluate.value(), 'hey');
  });
  
  test('value() works with several arguments', () => {
    const toEvaluate = (a, b, c) => `${a}, ${b} and ${c}`;
    assert.areEqual(toEvaluate.value('one', 'two', 'three'), 'one, two and three');
  });

  test('new() can be used as a replacement for the "new" keyword for constructor without arguments', () => {
    assert.that(Array.new()).isEqualTo(new Array());
  });

  test('new() can be used as a replacement for the "new" keyword for constructor with arguments', () => {
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      equals(anotherPerson) {
        return this.name === anotherPerson.name && this.age === anotherPerson.age;
      }
    }

    assert.that(Person.new('avery', 19)).isEqualTo(new Person('avery', 19));
  });
});
