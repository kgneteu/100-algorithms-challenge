<?php
// Given an array of integers,
// find the maximal absolute difference between any two of its adjacent elements.
//
//     Example
//
// For $inputArray = [2, 4, 1, 0],
// the output should be arrayMaximalAdjacentDifference($inputArray) = 3.
//
// For $inputArray = [2, 9, 1, 0],
// the output should be arrayMaximalAdjacentDifference($inputArray) = 8.
//
// Hints
//
// Math.abs()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer $inputArray
// Guaranteed constraints:
//
//     3 ≤ $inputArray.length ≤ 10,
//
//     -15 ≤ $inputArray[$i] ≤ 15.
//
//     [output] integer
// The maximal absolute difference.
//

 function array_maximal_adjacent_difference($inputArray) {
    $maxDiff = abs($inputArray[1] - $inputArray[0]);
    for ($i = 2; $i < count($inputArray); $i++) {
        $diff = abs($inputArray[$i] - $inputArray[$i - 1]);
        if ($diff > $maxDiff) $maxDiff = $diff;
    }
    return $maxDiff;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
