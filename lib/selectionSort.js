// Computing summations from 1 to n
// Add the largest and smallest values and then the next largest and smallest values and so on.
// For example, 6 + 5 + 4 + 3 + 2 + 1. We do 6 + 1 = 7, 5 + 2 = 7, 4 + 3 = 7. So 7 + 7 + 7 = 21.
// 1. Add the smallest and the largest number.
// 2. Multiply by the number of pairs.
// If the number of integers in the sequence is odd, you can multiply by a half.
// For example, 5 + 4 + 3 + 2 + 1. We do 5 + 1 = 6, 4 + 2 = 6, 3 is a half of 6 so 6 + 6 + 3 or 6 * 2.5 = 15
// You can use a formula (n + 1)(n / 2) or (n squared / 2) + (n / 2) to find the sum of 1 to n.

// Detail explaination of selection sort algorithm.
// duplicate the original list in a local scope since we do not want to mutate it.
// store the array length in a variable.
// create a for loop starting from 0 to the end of the list.
// define a variable for storing an index of the smallest value.
// create an inner loop for comparing the smallest value with subarray or the next item in the list.
// check if the value at current min index is greater than the value at the current index in the subarray.
// replace or set the current min index with the smallest index in subarray and keep searching.
// when done looping subarray, check if the current min index is still the same index. If not, swapping them.
// temporarily, define a variable and store the current i value in the list.
// put min value in the current i in the list. Then, put the temp variable in the previous min position.
// when the loop is complete, return the modified & selection-sorted list.

// How effecient is selection sort algorithm?
// With large data sets, selection sort is not very efficient compared to quick sort, heap sort, or merge sort.
// While other complex algorithms can take up space in memory, selection sort does a better job in terms of maintaining a space advantage
// Since it sorts items in-place and does not require additional memory.

const listOfNumbers = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

/**
 *
 * @param {number[]} originalList A list of numbers.
 * @returns {number[]} Sorted array of numbers by selection sort.
 */

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

console.log(selectionSort(listOfNumbers));
