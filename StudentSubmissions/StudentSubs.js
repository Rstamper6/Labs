//#1
let submissions = [{name: "Jane", score: 95, date: "2020-01-24", passed: true}, 
                    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
                    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
                    {name: "Jill", score: 88, date: "2020-04-22", passed: true}];
//console.log(submissions)

//#2
function addSubmission(array, newName, newScore, newDate) {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        
    }
    //Check to see if they passed or failed
    newSubmission.score >= 60 ? newSubmission.passed = true : newSubmission.passed = false;
    array.push(newSubmission)
    console.log(array)
}
// addSubmission(submissions, "Riley", 45, "2020-01-01")


//#3
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1)
    console.log(array)
}

// deleteSubmissionByIndex(submissions, 3)


//#4
function deleteSubmissionByName(array, name) {  
    let delSubmission = array.filter(subs => subs.name !== name);
    return delSubmission
}
// console.log (deleteSubmissionByName(submissions, "Jane"))
// console.log( deleteSubmissionByName(submissions, "Jack"));


//#5
function editSubmission(array, index, score){
    let newScore = array[index].score = score;
    newScore >= 60 ? array[index].passed = true : array[index].passed = false;
    return array;
}
// console.log(editSubmission(submissions, 0, 50));
// console.log(editSubmission(submissions, 0, 75));
// console.log(editSubmission(submissions, 2, 50));



//#6
function findSubmissionByName(array, name){
    
    // could not figure this out
//     let a = array.find(found =>{
    
    


//     // for(let i = 0; i <= array.length -1; i++){
//     //     if (array[i].name === name){
//     //         arrayResult.push(array[i]);
//     //     }
//     // } 
//     // return arrayResult;
 }
// console.log(findSubmissionByName(submissions, "Jack"))



//#7
function findLowestScore(array){
    let newArray = [];
    array.forEach(low => {
        let scores = low.score;
        newArray.push(scores)
    })
    return Math.min(...newArray);
}
// console.log(`The lowest score is ${findLowestScore(submissions)}`);


//#8
function findAverageScore (array){
    for(let avg of array){
        let average = 0;
        for(let i = 0; i < array.length; i++){
            average += array[i].score;
        }
        avg = average / array.length;
        return avg;
    }
}
// console.log(`The average score is ${findAverageScore(submissions)}`);


//#9
function filterPassing (array){
    let passing = array.filter(pass => pass.passed == true)
    return passing;
}
// console.log(filterPassing(submissions));


//#10
function filter90AndAbove (array){
    let above = array.filter(nine => nine.score >= 90)
    return above;
}
// console.log(filter90AndAbove(submissions));
// console.log((editSubmission(submissions, 1, 90), filter90AndAbove(submissions)))
// console.log((editSubmission(submissions, 2, 90), (filter90AndAbove(submissions))))