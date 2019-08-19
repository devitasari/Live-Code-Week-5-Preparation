
function substractEvenOdd(arr) {
    var arr1 = []
    var genap = []
    var ganjil = []
    for (var i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            genap.push(arr[i])
        } else {
            ganjil.push(arr[i])
        }
    }
    var hasilGenap = genap[0]
    var hasilGanjil = ganjil[0]
    for (var j=1; j<genap.length; j++) {
        hasilGenap -= genap[j]
    }
    if (!hasilGenap) hasilGenap = 0
    arr1.push([hasilGenap])
    for (var k=1; k<ganjil.length; k++) {
        hasilGanjil -= ganjil[k]
    }
    if (!hasilGanjil) hasilGanjil = 0
    arr1.push([hasilGanjil])
    return arr1
}


console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

console.log(substractEvenOdd([])); // [ [0], [0] ]