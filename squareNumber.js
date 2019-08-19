function squareNumber(num){
    if (num<3) return 'Minimal input adalah 3'
    var output = []
    var a = 1
    for (var h=0; h<num; h++) {
        output.push([])
    }
    //bikin board snakes and ladder
    for (var i=0; i<num; i++) {
        var b =0
        for (var j=0; j<num; j++) {
            if (i % 2 === 0) {
                output[i].push(a)
                a++
            } else {
                output[i].unshift(a)
                a++
            }
        }
    }
    for (var i=0; i<num; i++) {
        for (var j=0; j<num; j++) {
            if (output[i][j] % 4 === 0) output[i][j] = '#'
            else if (output[i][j] % 2 === 0) output[i][j] = 'o'
            else output[i][j] = 'x'
        }
    }
    return output
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3