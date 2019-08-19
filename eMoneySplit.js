function eMoneySplit(str) {
    var str1 = str.split(',')
    var terbanyak = ''
    var terbanyak1 = -Infinity
    var terdikit = ''
    var terdikit1 = Infinity
    if (!str) return 'tidak ada catatan eMoney' 
    console.log(str1)
    for (var i=0; i<str1.length; i++) {
        var str2 = str1[i].split(':')
        console.log(str2)
        if (Number(str2[1]) > terbanyak1) {
            terbanyak1 = str2[1]
            terbanyak = str2[0]
        }
        if (Number(str2[1]) < terdikit1) {
            terdikit1 = str2[1]
            terdikit = str2[0]
        }
        console.log(terbanyak)
        console.log(terdikit)
    }
    return 'terbanyak adalah '+ terbanyak +' terdikit adalah '+ terdikit
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney