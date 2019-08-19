function papanCatur(ukuran) {
    var result = ''
    for (var i=0; i<ukuran; i++) {
        for (var j=0; j<ukuran; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    result += '#'
                } else {
                    result += ' '
                }
            } else {
                if (j % 2 === 0) {
                    result += ' '
                } else {
                    result += '#'
                }
            }
        }
        result += '\n'
    }
    return result
}

console.log(papanCatur(5))
// # # #
//  # # 
// # # #
//  # # 
// # # #
