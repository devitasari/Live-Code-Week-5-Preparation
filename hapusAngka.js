function hapusAngka(str) {
    str1 = str.toLowerCase()
    var kata = ''
    for (var i=0; i<str.length; i++) {
        if (str1[i] >= 'a' && str1[i] <= 'z' ) {
            kata += str[i]
        }
    }
    return kata
}


console.log(hapusAngka('hacktiv8')); //hacktiv
console.log(hapusAngka('17 Agu stus 1945')); //Agustus
console.log(hapusAngka('')); //''