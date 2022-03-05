// Given an integer n, find the minimal k such that
//
// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
//
// In other words, find the smallest factorial which is not less than n.
//
// Example
//
// For n = 17, the output should be
// solution(n) = 24.
//
// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ n ≤ 120.
//
//     [output] integer

export function leastFactorial(n: number): number {
    let result = 1;
    let i = 2;
    while (result < n) {
        result *= i++;
    }
    return result;


    // for (let i = 1; (result *= i++) < n;) ;
    // return result;
}

//console.log(leastFactorial(17))
