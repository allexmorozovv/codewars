// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!


function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) {
        return 0;
    }
    arrayOfArrays.sort((a, b) => a.length - b.length);

    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length !== i + 1) {
            return i + 1
        }
    }
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))