function multiplyDivide(arr) {
    if (arr.length === 0) return 0
    var hasil = arr[0]
    for (var i=1; i<arr.length; i++) {
        if (i%2 === 0) {
            hasil /= arr[i]
        } else {
            hasil *= arr[i]
        }
    }
    return Math.round(hasil)
}

// TEST CASES
console.log(multiplyDivide([1, 2, 3, 4, 5])); // 1
console.log(multiplyDivide([5, 4, 3, 2, 1])); // 13
console.log(multiplyDivide([1, 1, 1, 3])); // 3
console.log(multiplyDivide([0, 10, 2, 5, 7])); // 0
console.log(multiplyDivide([])); // 0