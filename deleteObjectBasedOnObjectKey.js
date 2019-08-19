function soal1(obj, num, act) {
    var obj1 = {}
    var a = 0
    var tagKey = Object.keys(obj)
    if (act === 'view') {
        return obj[num]
    } else if (act === 'delete') {
        for (var i=0; i< tagKey.length; i++) {
            if (i === num ) {
                continue
            } else {
                obj1[a] = obj[i]
                a++
            }
           
        }
        return obj1
    }
}


console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"},
    3:{name:"hedya",codename:"the real lol"}
},2,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{name:"awtian",codename:"the black assasin"},
        2:{name:"hedya",codename:"the real lol"}
    }

*/
