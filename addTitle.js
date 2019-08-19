function addTitle(arr) {
    if (arr.length === 0) return 'No data'
    var result = []
    for (var i=0; i<arr.length; i++) {
        // for (var j=0; j<arr[i].length; j++) {
        if (arr[i][1] === 'male') {
            result.push('Mr. ' + arr[i][0])
        } else if (arr[i][1] === 'female' && arr[i][2]) {
            result.push('Mrs. ' + arr[i][0])
        } else if (arr[i][1] === 'female' && !arr[i][2]) {
            result.push('Ms. ' + arr[i][0])
        }
        // }
    }
    return result.join(', ')
}

console.log(addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]])); // Mr. Sergei, Ms. Alyona

console.log(addTitle([['Dimitri', 'male', false], ['Anastasia', 'female', false], ['Vladlena', 'female', true]])); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data