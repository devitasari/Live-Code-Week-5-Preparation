function el(input) {
    input2 = input[0].split('')
    console.log(input2)
    var output = []
    var hasil = ''
    for (var i=0; i<input2.length; i+=3) {
        if (i%3 === 0) {
            output.push([])
            hasil = ''
        }
        for (var j=i; j<i+3 && j<input2.length; j++) {
        hasil += input2[j]
        }
        output[output.length-1].push(hasil)
    }
    return output
}

console.log(el(['dskjfhasgu']))


