// DESCRIPTION:
//     I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
//     +++
//     +++
//     +++

// my solution

function generateShape(integer) {
    // // return ('+'.repeat(integer) + '\n').repeat(integer).trim()
    // const line = '+'.repeat(integer)
    // let arr = []
    // for(let i = 0; i < integer; i++){
    //     arr.push(line)
    // }
    // return arr.join('\n')
    const line = '+'.repeat(integer)
    return Array(integer).fill(line).join('\n')
}


console.log(generateShape(5))