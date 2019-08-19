function groupOddEven(arr) {
    var arrOdd = []
    var arrEven = []
    for (var i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrEven.push(' ' + arr[i])
        } else {
            arrOdd.push(' ' + arr[i])
        }
    }
    if (arrOdd.length === 0 && arrEven.length === 0) return ''
    else if (arrOdd.length === 0) return 'EVENS: ' + arrEven
    else if (arrEven.length === 0) return 'ODDS: ' + arrOdd 
    else return 'ODDS:' + arrOdd + ' EVENS:' + arrEven
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""