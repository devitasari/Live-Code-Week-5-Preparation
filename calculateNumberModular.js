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

function calculate(arr) {
    var result = []
    if (arr.length === 0) return result
    var tagKey = Object.keys(arr[0])
    for (var i=0; i<arr.length; i++) {
        var num1 = arr[i][tagKey[0]]
        var num2 = arr[i][tagKey[1]]
        if (arr[i][tagKey[2]] === '*') {
            result.push(kali(num1,num2))
        } else if (arr[i][tagKey[2]] === '+') {
            result.push(tambah(num1,num2))
        } else if (arr[i][tagKey[2]] === '-') {
            result.push(kurang(num1,num2))
        } else if (arr[i][tagKey[2] === '/']) {
            result.push(bagi(num1,num2))
        }
    }
    return result
}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]