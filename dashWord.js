function dashWord(str, num) {
    var hasil = ''
    for (var i=0; i<str.length; i++) {
        hasil += str[i]
        if (i % num-(num-1) === 0 && i !== str.length-1) {
            hasil += '-'
        }
    }
    return hasil
}


console.log(dashWord('Indonesia', 8)) // Indonesi-a
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('classicFox', 3)) // cla-ssi-cFo-x
console.log(dashWord('Coding for everyone', 1)) // C-o-d-i-n-g- -f-o-r- -e-v-e-r-y-o-n-e

