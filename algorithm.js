/**
 * Summary:
 * 
 * Merge Sort is a divide-and-conquer sorting algorithm.
 * It works by dividing the unsorted array into smaller sub-arrays 
 * until each sub-array contains only one element (which is naturally sorted).
 * Then, it merges those sub-arrays back together in sorted order.
 * 
 * Recursion is used because we keep dividing the problem (the array) into smaller subproblems 
 * (smaller arrays) until we hit a simple, solvable case (arrays of length 1).
 * 
 * The merge() function takes two sorted arrays and merges them into a single sorted array.
 */

/* ----------    Test arrays ------------ */
const array1 = [-2, -4, 5, 3, 0, 1, -1, -3];
const array2 = [-2, 4, 6, 0, 2, -4, ];

function mergeSort(arr) {
    console.log("mergeSort called on:", arr);

    // Base Case: it stops when the array has only 1 or 0 element
    if (arr.length <= 1) {
        return arr;
    }

  

   
    const mid = Math.floor(arr.length / 2);   // 1. Split the array into two halves( sub array)

    const left = arr.slice(0, mid);      // First half of the array
    const right = arr.slice(mid);         // Second half of the array

/*
 ----At First Iteration

const array1 = [-2, -4, 5, 3, 0, 1, -1, -3]; the length of the array  is  8
mid: divides the it into 4 array [-2,-4,5,3]
left: takes from index 0 to 4 length
right: takes from md to the last length [0, 1, -1, -3]

FIRST ITERATION

arr.length = 8 → greater than 1, so we continue.
mid = Math.floor(8 / 2) = 4
Split into:
left = arr.slice(0, 4) = [ -2, -4, 5, 3 ]
right = arr.slice(4) = [ 0, 1, -1, -3 ]

Now we recursively call mergeSort(left) and mergeSort(right)

SECOND ITERATION([ -2, -4, 5, 3 ])
arr.length = 4
mid = Math.floor(4 / 2) = 2
Split into:
left = [ -2, -4 ]
right = [ 5, 3 ]
Recursive calls continue...

this process continues till it gets to a where the array has single elemnet  -2 -4

*/


    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];  // Final sorted array were it stores the values
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left array, add them
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in right array, add them
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Testing the mergeSort function
console.log("Sorted list 1:", mergeSort(array1));
console.log("Sorted list 2:", mergeSort(array2));
