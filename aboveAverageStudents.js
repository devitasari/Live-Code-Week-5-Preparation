function aboveAverageStudents(arr) {
    var output = []
    var sum = 0
    for (var i=0; i<arr.length; i++) {
        sum += arr[i]['score']
    }
    var avg = sum/arr.length
    for (var j=0; j<arr.length; j++) {
        if (arr[j]['score'] > avg) {
            output.push(arr[j])
        }
    }
    return output
}

console.log(aboveAverageStudents([
    { name: 'Dimitri', score: 90 },
    { name: 'Sergei', score: 70 },
    { name: 'Alisa', score: 50 },
    { name: 'Viktor', score: 65 },
    { name: 'Vladimir', score: 40 },
    { name: 'Alexei', score: 70 }
  ]));
  
  // [ { name: 'Dimitri', score: 90 },
  //   { name: 'Sergei', score: 70 },
  //   { name: 'Viktor', score: 65 },
  //   { name: 'Alexei', score: 70 } ]
  
  console.log(aboveAverageStudents([
    { name: 'Foo', score: 100 },
    { name: 'Bar', score: 100 },
    { name: 'Baz', score: 90 }
  ]));
  
  // [ { name: 'Foo', score: 100 }, { name: 'Bar', score: 100 } ]
  
  console.log(aboveAverageStudents([]));
  
  // [ ]