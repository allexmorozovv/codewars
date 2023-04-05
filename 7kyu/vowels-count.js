// DESCRIPTION:
//     Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// my solution

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let counter = 0
    for(const letter of str){
        if(vowels.includes(letter)) {
            counter ++
        }
    }
    return counter
}

console.log(getCount('hello world'));
console.log(getCount('hy'));
console.log(getCount(''));
console.log(getCount('f'));