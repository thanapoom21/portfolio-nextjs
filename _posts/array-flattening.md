---
title: 'Array Flattening in JavaScript'
excerpt: 'An array can contain many things such as String, Number, Boolean, Object. This is how we store an ordered collection, where each item is indexed and starts from 0.'
coverImage: '/assets/blog/array-flattening/cover.png'
date: '2020-07-14T05:35:07.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/array-flattening/cover.png'
---

## Array Flattening

An array can contain many things such as String, Number, Boolean, Object. This is how we store an ordered collection, where each item is indexed and starts from 0. For example, say we want to store a list of tactical terms: Control Possession, Gegenpressing, Tiki-Taka, Wing Play, Route One, Fluid Counter Attack, Direct Counter Attack, False 9.

In order to manage the elements that come in order, using object might not be very convenient. Array is a better choice in this situation because we can insert a new element in between existing ones.

### One-dimentional array

One-dimentional array means it does not contain nested arrays. This type of array is very simple and easy to work with.

```js
let oneDiArray = [1, 2.0, "three", false, "five"];
```

### Multi-dimentional array

Multi-dimentional array is something different and can make you bang your head against the bug wall. Two-dimentional array will make you pause for a bit but three or more dimentional array may convince you to question your life choice.

```js
// Two-dimentional
let initialArray = [[11, 22], [33, 44], 55, [66, 77]];
```

```js
// More than two dimention
let initialArray = [[11, 22], [[3, [33, 333]]], 44], 55, [66, ["Seven", true]]];
```

### How do we flatten this array?

Let's practice with these examples.

```js
let initialArray = [[00, 11], [22, 33], [44, 55]];

// expected result (6) [00, 11, 22, 33, 44, 55]
```

### There are several possible solutions

#### Array.prototype.flat() method

```js
// It is pretty straight forward and simple.
// Note: this solution might not be useful if there are deeply nested elements.

let flattenedArr = initialArray.flat();

// result (6) [00, 11, 22, 33, 44, 55]
```

##### Array.prototype.forEach() method

```js
// create an empty array and call forEach on the initial array
// then concatenate each element into the new array.

let flattenedArr = [];
initialArray.forEach(entry => {
  flattenedArr = flattenedArr.concat(entry);
})

// result (6) [00, 11, 22, 33, 44, 55]
```

##### Array.prototype.reduce() method

```js
// create a reducer constant with 2 parameters: accumulator and currentValue.
// We then concatenate current value to the accumulator.
// Then store the value from using reduce method.

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
let flattenedArr = initialArray.reduce(reducer);

// result (6) [00, 11, 22, 33, 44, 55]
```

##### Array.prototype.concat() method & Function.prototype.apply()

```js
// create a new array and concat each element onto it.

let flattenedArr = Array.prototype.concat.apply([], initialArray)

// result (6) [00, 11, 22, 33, 44, 55]
```

##### Original for loop

```js
let flattenedArr = [];

for (let i = 0; i < initialArray.length; i++) {
  let current = initialArray[i];
  for (let m = 0; m < initialArray.length - 1; m++) {
    flattenedArr.push(current[m]);
  }
}

// result (6) [00, 11, 22, 33, 44, 55]
```

Ok, I know. There are so many ways to achieve the result we want. However, if your project gets larger and more complicated, you might want to consider its performance or how fast certain operations can be.

### JS Performance Testing in the Browser

#### console.time() & console.timeEnd()

```js
console.time("for loop method");
let flattenedArr = [];

for (let i = 0; i < initialArray.length; i++) {
  let current = initialArray[i];
  for (let m = 0; m < initialArray.length - 1; m++) {
    flattenedArr.push(current[m]);
  }
}
console.timeEnd("for loop method");

// result for loop method: 0.008056640625ms
```

#### You can try a performance testing from these sites

- [***https://jsbench.me/***](https://jsbench.me/)
- [***https://jsperf.com/***](https://jsperf.com/)
