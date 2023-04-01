// DESCRIPTION:
//     Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-')
//     between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
//     Don't count zero as an odd digit.
//
//     Note that the number will always be non-negative (>= 0).

// my solution

function insertDash(num) {
    const arrOfNum = num.toString().split('')
    let numWithDashes = ''
    for (let i = 0; i < arrOfNum.length; i++) {
        numWithDashes += arrOfNum[i]
        if (arrOfNum[i] % 2 && arrOfNum[i + 1] % 2 === 1) {
            numWithDashes += '-'
        }
    }
    return numWithDashes
}

console.log(insertDash(454793))
console.log(insertDash(112211))
console.log(insertDash(223344))
