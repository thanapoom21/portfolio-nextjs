// Detail explaination of selection sort algorithm.
// create a method named swap. Basically, it takes 3 arguments.
// the first one is the array and the rest is used to specify position in the array and swap with each other.
// create a for loop starting from the array lengrh and decrement the index.
// create an inner for loop starting from the first element in the array.
// compare it with the adjacent item, if it is greater, swap them in-place.
// increment the index until the loop finishes.
// the largest item will be placed at the end of the array.
// it bubbles up to the right.
// return the sorted array.

// since there is a nested loop. The algorithm has to run through every item in the array.
// Time complexity of bubble sort is O(n^2) in the worst case scenario.
// imagine you have an array of exactly opposite of the sorted order.
// however, you can also get a linear run time only if the array is already sorted in ascending order.

// Space complexity of bubble sort is O(1) or constant time. The elements are sorted in-place.

const listOfNumbers = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

const bubble = arr => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
};

const bubbleSimple = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const bubbleSimpleOptimized = arr => {
  let checked;

  do {
    checked = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        checked = true;
      }
    }
  } while (checked);

  return arr;
};

console.log(bubble(listOfNumbers));
console.log(bubbleSimple(listOfNumbers));
console.log(bubbleSimpleOptimized(listOfNumbers));
