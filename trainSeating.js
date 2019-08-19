//input array of objek
console.log(trainSeating([
    { nama: "Goku", gerbong: "VVIP", seat: 'A1' },
    { nama: "Vegeta", gerbong: "VIP", seat: 'V1' },
    { nama: "Sasuke", gerbong: "VVIP", seat: 'A2' },
    { nama: "Naruto", gerbong: "Regular", seat: 'R1' },
    { nama: "Sakura", gerbong: "Regular", seat: 'R3' },
    { nama: "Luffy", gerbong: "VIP", seat: 'V2' },
    { nama: "Zoro", gerbong: "VVIP", seat: 'A666' },
    { nama: "Nami", gerbong: "VIP", seat: 'V6' }
  ]));

/*
Output :
{
  VVIP:
  [ { nama: 'Goku', seat: 'A1' },
    { nama: 'Sasuke', seat: 'A2' },
    { nama: 'Zoro', seat: 'A666' } ],
  VIP:
  [ { nama: 'Vegeta', seat: 'V1' },
    { nama: 'Luffy', seat: 'V2' },
    { nama: 'Nami', seat: 'V6' } ],
  Regular:
    [ { nama: 'Naruto', seat: 'R1' },
      { nama: 'Sakura', seat: 'R3' } ]
}
*/

function trainSeating(arr) {
    var objek = {
        VVIP : [],
        VIP : [],
        Regular : []
       }
    for (var i=0; i<arr.length; i++) {
        var objek1 = {
            nama : arr[i].nama,
            seat : arr[i].seat
        }
        if (arr[i].gerbong === 'VVIP') {
            objek.VVIP.push(objek1)
        } else if (arr[i].gerbong === 'VIP') {
            objek.VIP.push(objek1)
        } else if (arr[i].gerbong === 'Regular') {
            objek.Regular.push(objek1)
        }
    }
    return objek
}