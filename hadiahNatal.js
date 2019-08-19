function natal(arr) {
    var nyawa = 3
    var hadiah = 0
    for (var i=0; i<arr.length && nyawa>0; i++) {
        if (arr[i] === 'Pit Hitam') {
            nyawa -= 1
        } else if (arr[i] === 'Nenek Penyihir') {
            nyawa -= 1
        } else if (arr[i] === 'Hadiah') {
            hadiah += 1
        }
    }
    if (nyawa > 0) {
        return 'Yeay, you got all present: ' + hadiah
    } else {
        return "Be brave, next time! Bu it's okay, you got " + hadiah + ' present(s)'
    }
}

console.log(natal(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']))
// Yeaaayyy, you got all presents: 2
console.log(natal(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']))
// Be brave, next time! But it's okay, you got 2 present(s)