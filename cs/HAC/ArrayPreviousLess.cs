// Given array of integers, for each position i, search among the
// previous positions for the last (from the left) position that contains
// a smaller value. Store this value at position i in the answer.
// If no such value can be found, store -1 instead.
//
//     Example
//
// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].
//
//     Hints
//
// unshift()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer items
//
// Non-empty array of positive integers.
//
//     Guaranteed constraints:
//
//     3 ≤ items.Length ≤ 15,
//
//     1 ≤ items[i] ≤ 200.
//
//     [output] array.integer
//
// Array containing answer values computed as described above.
//

using System;
using System.Collections.Generic;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static int[] ArrayPreviousLess(int[] items)
        {
            var result = new Stack<int>();
            for (var i = items.Length - 1; i > 0; i--)
            {
                for (var k = i - 1; k >= 0; k--)
                {
                    if (items[k] < items[i])
                    {
                        result.Push(items[k]);
                        break;
                    }
                    else if (k == 0)
                    {
                        result.Push(-1);
                    }
                }
            }

            result.Push(-1);
            return result.ToArray();

            // ver. without unshift
            // const result = [-1]
            // for (var i = 1; i < items.Length; i++) {
            //     var v = -1;
            //     for (var k = i - 1; k >= 0; k--) {
            //        if (items[k]<items[i]){
            //            v = items[k];
            //            break;
            //        }
            //     }
            //     result.push(v)
            // }
        }
    }
}
