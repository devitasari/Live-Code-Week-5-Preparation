function FVChecker(arr) {
    var f = 0
    var v = 0
    var price = 0
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 'F') {f++; price += 1000}
        else if (arr[i] === 'V') {v++; price += 500}
    }
    return 'jumlah Buah: ' + f + ', jumlah sayur: ' + v + '. totalnya menjadi Rp. ' + price
}


console.log(FVChecker(['F','V','F']));
// jumlah Buah: 2, jumlah Sayur: 1. totalnya menjadi Rp. 2500
console.log(FVChecker(['V','V','F','F','V']));
// jumlah Buah: 2, jumlah Sayur: 3. totalnya menjadi Rp. 3500
console.log(FVChecker(['V','F','F','F','F']));
// jumlah Buah: 4, jumlah Sayur: 1. totalnya menjadi Rp. 4500
console.log(FVChecker(['F','F']));
// jumlah Buah: 2, jumlah Sayur: 0. totalnya menjadi Rp. 2000
console.log(FVChecker(['V','V','V','V']));
// jumlah Buah: 0, jumlah Sayur: 4. totalnya menjadi Rp. 2000