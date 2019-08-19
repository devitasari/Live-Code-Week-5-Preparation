function arrayInjector(arr,num,arr1) {
    var arr2 = []
    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr1.length; j++) {
            if (i === num) arr2.push(arr1[j])
        } 
        arr2.push(arr[i])
    }
    return arr2
}



console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']