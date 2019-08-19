function lotusRealms(arr) {
    var nyawa = []
    var output = []
    var kunci = Object.keys(arr)
    console.log(kunci)
    for (var i=0; i<arr.length; i++) {
        nyawa.push([arr[i]['clan'],arr[i]['totalHealth']])
    }
    // console.log(nyawa)
    for (var j=0; j<arr.length; j++) {
        for (var k=0; k<nyawa.length; k++) {
            if (arr[j]['attack'] === nyawa[k][0]) {
                nyawa[k][1] -= arr[j]['totalAttack']
            }
        }
    }
    // console.log(nyawa)
    for (var l=0; l<nyawa.length; l++) {
        if (nyawa[l][1] >= 0) {
            var objek = {}
            objek['clan'] = nyawa[l][0]
            objek['totalHealth'] = nyawa[l][1]
            output.push(objek)
        } 
    }
    return output
}


console.log(lotusRealms([
    { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
    { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
    { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
  ]))
  /*
    [
      { clan: 'Serpent', totalHealth: 700 },
      { clan: 'Samurai', totalHealth: 200 },
      { clan: 'Lotus', totalHealth: 3000 }
    ]
  */
  
  console.log(lotusRealms([
    { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
  ]))
  /*
    [ { clan: 'Lotus', totalHealth: 3000 } ]
  */