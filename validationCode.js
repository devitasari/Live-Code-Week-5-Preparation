//Test case
console.log(addValidationCode([
    {
      name: 'Antonio',
      'join date': '09-08-2018'
    },
    {
      name: 'Banderaz',
      'join date': '10-08-2018'
    },
  ]));
  /**
   Hasil Output
   [
    {
      name: 'Antonio',
      validationCode: 'nAotino09082018'
    },
    {
      name: 'Banderaz',
      validationCode: 'aBdnreza10082018'
    },
  ]
   */
  console.log(addValidationCode([
    {
      name: 'Cecile',
      'join date': '01-02-2018'
    },
    {
      name: 'Dominique',
      'join date': '10-09-2018'
    },
  ]));
  /**
   Hasil Output
   [
    {
      name: 'Cecile',
      validationCode: 'eCicel01022018'
    },
    {
      name: 'Dominique',
      validationCode: 'oDiminuqe10092018'
    },
  ]
   */
  console.log(addValidationCode([]));
  /**
   Hasil Output
   []
   */

function addValidationCode(arr) {
    var arr2 = []
    for (var i=0; i<arr.length; i++) {
        var obj = {}
        obj.name = arr[i].name
        var arr1 = arr[i].name.split('')
        for (var j=0; j<arr1.length-1; j+=2) {
            var tampung = arr1[j]
            arr1[j] = arr1[j+1]
            arr1[j+1] = tampung
        }
        var code = arr1.join('')

        code += arr[i]['join date'].split('-').join('')
        obj.validationCode = code
        arr2.push(obj)
    }
    return arr2
}
  