// You have two integer arrays, a and b, and an integer target value v.
// Determine whether there is a pair of numbers, where one number is taken from
// a and the other from b, that can be added together to get a sum of v.
// Return true if such a pair exists, otherwise return false.
//
// Example For a = [1, 2, 3],  b = [10, 20, 30, 40], and v = 42,
// the output should be sumOfTwo(a, b, v) = true.
//
//     Hints
//
// hasOwnProperty()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//     [input] array.integer a
// An array of integers.
//
//     Guaranteed constraints:
//
//     0 ≤ a.length ≤ 105, -109 ≤ a[i] ≤ 109.
//
//     [input] array.integer b
// An array of integers.
//
//     Guaranteed constraints:
//
//     0 ≤ b.length ≤ 105, -109 ≤ b[i] ≤ 109.
//
//     [input] integer v*
// Guaranteed constraints:
//
//     -109 ≤ v ≤ 109.
//
//     [output] boolean
// true if there are two elements from a and b which add up to v, and false otherwise.

export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    //too slow
    // for (const n1 of a) {
    //     for (const n2 of b) {
    //         if (n1 + n2 === v) return true;
    //     }
    // }
    // return false;
    
    const a1 = new Set(a);
    const b1 = new Set(b);
    for (const n1 of a1) {
        if (b1.has(v - n1)) {
            return true;
        }

    }
    return false;
}

// console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
