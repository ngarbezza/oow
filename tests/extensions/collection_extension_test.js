'use strict';

require('../../oow');
const { suite, test, assert } = require('@pmoo/testy');

const identity = elem => elem;
const aPropertyAddedByOOW = 'isEmpty';

suite('messages added to Array, String and Set', () => {
  // isEmpty
  test('isEmpty is true for array/set/string', () => {
    assert.isTrue([].isEmpty());
    assert.isTrue(''.isEmpty());
    assert.isTrue(new Set().isEmpty());
  });
  test('isEmpty is false for array/set/string', () => {
    assert.isFalse([1].isEmpty());
    assert.isFalse('a'.isEmpty());
    assert.isFalse(new Set([4]).isEmpty());
  });
  // notEmpty
  test('notEmpty is true for array/set/string', () => {
    assert.isTrue([1].notEmpty());
    assert.isTrue('a'.notEmpty());
    assert.isTrue(new Set([4]).notEmpty());
  });
  test('notEmpty is false for array/set/string', () => {
    assert.isFalse([].notEmpty());
    assert.isFalse(''.notEmpty());
    assert.isFalse(new Set().notEmpty());
  });
  // first
  test('first of list', () => assert.areEqual([1, 2, 3].first(), 1));
  test('first of string', () => assert.areEqual('hola'.first(), 'h'));
  // second
  test('second of list', () => assert.areEqual([1, 2, 3].second(), 2));
  test('second of string', () => assert.areEqual('hola'.second(), 'o'));
  // third
  test('third of list', () => assert.areEqual([1, 2, 3].third(), 3));
  test('third of string', () => assert.areEqual('hola'.third(), 'l'));
  // last
  test('last of list', () => assert.areEqual([1, 2, 3].last(), 3));
  test('last of string', () => assert.areEqual('hola'.last(), 'a'));
  // any
  test('any in case true for array/string/set',() => {
    assert.isTrue([1, 2, 3].any(num => num > 2));
    assert.isTrue('hola'.any(letter => letter === 'o'));
    assert.isTrue(new Set([1, 2, 3]).any(num => num < 2));
  });
  test('any in case false for array/string/set', () => {
    assert.isFalse([1, 2, 3].any(num => num > 5));
    assert.isFalse([].any(_ => false));
    assert.isFalse('hola'.any(letter => letter === 'w'));
    assert.isFalse(new Set([1, 2, 3]).any(num => num < -1));
  });
  // all
  test('all in case true for array/set/string', () => {
    assert.isTrue([].all(_ => false));
    assert.isTrue([1, 2, 3].all(num => num < 4));
    assert.isTrue('hola'.all(letter => letter.match(/[a-z]/i)));
    assert.isTrue(new Set([3, 4, 5]).all(num => num >= 3));
  });
  test('all in case false for array/set/string', () => {
    assert.isFalse([1, 2, 3].all(num => num > 2));
    assert.isFalse('aaah'.all(letter => letter === 'a'));
    assert.isFalse(new Set([9, 7, 5]).all(num => num > 7));
  });
  // equals
  test('arrays are equal if they have the same elements in the same order', () => {
    assert.areEqual([], [], 'equals');
    assert.areEqual([1, 2, 3], [1, 2, 3], 'equals');
  });
  test('arrays are not equal if they have different elements or different elements order', () => {
    assert.areNotEqual([1, 2], [1], 'equals');
    assert.areNotEqual([1, 2, 3], [1, 3, 2], 'equals');
  });
  test('strings are equal if are ===', () => assert.areEqual('hola', 'hola', 'equals'));
  test('strings are not equal if they are !==', () => assert.areNotEqual('hola', 'halo', 'equals'));
  test('sets are equal if they have the same elements', () => {
    assert.areEqual(new Set([]), new Set([]), 'equals');
    assert.areEqual(new Set([1, 2, 3, 3]), new Set([3, 2, 1]), 'equals');
  });
  test('sets are not equal if they have different elements', () => {
    assert.areNotEqual(new Set([1, 2]), new Set([1]), 'equals');
    assert.areNotEqual(new Set([1, 2]), new Set([1, 2, 3]), 'equals');
  });
  // take
  test('take 2 on a list', () => assert.areEqual([3,2,1].take(2), [3,2]));
  test('take 2 on a string', () => assert.areEqual('hola'.take(2), 'ho'));
  // drop
  test('drop 2 on a list', () => assert.areEqual([3,2,1].drop(2), [1]));
  test('drop 2 on a string', () => assert.areEqual('hola'.drop(2), 'la'));
  // compact
  test('compact a list/set with nulls', () => {
    assert.areEqual([1, null, 2].compact(), [1, 2]);
    assert.areEqual(new Set([1, null, 2]).compact(), new Set([1, 2]));
  });
  test('compact a list/set with undefineds', () => {
    assert.areEqual([undefined, 1, undefined, 2].compact(), [1,2]);
  });
  // count
  test('counting (present elements) on list/string/set', () => {
    assert.areEqual([1, 42, 2, 23].count(n => n >= 2), 3);
    assert.areEqual('holaaaaa'.count(l => l === 'a'), 5);
    assert.areEqual(new Set([2, 4, 7]).count(n => n % 2 === 0), 2);
  });
  test('counting (no elements) on array/string/set', () => {
    assert.areEqual([1, 42, 2, 23].count(n => n === 0), 0);
    assert.areEqual('holaaaaa'.count(l => l === 'z'), 0);
    assert.areEqual(new Set([2, 4, 7]).count(n => n % 8 === 0), 0);
  });
  // filter on string/set
  test('filtering on string/set', () => {
    const notAnA = l => l !== 'a';
    assert.areEqual('asaoamaeatahaianaga'.filter(notAnA), 'something');
    assert.areEqual(new Set('asaoamaeatahaianaga').filter(notAnA), new Set('something'));
  });
  // asSet
  test('asSet on array', () => assert.areEqual([1, 42, 1, 1].asSet(), new Set([1, 42])));
  test('asSet on string', () => assert.areEqual('holaaaaa'.asSet(), new Set('hola')));
  test('asSet on set', () => assert.areEqual(new Set('hola').asSet(), new Set('hola')));
  // occurrences of element
  test('occurrences of object on array', () => {
    assert.areEqual([1, 1, 1, 23].occurrencesOf(1), 3);
    assert.areEqual([1, 1, 1, 23].occurrencesOf(23), 1);
    assert.areEqual([1, 1, 1, 23].occurrencesOf(100), 0);
  });
  test('occurrences of object on list does not use coertion', () => {
    assert.areEqual([1, '1', 1, 23].occurrencesOf(1), 2); // with == we would have got 3
  });
  test('occurrences of character on string', () => {
    assert.areEqual('holaaaaa'.occurrencesOf('a'), 5);
    assert.areEqual('holaaaaa'.occurrencesOf('h'), 1);
    assert.areEqual('holaaaaa'.occurrencesOf('z'), 0);
  });
  // includes "all of"
  test('includes all of an array/string/set', () => {
    assert.isTrue([1, 2, 3].includesAllOf([2, 3]));
    assert.isTrue('holaaaaa'.includesAllOf('alo'));
    assert.isTrue(new Set('holaaaaa').includesAllOf(new Set('alo')));
  });
  test('does not include all of an array/string/set', () => {
    assert.isFalse([1, 2, 3].includesAllOf([2, 4]));
    assert.isFalse('holaaaaa'.includesAllOf('alou'));
    assert.isFalse(new Set('holaaaaa').includesAllOf(new Set('alou')));
  });
  // forEach for strings
  test('forEach for strings', () => {
    const elems = [];
    'hola'.forEach(letter => elems.push(letter));
    assert.areEqual(elems, ['h', 'o', 'l', 'a']);
  });
  // includes for sets
  test('set includes an element', () => assert.isTrue(new Set([2, 1]).includes(1)));
  test('set does not include an element', () => assert.isFalse(new Set([2, 1]).includes(3)));
  // dimension (because length and size cannot be used)
  test('dimension as a polymorphic message to get the size of array/set/string', () => {
    assert.areEqual([1, 2, 3].dimension(), 3);
    assert.areEqual('hola'.dimension(), 4);
    assert.areEqual(new Set('abcde').dimension(), 5);
  });
  
  // sum
  test('sum elements of array/set with default starting value (0)', () => {
    assert.areEqual([4, 5, 6].sum(), 15);
    assert.areEqual(new Set([4, 5, 5]).sum(), 9);
  });
  
  test('sum elements of array/set with a function applied to each element', () => {
    assert.areEqual([4, 5, 6].sum(elem => elem + 1), 18);
    assert.areEqual(new Set([4, 5, 5]).sum(elem => elem - 1), 7);
  });
  
  test('sum elements of array/set with a starting value', () => {
    assert.areEqual([1, 2, 3].sum(identity, 10), 16);
    assert.areEqual(new Set([4, 5, 5]).sum(identity, 5), 14);
  });
  
  test('sum using a function that returns zero, is zero', () => {
    const objWithZero = { prop: 0 };
    const sumWithZeroResult = [objWithZero, objWithZero, objWithZero].sum(obj => obj.prop, 0);
    assert.areEqual(sumWithZeroResult, 0);
  });
  
  test('.with instance creation messages for array/set', () => {
    assert.areEqual(Array.with(1, 2, 3), [1, 2, 3]);
    assert.areEqual(Array.with(1), [1]);
    assert.areEqual(Set.with(1, 2, 3), new Set([1, 2, 3]));
    assert.areEqual(Set.with(1), new Set([1]));
  });
  
  test('at() for accessing elements on array/string', () => {
    assert.areEqual([1, 2, 3].at(0), 1);
    assert.areEqual('hola'.at(1), 'o');
  });
  
  test('add() for arrays adds element at the last position', () => {
    const myArray = [1, 2, 3];
    myArray.add(4);
    myArray.add(5);
    assert.areEqual(myArray, [1, 2, 3, 4, 5]);
  });
  
  test('extensions are not enumerated in for..in construct', () => {
    const someArray = [1, 2, 3];
    let extensionWasEnumerated = false;
    for (const property in someArray) {
      if (property === aPropertyAddedByOOW) extensionWasEnumerated = true;
    }
    assert.isFalse(extensionWasEnumerated);
  });
  
  test('extensions are not included in Object.keys', () => {
    const someArray = [1, 2, 3];
    assert.isFalse(Object.keys(someArray).includes(aPropertyAddedByOOW));
  });
  
  test('reverse() can be called on a String', () => {
    assert.areEqual('hola'.reverse(), 'aloh');
  });
  
  test('remove(obj) can be used to remove an element from an array', () => {
    const array = [1, 2, 3, 4];
    array.remove(3);
    assert.that(array).includesExactly(1, 2, 4);
  });
  
  test('remove(obj) can be used to remove an element from a set', () => {
    const set = Set.with(1, 2, 3, 4);
    set.remove(3);
    const setWithoutThree = Set.with(1, 2, 4);
    assert.areEqual(set, setWithoutThree); // cannot use includesExactly per testy bug #58
  });
  
  test('All but first', () => {
    const someArray = [1, 2, 3];
    const someString = 'hola';
    assert.that(someArray.allButFirst()).isEqualTo([2, 3]);
    assert.that(someString.allButFirst()).isEqualTo('ola');
  });
  
  test('All but last', () => {
    const someArray = [1, 2, 3];
    const someString = 'hola';
    assert.that(someArray.allButLast()).isEqualTo([1, 2]);
    assert.that(someString.allButLast()).isEqualTo('hol');
  });
  
  test('Set union', () => {
    const someSet1 = new Set([1, 2, 3]);
    const someSet2 = new Set([3,4,5]);
    assert.areEqual(someSet1.union(someSet2), new Set([1, 2, 3, 4, 5]));
  });
  
  test('Set intersection', () => {
    const someSet1 = new Set([1, 2, 3]);
    const someSet2 = new Set([3,4,5]);
    assert.areEqual(someSet1.intersection(someSet2), new Set([3]));
  });
  
  test('map() for Sets', () => {
    const mySet = new Set([1, 2, 3]);
    const result = mySet.map(elem => elem + 20);
    assert.areEqual(result, Set.with(21, 22, 23));
  });
  
  test('atRandom() for all collections, when there is only one element it is always selected', () => {
    assert.areEqual('h'.atRandom(), 'h');
    assert.areEqual([1].atRandom(), 1);
    assert.areEqual(Set.with(3).atRandom(), 3);
  });
  
  test('atRandom() for all collections, when there is only one element it is always selected', () => {
    // refactor when isIncludedIn() matcher is added to testy
    assert.that('hola').includes('hola'.atRandom());
    assert.that([1, 2, 3]).includes([1, 2, 3].atRandom());
    assert.that(Set.with(3, 5, 7)).includes(Set.with(3, 5, 7).atRandom());
  });
  
  test('atRandom() for all collections, when the collection is empty it returns undefined', () => {
    // refactor when isUndefined() matcher is added to testy
    assert.isTrue(''.atRandom() === undefined);
    assert.isTrue([].atRandom() === undefined);
    assert.isTrue(Set.with().atRandom() === undefined);
  });
  
  test('atRandom() and sample() are aliases', () => {
    assert.areEqual('h'.atRandom(), 'h'.sample());
    assert.areEqual([1].atRandom(), [1].sample());
    assert.areEqual(Set.with(3).atRandom(), Set.with(3).sample());
  });
});
