function operasiMatriks(arr, arrb, oper) {
    var arr1 = []
    for (var i=0; i<arr.length; i++) {
        if (arr[i].length !== arrb[i].length) return 'kedua matrik tidak dapat dioperasikan'
        arr1.push([])
        for (var j=0; j<arr[i].length; j++) {
            if (oper === '+') {
                var hasil = arr[i][j] + arrb[i][j]
                arr1[i].push(hasil)
            }
        }
    }
    return arr1
}

console.log(operasiMatriks([
    [5, 4, 7],
    [3, 9, 3],
    [8, 3, 2]
],[
    [5, 4, 8],
    [1, 9, 3],
    [8, 2, 2]
],"+"));// [ [ 10, 8, 15 ], [ 4, 18, 6 ], [ 16, 5, 4 ] ]

console.log(operasiMatriks([
    [5, 4, 7],
    [3, 9, 3],
    [8, 3, 2]
],[
    [5, 4, 8],
    [1, 9, 3,5],
    [8, 2, 2]
],"+")); // kedua matriks tidak dapat diperasikan