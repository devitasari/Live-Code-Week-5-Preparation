function secondLargest(arr) {
    var firstLargest = -Infinity
    var secondLargest = -Infinity
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > firstLargest) firstLargest = arr[i]
    }
    for (var j=0; j<arr.length; j++){
        if (arr[j] > secondLargest && arr[j] !== firstLargest ) secondLargest = arr[j]
    }
    return secondLargest
}


console.log(secondLargest([5, 2, 5, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313