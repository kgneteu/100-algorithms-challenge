// Given an array a that contains only numbers in the range
// from 1 to a.length, find the first duplicate number
// for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers,
// return the number for which the second occurrence has a smaller index
// than the second occurrence of the other number does.
// If there are no such elements, return -1.
//
// Example
//
// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3.
// The second occurrence of 3 has a smaller index than the second
// occurrence of 2 does, so the answer is 3.
//
// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
// Hints
//
// hasOwnProperty()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
// [input] array.integer a
//
//
// Guaranteed constraints:
//
// 1 ≤ a.length ≤ 105, 1 ≤ a[i] ≤ a.length.
//
// [output] integer The element in a that occurs in the array more than once and has the minimal index for
// its second occurrence. If there are no such elements, return -1.

export function firstDuplicate(a: number[]): number {
    const numbers: { [index: number]: number } = {};
    for (const n of a) {
        if (numbers.hasOwnProperty(n)) {
            return n;
        } else {
            numbers[n] = n;
        }
    }
    return -1;

    // too slow
    // let duplicate = -1;
    // let minIndex = a.length;
    //
    // for (let i = 0; i < a.length - 1; i++) {
    //     const index = a.indexOf(a[i], i + 1);
    //     if (index !== -1) {
    //         if (index < minIndex) {
    //             minIndex = index;
    //             duplicate = a[i];
    //         }
    //     }
    // }
    // return duplicate;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
//console.log(firstDuplicate([1, 1, 2, 2, 1]))


console.log(15 / -4 )
