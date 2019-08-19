function sumThree(arr) {
   var arr1 = arr[0]
   var arr2 = arr[1]
   var num1 = 0
   var num2 = 0
   for (var i=0; i<arr1.length; i++) {
       if (String(arr1[i]).length === 3 && typeof(arr1[i]) === 'number') {
           num1 = arr1[i]
       }
   }
   for (var i=0; i<arr2.length; i++) {
    if (String(arr2[i]).length === 3 && typeof(arr2[i]) === 'number') {
        num2 = arr2[i]
    }
}
    return num1 + num2
}

console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201,true ] ])); //543
