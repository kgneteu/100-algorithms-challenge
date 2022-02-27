// Given a rectangular matrix containing only digits,
// calculate the number of different 2 × 2 squares in it.
//
//     Example
//
// For
//
// matrix = [
//     [1, 2, 1],
//     [2, 2, 2],
//     [2, 2, 2],
//     [1, 2, 3],
//     [2, 2, 1]]
// the output should be
// solution(matrix) = 6.
//
// Here are all 6 different 2 × 2 squares:
//
// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.array.integer matrix
//
// Guaranteed constraints:
//     1 ≤ matrix.length ≤ 100,
//     1 ≤ matrix[i].length ≤ 100,
//     0 ≤ matrix[i][j] ≤ 9.
//
//     [output] integer
//
// The number of different 2 × 2 squares in matrix.

export function differentSquares(matrix: number[][]): number {
    let total = new Set();
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            let square = "" + matrix[i][j] + matrix[i + 1][j] + matrix[i + 1][j + 1] + matrix[i][j + 1];
            total.add(square);
        }
    }
    return total.size;
}

//todo alt
//var hash = matrix[i][j] + 10*matrix[i][j+1] + 100*matrix[i+1][j] + 1000*matrix[i+1][j+1];
//     total.add( hash );

console.log(differentSquares([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]]))
