---
title: 'Selection Sort'
excerpt: 'An algorithm that selects the smallest value or element from an unsorted list in each iteration and moves it to the beginning of an unsorted list.'
coverImage: '/assets/blog/selection-sort-algorithm/cover.png'
date: '2022-05-29T14:54:01.322Z'
author:
  name: T. Phithakjarukorn
  picture: '/assets/blog/authors/mu.jpeg'
ogImage:
  url: '/assets/blog/selection-sort-algorithm/cover.png'
---

## Selection Sort
It is a sorting algorithm that, according to its name, selects the smallest value or element from an <mark>unsorted</mark> list in each iteration and moves it to the beginning of an unsorted list. Then you'll start to see the pattern because the given values are now divided into 2 sets; <mark>sorted</mark> group and <mark>unsorted</mark> group. Finally, every item will be sorted.

### Steps of instructions

- duplicate the original list in a local scope since we do not want to mutate it.
- store the array length in a variable.
- create a for loop starting from 0 to the end of the list.
- define a variable for storing an index of the smallest value.
- create an inner loop for comparing the smallest value with subarray or the next item in the list.
- check if the value at current min index is greater than the value at the current index in the subarray.
- replace or set the current min index with the smallest index in subarray and keep searching.
- when done looping subarray, check if the current min index is still the same index. If not, swapping them.
- temporarily, define a variable and store the current i value in the list.
- put min value in the current i in the list. Then, put the temp variable in the previous min position.
- when the loop is complete, return the modified & selection-sorted list.

```js
let randomNumbers = [2, 5, 123, 987, 8, 1, 25, 70, 0]

const selectionSort = originalList => {
  const list = [...originalList];
  // const list = originalList.slice();
  const length = list.length;

  for (let i = 0; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = list[i];
      list[i] = list[min];
      list[min] = temp;

      /** This is another way of swapping by using array destructuring method. */
      // [list[i], list[min]] = [list[min], list[i]];
    }
  }

  return list;
};

selectionSort(randomNumbers);

```

The time complexity of this algorithm is ***`O(n^2)`***.

### Tips: computing summations from 1 to n

Add the largest and smallest values and then the next largest and smallest values and so on.

For example, 6 + 5 + 4 + 3 + 2 + 1. We do 6 + 1 = 7, 5 + 2 = 7, 4 + 3 = 7. So 7 + 7 + 7 = 21.

1. Add the smallest and the largest number.
2. Multiply by the number of pairs.

If the number of integers in the sequence is odd, you can multiply by a half.  
For example, 5 + 4 + 3 + 2 + 1. We do 5 + 1 = 6, 4 + 2 = 6, 3 is a half of 6 so 6 + 6 + 3 or 6 * 2.5 = 15.  
You can use a formula (n + 1)(n / 2) or (n squared / 2) + (n / 2) to find the sum of 1 to n.
