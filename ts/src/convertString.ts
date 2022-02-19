// You are given the string s.
// Your friend just asked you if it's possible to change
// the string from s to a string t by removing some characters from it.
// You're a pro at programming, so you decided to create a program to determine this.
//
//     Example
//
// For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.
//
// For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.
//
//     Hints
//
// concat()
// split()
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string s A string with alphanumeric characters.
//
//     Guaranteed constraints:
//
//     1 ≤ s.length ≤ 1000.
//
//     [input] string t
//
// A string with alphanumeric characters.
//
//     Guaranteed constraints: 1 ≤ t.length ≤ 1000.
//
//     [output] boolean Return true if it is possible to convert s to t,
//     otherwise return false.

export function convertString(s: string, t: string): boolean {
    let word = "";
    let index = 0;
    for (let c of s) {
        if (c == t[index]) {
            word = word.concat(c)
            if (word === t) return true;
            index++;
        }
    }
    return false;
    //alt:
    // let index = 0;
    // for (let c of t) {
    //     let found = false
    //     for (let k = index; k < s.length; k++) {
    //         index++;
    //         if (c == s[k]) {
    //             found = true;
    //             break;
    //         }
    //     }
    //     if (!found) return false;
    // }
    // return true;
}

