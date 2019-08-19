function getMillenials(arr) {
    var output = []
    for (var i=1; i<arr.length; i++) {
        if (arr[i][1] >20 && arr[i][1] <29) {
            var obj = {}
                obj[arr[0][0]] = arr[i][0]
                obj[arr[0][1]] = arr[i][1]
                obj[arr[0][2]] = arr[i][2]
                if (!arr[i][3]) obj[arr[0][3]] = 'NONE' 
                else
                obj[arr[0][3]] = arr[i][3].split(';')   
                output.push(obj)
        }
    }
    return output
}





console.log(getMillenials([
    ['Nama', 'Umur', 'Asal', 'MediaSosial'],
    ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
    ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
    ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
    ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
    ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
  ]));

//   [ { Nama: 'Tobias',
//   Umur: 21,
//   Asal: 'Jakarta',
//   MediaSosial: [ 'Twitter', 'Facebook' ]
// },
// { Nama: 'Syldie',
//   Umur: 25,
//   Asal: 'Malang',
//   MediaSosial: [ 'Google+', 'Instagram', 'Twitter' ]
// },
// { Nama: 'Fuad',
//   Umur: 24,
//   Asal: 'Jakarta',
//   MediaSosial: [ 'Path', 'LinkedIn', 'Google+' ]
// }
// ]


  
  console.log(getMillenials([
    ['Nama', 'Umur', 'Asal', 'MediaSosial'],
    ['Awtian', 19, 'Jakarta', 'Twitter;Facebook;LinkedIn'],
    ['Wika', 18, 'Bandung', 'Instagram;LinkedIn;Facebook;Youtube'],
    ['Rama', 23, 'Malang', ''],
    ['Dimas', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ]));

//   [ { Nama: 'Rama',
//   Umur: 23,
//   Asal: 'Malang',
//   MediaSosial: NONE
// }
// ]

  
  console.log(getMillenials([]));

//[]
  