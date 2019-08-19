function arrayRemover(arr, index, count) {
    var arr1 = []
    for (var i=0; i<arr.length; i++) {
        if (i>= index && i< index+count) {
            arr1.push('deleted')
        } else {
            arr1.push(arr[i])
        }
    }
    return arr1
}


console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // ['deleted', 'deleted', 3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 'deleted', 'deleted', 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // ['deleted', 'deleted', 'deleted']

