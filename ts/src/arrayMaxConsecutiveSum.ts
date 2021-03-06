// Given array of integers, find the maximal possible sum of some of its
// k consecutive elements.
//
//     Example
//
// For inputArray = [2, 3, 5, 1, 6] and k = 2,
// the output should be arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
//
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8
//
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//     [input] array.integer inputArray Array of positive integers.
//     Guaranteed constraints:
//
//     3 ≤ inputArray.length ≤ 105,
//
//     1 ≤ inputArray[i] ≤ 1000.
//
//     [input] integer k
// An integer (not greater than the length of inputArray).
//
// Guaranteed constraints: 1 ≤ k ≤ inputArray.length.
//
//     [output] integer
// The maximal possible sum.


export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }
    let max = sum;
    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k];
        sum += inputArray[i];
        if (sum > max) max = sum;
    }
    return max;

    //Alt:
    // let result = 0;
    // for (let i = 0; i < inputArray.length - k; i++) {
    //     const s = inputArray.slice(i, i + k).reduce((acc, v) => acc + v)
    //     if (result < s) {
    //         result = s;
    //     }
    // }
    // return result;
}
//todo
//
// function solution(inputArray, k) {
//     s = m = inputArray.slice(0,k).reduce((x,y) => x+y)
//     for (i = k; i < inputArray.length; i++) {
//         s += inputArray[i] - inputArray[i-k]
//         if (s > m) {m = s}}
//     return m}
