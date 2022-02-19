<?php
// You are given an array of integers representing coordinates
// of obstacles situated on a straight line.
//
//     Assume that you are jumping from the point with coordinate 0 to the right.
//     You are allowed only to make jumps of the same length represented by some integer.
//
//     Find the minimal length of the jump enough to avoid all the obstacles.
//
//     Example
//
// For $inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles($inputArray) = 4.
//
// Hints
//
// sort()
// every()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer $inputArray
// Non-empty array of positive integers.
//
//     Guaranteed constraints:
//
//     2 ≤ $inputArray.length ≤ 10,
//
//     1 ≤ $inputArray[$i] ≤ 40.
//
//     [output] integer
// The desired length.
//

function avoid_obstacles($inputArray)
{
    $max = max($inputArray);
    $minLength = $max + 1;
    for ($i = 2; $i < $max - 1; $i++) {
        foreach ($inputArray as $v) {
            if ($v % $i == 0) continue 2;
        }
        return $i;
    }
    return $minLength;
}
