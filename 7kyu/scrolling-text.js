//
// DESCRIPTION:
//     Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
//     Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//     "ODEWARSC",
//     "DEWARSCO",
//     "EWARSCOD",
//     "WARSCODE",
//     "ARSCODEW"
//     "RSCODEWA",
//     "SCODEWAR" ]
// Good luck!

// my solution
function scrollingText(text){
    return text.split('').map((el, i) => (text.slice(i) + text.slice(0, i)).toUpperCase())
}

console.log(scrollingText('codewars'))