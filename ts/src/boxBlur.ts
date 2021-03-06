// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
//
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
//
//     Return the blurred image as an integer, with the fractions rounded down.
//
//     Example
//
// For
//
// image = [
//     [1, 1, 1],
//     [1, 7, 1],
//     [1, 1, 1]]
// the output should be solution(image) = [[1]].
//
//     To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.
//
//     For
//
// image = [
//      [7, 4,  0, 1],
//      [5, 6,  2, 2],
//      [6, 10, 7, 8],
//      [1, 4,  2, 0]]
// the output should be
//
// solution(image) = [
//     [5, 4],
//     [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.array.integer image
//
// An image, stored as a rectangular matrix of non-negative integers.
//
//     Guaranteed constraints:
//     3 ≤ image.length ≤ 100,
//     3 ≤ image[0].length ≤ 100,
//     0 ≤ image[i][j] ≤ 255.
//
//     [output] array.array.integer
//
// A blurred image represented as integers, obtained through the process in the description.


export function boxBlur(image: number[][]): number[][] {
    const images: number[][] = []
    for (let i = 0; i < image.length - 2; i += 1) {
        const row: number[] = []
        for (let j = 0; j < image[0].length - 2; j++) {
            let sum = 0;
            for (let k = i; k < 3 + i; k++) {
                for (let m = j; m < 3 + j; m++) {
                    sum += image[k][m]
                }
            }
            row.push(Math.trunc(sum / 9))
        }
        images.push(row)
    }
    return images;
}

//todo  refactor
// solution = I => {
//     //Slice off the border
//     var B = I.slice(1,-1).map(e=>e.slice(1,-1))
//
//     //Replace every element with the average
//     // of its neighbors
//     return B.map((row,i) =>
//         row.map((elem,j) => {
//             var sum = 0
//             for(var x=0;x<3;++x)
//                 for(var y=0;y<3;++y)
//                     sum += I[i+x][j+y]
//             return sum/9|0
//         })
//     )
// }


console.log(boxBlur([[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));

console.log(boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]]
));
