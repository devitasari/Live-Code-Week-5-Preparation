function uniqueDuplicateFinder(str) {
    str1 = str.toLowerCase().split(' ')
    var a = {}
    for (var i=0; i<str1.length; i++) {
        for (var j=i+1; j<str1.length; j++) {
            if (str1[i] !== str1[j]) {
                continue
            } else {
                if (!a[str1[i]]) {
                    a[str1[i]] = 0
                }
                a[str1[i]] += 1
            }
        }
    }
    var tagKey = Object.keys(a)
    var display = {
        unique : [],
        duplicate : tagKey
    }  
    for (var i=0; i<str1.length; i++) {
      if (!a[str1[i]] && str1[i] !== '') {
          display.unique.push(str1[i])
      }
    }
    return display
}


console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }

console.log(uniqueDuplicateFinder('john is coding'));
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueDuplicateFinder(''));
// {
//   unique: [],
//   duplicate: []
// }