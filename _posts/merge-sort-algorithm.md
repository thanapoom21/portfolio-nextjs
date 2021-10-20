---
title: 'Merge Sort in JavaScript'
excerpt: 'Similar to binary search, merge sort is a divide and conquer algorithm. The goal is to break down a complicated problem into sub-problems and recursively continue to divide them until we have plenty of simple problems that we can easily solve.'
coverImage: '/assets/blog/merge-sort-algorithm/cover.png'
date: '2021-10-16T11:45:01.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/merge-sort-algorithm/cover.png'
---

Given a random array of numbers, we first have to divide into 2 chunks. We can use **`left`** and **`right`** to identify 2 chunks of numbers.

Merge sort is very useful in solving these problems by applying a divide and conquer concept.

First, we'll come up with some random numbers in an array. Then we define a funcion expression stored in mergeSortAlgorithm constant and takes in an array as its argument.

Then we define 2 more functions inside with a return statement in the end calling mergeSort function. What it does is it first checks if the length of the given array is less than or equal to 1, if so, return it without change.

If not, proceed to the next step. We will find the middle index by using a built-in **`Math`** object and its method **`.floor()`** using the legth of the array divided by 2.

Recursively, call mergeSort() with the sliced array and store it in **`left`** and **`right`** variables. Return the call to merge function and **`left`** and **`right`** as its arguments.

What does merge(left, right) do?

It creates an empty array called `sortedAndMerged`, performs a while loop according to the length of **`left`** && **`right`** parameters, checks if the value of the first index of **`left`** is less than the value of the first index of **`right`**. If true, shift the first item in **`left`** and push it in the sortedAndMerged array. Otherwise, shift the first item in **`right`** instead.

We can use ***`if else`*** to check values like the following:

```js
if (left[0] < right[0]) {
  sortedAndMerged.push(left.shift());
} else {
  sortedAndMerged.push(right.shift());
}
```

We can also use ternary operator to check values like the following:

```js
sortedAndMerged.push(left[0] > right[0] ? right.shift() : left.shift())
```

Finally, return the sortedAndMerged array that is concantenated.

```js
let randomNumbers = [2, 5, 123, 987, 8, 1, 25, 70, 0]

const mergeSortAlgorithm = (array) => {
  function merge(left, right) {
    let sortedAndMerged = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedAndMerged.push(left.shift());
      } else {
        sortedAndMerged.push(right.shift());
      }
    }

    return sortedAndMerged.concat(left.slice().concat(right.slice()));
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middleIndex));
    let right = mergeSort(array.slice(middleIndex));
    return merge(left, right);
  }

  return mergeSort(array);
};

mergeSortAlgorithm(randomNumbers);

```

The complexity of this algorithm is ***`O(nlog(n))`***. It is extremely efficient.
