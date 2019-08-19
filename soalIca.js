// var animals = ['foxes','wolves','foxes','foxes']
// function a(animals) {
//     var display = {}
//     for (var i=0; i<animals.length; i++) {
//         if (!display[animals[i]]) {
//             display[animals[i]] = 0
//         }
//         display[animals[i]] += 1
//     }
//     return display
// }
// console.log(a(animals))

// var animals = [['foxes',4],['wolves',4],['wolves',1]]
// function b(animals) {
//     var display = {}
//     for (var i=0; i<animals.length; i++) {
//         if (!display[animals[i]] || animals[i][1] < display[animals[i]]) {
//             display[animals[i][0]] = animals[i][1]
//         }
//     }
//     return display
// }
// console.log(b(animals))

// var animals = [{type: 'foxes', age: 2}, {type:'foxes', age:1}, {type:'wolves',age:2}]
// function c(animals) {
//     var display = {}
//     for (var i=0; i<animals.length; i++) {
//         if (!display[animals[i]['type']] || animals[i]['age'] < display[animals[i]['type']]) {
//             display[animals[i]['type']] = animals[i]['age']
//         }
//     }
//     return display
// }
// console.log(c(animals))


// function palindromBukan(arr) {
//     var output = {
//         palindrom : [],
//         bukanPalindrom : []
//     }
//     for (var i=0; i<arr.length; i++) {
//         var kata = ''
//         for (var j=arr[i].length-1 ; j>=0; j--) {
//             kata += arr[i][j]
//         }
//         if (kata === arr[i]) {
//             output.palindrom.push(arr[i])
//         } else {
//             output.bukanPalindrom.push(arr[i])
//         }
//     }
//     return output
// }

// console.log(palindromBukan(['civic','yay','kasur rusak','mama mia']))

// function kelompokHewan(arr) {
//     var obj = {}
//     for (var i=0; i<arr.length; i++) {
//         if (!obj[arr[i][0]]) {
//             obj[arr[i][0]] = []
//         }
//         obj[arr[i][0]].push(arr[i])
//     }
//     return obj
// }
// console.log(kelompokHewan(['ayam','anjing','babi','bebek','cacing','domba','bunglon','lebah']))

function hitungA(arr) {
    var obj = {}
    for (var i=0; i<arr.length; i++) {
        var count = 0
        arr[i] = arr[i].toLowerCase()
        for (var j=0; j<arr[i].length; j++) {
            if (arr[i][j] === 'a') {
                count++
            }
        }
        obj.objek = 'Menghitung A dalam Nama'
        obj[arr[i]] = count
    }
    return obj
}

console.log(hitungA(['Devitasari', 'ElizabethWidiasri', 'ArnoldTherigan', 'RisantoMulyo', 'Robby Nurahman', 'Singgit Bramantha Gandasasmitha']))