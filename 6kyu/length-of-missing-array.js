// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!


function getLengthOfMissingArray(arrayOfArrays) {
    const result = (arrayOfArrays || []).map(el => el ? el.length : 0).sort((a, b) => a - b)

    if (result.includes(0)) {
        return 0
    }

    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] + 1 !== result[i + 1]) {
            return result[i] + 1
        }
    }
    return 0
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))