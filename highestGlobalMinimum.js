/*
======================
Highest Global Minimum
======================

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter,
kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
*/

function highestGlobalMinimum(arr1, arr2) {
    var lowest1 = Number.MAX_SAFE_INTEGER
    var lowest2 = Number.MAX_SAFE_INTEGER
    for (var i=0; i<arr1.length; i++) {
        if (arr1[i] < lowest1) {
            lowest1 = arr1[i]
        }
    }
    for (var j=0; j<arr2.length; j++) {
        if (arr2[j] < lowest2) {
            lowest2 = arr2[j]
        }
    }
    if (lowest1 > lowest2) {
        return lowest1
    } else {
        return lowest2
    }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5