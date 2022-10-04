// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// Write your code below this line.

//let possibleNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function luckyNums (n){
    
    let possibleNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let answers =[]
    let value=0;
    for (let i =0; i<n;i++){
        value = Math.floor(Math.random()*possibleNums.length)//*10 take the floor
        answers.push(possibleNums[value])
        possibleNums.splice(value,1)
        
    }
    return answers

}
let working =luckyNums(7)
console.log(working)

