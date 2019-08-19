function standBackTriangel(num) {
    var display = ''
    for (var i=0; i<num; i++) {
        for (var j=0; j<num; j++)
        if (j === num-1 || j === (num-1)-i) {
            display += 'o'
        } else {
            display += ' '
        }
        display += '\n'
    }
    for (var i=0; i<num-1; i++) {
        for (var j=num; j>0; j--)
        if (j === 1 || j === (num-1)-i) { 
            display += 'o'
        } else {
            display += ' '
        }
        display += '\n'
    }
    return display
}

 console.log(standBackTriangel( 15 ))
//  console.log(standBackTriangel( 5 ))
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */