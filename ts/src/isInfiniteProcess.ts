// Given integers a and b, determine whether the following
// pseudocode results in an infinite loop
//
// while a is not equal to b do
//     increase a by 1
//     decrease b by 1
// Assume that the program is executed on a virtual machine which
// can store arbitrary long numbers and execute forever.
//
//     Example
//
// For a = 2 and b = 6, the output should be
// solution(a, b) = false;
// For a = 2 and b = 3, the output should be
// solution(a, b) = true.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer a
//
// Guaranteed constraints:
//     0 ≤ a ≤ 20.
//
//     [input] integer b
//
// Guaranteed constraints:
//     0 ≤ b ≤ 20.
//
//     [output] boolean
//
// true if the pseudocode will never stop, false otherwise.

export function isInfiniteProcess(a: number, b: number): boolean {
    return b < a || (b-a) % 2 !==0;
}

console.log(isInfiniteProcess(2, 6))
console.log(isInfiniteProcess(4, 3))
