let arrNum = [5,5,1,4,1]
let diceTally = {}
let pointsWon = []
function maxObjectElement(object){

    let highestNumber = -1
    let currentNumber = null

    for (let key in object){
        currentNumber = object[key]

        if (currentNumber > highestNumber){
            highestNumber = object[key]
        }
    }
    return highestNumber
}
function objectCounter (arr){ //function Creation
    for (let count of arrNum){
        if (diceTally[count] === undefined){
            diceTally[count] = 1
        }
        else {
            diceTally[count]++
        }
    }
    //console.log(diceTally)
}

threePointers = { //the key is the rolled value. value is the points
    1 : 1000,
    6 : 600,
    5 : 500,
    4 : 400,
    3 : 300,
    2 : 200,
}
onePointer = { //the key is the rolled value. value is the points
    1 : 10,
    5 : 50
}

objectCounter(arrNum) //function call
console.log("diceTally = ",diceTally, "\n")   //so i can see the dicTally Object in Console

let successfulValue = [];   //declared Variable
for (let count in diceTally){
    
    if (diceTally[count] === 3){ 
        // console.log("3key: ",count)
        // console.log("3value" ,diceTally[count], "\n")
        pointsWon.push(threePointers[count])
    }

    let weirdCondition = (diceTally[count] === 1 && (onePointer[count] !== undefined)) || (diceTally[count] === 2 && (onePointer[count] !== undefined))

    if (weirdCondition){
        console.log("weird condition", count, diceTally[count]) //weird_condition 
        console.log("pointsWon checked first: ", pointsWon, "\n")
        
        //push the onePointer points to successValue
    successfulValue.push(onePointer[count])
        console.log("after First Push: ", pointsWon, "-----------")
        console.log("successfulValue BEFORE Iterations: ", successfulValue)

        console.log("\nSUCCESSVALUE ITERATION")
        console.log("pointsWon before push: ", pointsWon, "\n")

        console.log("FOR-LOOP ITERATION")
        for (let key of successfulValue){
            successfulValue.pop(onePointer[count])
                console.log("successfulValuee_of_weird_condition: ", key, "\\n")
            pointsWon.push(key*diceTally[count]) //GEMINI, normally if you push the key won't you get the index value of the array itself, why am i getting undefined
        }
        
    }
}



console.log("\n//OUTSIDE THE LOOP \nsuccessfulValue-Array: ", successfulValue)
console.log("pointsWon: ", pointsWon, "\n") 