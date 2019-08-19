function golonganPrima(arr) {
    var obj = {}
    obj.prima = []
    obj.bukanPrima = []
    for (var i=0; i<arr.length; i++) {
        var prima = true
        for (var j=2; j<arr[i]; j++) {
            if (arr[i] % j === 0) {
                prima = false
            }
        }
        if (prima === false) {
            if (!obj.bukanPrima) {
                obj.bukanPrima = []
            }
            obj.bukanPrima.push(arr[i])
        }
        else obj.prima.push(arr[i])
    }
    return obj
}

console.log(golonganPrima([1,2,3,4,5,6,7,8,9,10]))