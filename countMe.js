function countMe(arr) {
    var arrJoin = ''
    var obj = {}
    for (var i=0; i<arr.length; i++) {
        arrJoin += arr[i]
    }
    for (var j=0; j<arrJoin.length; j++) {
        if (!obj[arrJoin[j]]) obj[arrJoin[j]] = 0
        obj[arrJoin[j]] += 1
    }
    return obj
}


console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }