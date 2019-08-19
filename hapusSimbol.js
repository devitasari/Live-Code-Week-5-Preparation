function hapusSimbol(str) {
    var result = ''
    for (var i=0; i<str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 0 && str[i] != ' ') || (str[i] >= 'A' && str[i] <='Z')) result += str[i]
    }
    return result
}



console.log(hapusSimbol('teEst%$4aa')); // test4aa
console.log(hapusSimbol('dEvel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100