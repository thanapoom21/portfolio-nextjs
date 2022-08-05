---
title: 'Objects'
excerpt: 'Objects are used to store keyed collections of different types of data which get more & more complex overtime.'
coverImage: '/assets/blog/objects/cover.png'
date: '2021-10-16T11:45:01.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/objects/cover.png'
---

## Objects in JavaScript

[**Objects**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) is one of JavaScript's data types and used to store key & value pairs and more complex values. There are a couple of ways to create Objects. One of them is using the object literal syntax. We can put some properties in to the {...} as "key: value" pairs.

```js
// Object literal syntax
let myCar = {
  make: "Honda",
  model: "Civic",
  yearReleased: 2014,
  hasSunroof: false,
}
```

Another possible way to create an object is by object constructor with the new keyword.

```js
// Object constructor syntax
let myCar = new Object()
myCar.make = "Honda"
myCar.model = "Civic"
myCar.yearReleased = 2014
myCar.hasSunroof = false
```

To remove a property, we can use delete operator.

```js
delete myCar.model;
```

If you want to use multiple words in key to name a property, they have to be wrapped in quotes.

```js
let myCar = {
  make: "Honda",
  model: "Civic",
  "year released": 2014,
  hasSunroof: false,
}
```

In order to access the property with multiple words, dot notation would not work. However, square bracket notation has come to the rescue.

```js
myCar.year released
// Uncaught SyntaxError: Unexpected identifier

myCar["year released"]
// output --> 2014
```

### Computed properties

What if you want to wait for a user input to be assigned as key. You can use square bracket for computed properties.

```js
let car = prompt("What is your favorite car?")

let garage = {
  [car] : "Awesome",
};

alert(garage.Tesla)
```
