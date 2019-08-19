var symb = ['*','@','#','$','%','^','&','*']
var hur = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var ang = ['1','2','3','4','5','6','7','8','9','0']

function username(user) {
    if (user.length <4 || user.length >21) return false 
    for (var i=0; i<user.length; i++) {
            for (var j=0; j<symb.length; j++) {
                if (user[i] === symb[j]) {
                    return false 
                }
            }
    }
    return true
}

function password(pass) {
    var adaHuruf = false
    var adaAngka = false
    if (pass.length <5) return false 
    for (var a=0; a<pass.length; i++) {
        for (var j=0; j<hur.length; j++) {
                if (pass[a] === hur[j]) {
                    adaHuruf = true
                }
        }
        for (var k=0; k<ang.length; k++) {
            if (pass[a] === ang[k]) {
                adaAngka = true
            }
        }
    }
    if (adaAngka === true && adaHuruf === true) return true
    return false 
}

function mail(email) {
    if (email.length <6 ) return false 
    email1 = email.split('@')
    // console.log(email1)
    // if (email1[0].length > 4) return false + 'karena nama email lebih dari 4 karakter'
    if (email1.length > 2 || email1[0] === '' || email[1][0] === '.') return false + 'karena terdapat @ lebih dari satu atau nama email tidak ada'
    email2 = email1[1].split('.')
    // console.log(email2)
    if (email2.length !== 2) return false 
    if (email2[1].length > 3) return false 
    return true
}


function credentialValidator(user, pass, email) {
var a = username(user)
var b = mail(email)
var c = password(pass)
if (a === true && b === true && c === true) return true
return false
}

console.log(credentialValidator('adhywiranata', 'test123', 'adhywiranata@coding.com'))
console.log(
    credentialValidator(
      'adhy test 123 testing 321 test 123 321 test',
      'test123',
      'adhywiranata@coding.com'
    ))
console.log(credentialValidator('erwin', 'testing', 'erwin@nice.com'));