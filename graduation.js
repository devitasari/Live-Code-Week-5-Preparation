// ┌────┬─────────────┬─────────────┬───────┬──────────┬─────┐
// │ id │ first_name   │  last_name  │ score │  gender  │ age │
// ├────┼─────────────┼─────────────┼───────┼──────────┼─────┤
// │ 1  │ 'Carrissa'  │  'Murley'   │  53   │ 'Female' │ 18  │
// │ 2  │ 'Winifield'  │ 'Frisdick'  │  86   │  'Male'  │ 19  │
// │ 3  │  'Romonda'  │  'Verling'  │  95   │ 'Female' │ 20  │
// │ 4  │  'Yehudit'  │ 'Isakovic'  │  32   │  'Male'  │ 19  │
// │ 5  │  'August'   │ "O' Mahony" │  73   │ 'Female' │ 21  │
// │ 6  │   'Scott'   │   'Rubra'   │  51   │  'Male'  │ 18  │
// └────┴─────────────┴─────────────┴───────┴──────────┴─────┘


var scoreData = [
    {id: 1,
    first_name: 'Carissa',
    last_name: 'Murley',
    score: 53,
    gender: 'Female',
    age: 18},
    {id: 2,
    first_name: 'Winifield',
    last_name: 'Frisdick',
    score: 86,
    gender: 'Female',
    age: 20},
    {id: 3,
    first_name: 'Romonda',
    last_name: 'Verling',
    score: 95,
    gender: 'Female',
    age: 20},
    {id: 4,
    first_name: 'Yehudit',
    last_name: 'Isakovic',
    score: 32,
    gender: 'Male',
    age: 19},
    {id: 5,
    first_name: 'August',
    last_name: "O' Mahony",
    score: 73,
    gender: 'Female',
    age: 21},
    {id: 6,
    first_name: 'Scoot',
    last_name: 'Rubra',
    score: 51,
    gender: 'Male',
    age: 18}
]

function scoreDataMining(scoreData) {
    var display = {
        '0-40' : [],
        '41-80' : [],
        '81-100' : [],
        avg : 0,
        highestScore : {}
    }
    var avg = 0
    var highestScore = -Infinity
        for (var i=0; i<scoreData.length; i++) {
            var objek = {
                id: scoreData[i].id,
                first_name: scoreData[i].first_name,
                last_name: scoreData[i].last_name,
                score: scoreData[i].score
            }
            if (scoreData[i].score <41) {
                display['0-40'].push(objek)
            } else if (scoreData[i].score <81) {
                display['41-80'].push(objek)
            } else if (scoreData[i].score <100) {
                display['81-100'].push(objek)
            }
            avg += scoreData[i].score
            if (scoreData[i].score > highestScore) {
                highestScore = scoreData[i].score
                display.highestScore = objek
            }    
    }
    avg = avg/scoreData.length
    display.avg = avg
    return display
}

console.log(scoreDataMining(scoreData))  