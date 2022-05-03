// Problem Source: https://www.hackerrank.com/challenges/quicksort1/problem?isFullScreen=true

function quickSort(arr) {
  const leftSide = [];
  const rightSide = [];
  const equal = [];
  arr.forEach((num) => {
    // check if num is bigger than pivot
    if (arr[0] > num) {
      rightSide.push(num);
    }

    if (arr[0] < num) {
      leftSide.push(num);
    }

    if (arr[0] === num) {
      equal.push(num);
    }
  });

  return rightSide.concat(equal).concat(leftSide);
}
