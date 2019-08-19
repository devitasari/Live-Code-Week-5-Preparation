/*
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/
function kali(num1,num2) {
    return num1*num2
}
function bagi(num1,num2) {
    return num1/num2
}
function tambah(num1,num2) {
    return num1+num2
}
function kurang(num1,num2) {
    return num1-num2
}
function calculate(arrIsiObj) {
    var output = []
    for (var i=0; i<arrIsiObj.length; i++) {
        var num1 = arrIsiObj[i].operand1
        var num2 = arrIsiObj[i].operand2
        if (arrIsiObj[i].operator === '*') var hasil = kali(num1,num2)
        if (arrIsiObj[i].operator === '/') var hasil = bagi(num1,num2)    
        if (arrIsiObj[i].operator === '+') var hasil = tambah(num1,num2)
        if (arrIsiObj[i].operator === '-') var hasil = kurang(num1,num2)
        output.push(hasil)
    }
    return output
}
console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]