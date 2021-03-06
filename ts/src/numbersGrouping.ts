// You are given an array of integers that you
// want distribute between several groups.
// The first group should contain numbers from 1 to 10*4,
// the second should contain those from 104 + 1 to 2 * 104, ...,
// the 100th one should contain numbers from 99 * 10^4 + 1 to 10^6 and so on.
//
// All the numbers will then be written down in groups to the text
// file in such a way that:
//
// the groups go one after another;
// each non-empty group has a header which occupies one line;
// each number in a group occupies one line.
// Calculate how many lines the resulting text file will have.
//
// Example
//
// For a = [20000, 239, 10001, 999999, 10000, 20566, 29999], the output should be
// solution(a) = 11.
//
// The numbers can be divided into 4 groups:
//
// 239 and 10000 go to the 1st group (1 ... 104);
// 10001 and 20000 go to the second 2nd (104 + 1 ... 2 * 104);
// 20566 and 29999 go to the 3rd group (2 * 104 + 1 ... 3 * 104);
// groups from 4 to 99 are empty;
// 999999 goes to the 100th group (99 * 104 + 1 ... 106).
// Thus, there will be 4 groups (i.e. four headers) and 7 numbers, so the file will occupy 4 + 7 = 11 lines.

export function numbersGrouping(a: number[]): number {
    // const groups = new Set();
    // for (let i = 0; i < a.length; i++) {
    //     const g = (a[i] - 1) / 10000 | 0;
    //     groups.add(g)
    // }
    // return a.length + groups.size;

    return new Set(a.map(x => (x - 1) / 10000 | 0)).size + a.length;
}

//console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]))


