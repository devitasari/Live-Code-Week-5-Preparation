console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }

function csvToObject(keys, values) {
    var objek = {}
    if (!keys || !values) return objek
    keys1 = keys.split(',')
    values1 = values.split(',')
    for (var i=0; i<keys1.length; i++) {
        objek[keys1[i]] = values1[i]
    }
    return objek
}