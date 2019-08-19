/*
================
A in the Middle
================

Nama:Septian Maulana

[INSTRUKSI]
function aInTheMiddle adalah sebuah function yang menerima satu parameter yaitu sebuah array yang menampung string.
Function akan mengumpulkan semua string dalam array tersebut yang memiliki karakter di tengah yaitu 'a'. Abaikan kecil besar dari karakter.
Jika string genap, dua huruf di tengah harus 'a'.
Kumpulan string yang memiliki 'a' ditengah akan ditampung dalam array dan di kembalikan oleh function tersebut.

[CONTOH]

input: ['asafw', 'test', 'waw']
output: ['asafw', 'waw']

input: ['baon', 'test', 'taqs']
output: []

input: ['graail', 'nAn', 'naAn']
output: ['graail', 'nAn', 'naAn']

input: ['asafw', 'wow', 'o', 'graail', 'nAn']
output: ['asafw', graail', 'nAn']
*/

function aInTheMiddle(str){
    var output = []
    for (var i=0; i<str.length; i++) {
        if (str[i].length % 2 === 0) {
            if ((str[i][str[i].length/2] === 'a'|| str[i][str[i].length/2] === 'A') && (str[i][str[i].length/2-1] === 'a'|| str[i][str[i].length/2-1] === 'A')) {
                output.push(str[i])
            }
        } else {
            if (str[i][Math.floor(str[i].length/2)] === 'a'|| str[i][Math.floor(str[i].length/2)] === 'A') {
                output.push(str[i])
            }
        }
    }
    return output
}

console.log(aInTheMiddle(['asafw', 'test', 'waw'])); // ['asafw', 'waw']
console.log(aInTheMiddle(['baon', 'test', 'taqs'])); // []
console.log(aInTheMiddle(['graail', 'nAn', 'naAn'])); // ['graail', 'nAn', 'naAn']
console.log(aInTheMiddle(['asafw', 'wow', 'o', 'graail', 'nAn'])); // ['asafw', graail', 'nAn']
console.log(aInTheMiddle([])); // []