// DESCRIPTION:
//     Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

// my solution

function findShort(s) {
    const lengths = s.split(" ").map(word => word.length).sort((a, b) => a - b)
    return lengths[0]
}

console.log(findShort(`It's a nice day today`))