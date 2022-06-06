// Detail explaination of bucket sort | radix sort algorithm.
// first we create 2 functions to get certain values.
// we need to get the largest item counted from number of digits by getMaxLength function and returns its length.
// then we need to find a way to sort each item in a separate bucket arranging from 0 - 9 starting from the right-most digit.
// when we finish sorting from the right-most position, we move on to the next left adjacent position.
// if it exists, we'll put them in its own bucket. When for loop is done iterating, we'll flatten them and store re-assign to sortedList variable.
// finally, the sortedList will be returned.

const listOfNumbers = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

/**
 *
 * @param {number} num a set of numbers to search for index.
 * @param {number} index a position to get the number.
 * @returns
 */

const getNum = (num, index) => {
  let strNum = String(num);
  let endIndex = strNum.length - 1;
  let foundNum = strNum[endIndex - index];

  if (foundNum === undefined) return 0;
  else return Number(foundNum);
};

/**
 *
 * @param {number[]} array a list of numbers.
 * @returns the largest/longest item.
 */

const getMaxLength = array => {
  let largest = "0";

  array.forEach(num => {
    let strNum = String(num);

    if (strNum.length > largest.length) largest = strNum;
  });
  return largest.length;
};

/**
 *
 * @param {number[]} originalList a list of single-digit numbers
 * @returns Sorted array of numbers by bucket sort or radix sort.
 */

const bucketSort = originalList => {
  let sortedList = originalList.slice();
  let maxLength = getMaxLength(sortedList);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < sortedList.length; j++) {
      let num = getNum(sortedList[j], i);

      if (num !== undefined) buckets[num].push(sortedList[j]);
    }

    sortedList = buckets.flat();
  }
  return sortedList;
};

console.log(bucketSort(listOfNumbers));
