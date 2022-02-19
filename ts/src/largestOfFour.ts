// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with
// a simple for loop, and access each member with array syntax arr[i].
//
//     Example
//
// largestOfFour([
// [4, 5, 1, 3],
// [13, 27, 18, 26],
// [32, 35, 37, 39],
// [1000, 1001, 857, 1]])
// returns [5, 27, 39, 1001];

// largestOfFour([
// [4, 9, 1, 3],
// [13, 35, 18, 26],
// [32, 35, 97, 39],
// [1000000, 1001, 857, 1]])
// returns [9, 35, 97, 1000000];
//
// Hints
// push()

export function largestOfFour(nums: number[][]): number[] {
    let result: number[] = [];
    for (let subArray of nums) {
        result.push(Math.max(...subArray));
    }
    return result;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
