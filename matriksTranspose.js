function matrixTranspose(arr) {
    var arr1 = []
    for (var i=0; i<arr[0].length; i++) {
        arr1.push([])
    }
    for (var j=0; j<arr.length; j++) {
        for (var k=0; k<arr[j].length; k++) {
            arr1[k].push(arr[j][k])
        }
    }
    return arr1
}


console.log(matrixTranspose([[1, 2], [3, 4], [5, 6], [7, 8]]))
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]
  output :
  [
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ]
*/

console.log(matrixTranspose([[1, 2], [3, 4]]));

/*
  input:
  [
    [1, 2],
    [3, 4]
  ]
  output :
  [
    [1, 3],
    [2, 4]
  ]
*/

console.log(matrixTranspose([[1, 2]]))
/*
  input:
  [
    [1, 2]  
  ]
  output :
  [
    [1],
    [2]
  ]
*/

console.log(matrixTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
/*
  input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
    output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
*/