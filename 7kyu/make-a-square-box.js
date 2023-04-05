// DESCRIPTION:
//     Easy; Make a box
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
//     Like this:
//
// n = 5
//
//     [
//     '-----',
//     '-   -',
//     '-   -',
//     '-   -',
//     '-----'
//     ]
// n = 3
//
//     [
//     '---',
//     '- -',
//     '---'
//     ]

// ? my solution

function box(num) {
    const arr = []
    arr.push('-'.repeat(num))
    for (let i = 0; i < num - 2; i++) {
        arr.push('-' + ' '.repeat(num - 2) + '-')
    }
    arr.push('-'.repeat(num))
    return arr

}

console.log(box(5))