function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];
  const left = [];
  const right = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    // every number smaller than the pivot is to the left
    if (val <= pivot) left.push(val);
    // every number larger (or equal) than the pivot is to the right
    else right.push(val);
  }

  // Recursively sort the left
  const leftSort = quicksort(left);
  // Recursively sort the right
  const rightSort = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [ ...leftSort, pivot, ...rightSort];
}

//    p
//   [2, 1, 3]
// lh        rh
// [1]       [3]
// [...1, 2, ...3]

//    p
//   [2, 1, 3, 5, 4]
//   lh            rh
//                 p
//   [1]          [3, 5, 4]
//               lh       rh
//                        p
//               []      [5, 4]
//                      lh    rh
//                      [4]    []
//                     [...4, 5, ...]
//                 [..., 3, ...4, 5]
//             
//             [...1, 2, ...3,4,5]



module.exports = [quicksort];
