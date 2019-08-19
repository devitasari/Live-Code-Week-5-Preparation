function arrSlice(arr, min, max) {
    var arr1 = []
    for (var i=min; i<max; i++) {
        arr1.push(arr[i])
    }
    return arr1
}

console.log(arrSlice([7, 4, 3, 2, 1, 2, 1], 4, 7)) // [ 1, 2, 1 ]
console.log(arrSlice([1, 4, 0, 4, 5], 1, 3)) // [ 4, 0 ]
console.log(arrSlice([1, 2, 3, 4, 5], 0, 1)) // [ 1 ]
console.log(arrSlice([5, 4, 3, 2, 1], 0, 2)) // [ 5, 4 ]
console.log(arrSlice([1, 2, 3, 4, 5], 2, 4)) // [ 3, 4]