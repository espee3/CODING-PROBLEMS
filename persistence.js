// function persistence(number){

//     let stepArr = number.toString().split("").map(Number)
//     let step = number;
//     let totalArr = []
//     while (step >=10){
//         let stepMultiplier = []
//         let total = 1
//         for (j=0; j<stepArr.length; j++){  //multiplier     
//                 total = total*stepArr.at(j)
//                 stepMultiplier.push(total)
//             }
//         stepArr = stepMultiplier.at(-1).toString().split("").map(Number)
//         step = stepMultiplier.at(-1) 
//         totalArr.push(total)               
//     }
//     return totalArr.length   
// }

// persistence(31224);


 function persistence(num){ 
       
    let totalArray = [];    //thats that holds the persistence
    number = num.toString().split("").map(Number);
        while (number.length > 1) {
            let total = 1;
            for (let i = 0; i < number.length; i++){
                total = total * number[i];
                //totalArray.push(total);      
            }
        totalArray.push(total);
        number = total.toString().split("").map(Number);
        }//while loop ends

    let persistenceArray = totalArray;
    return {
        "persistenceArray": persistenceArray,
    }
    }//persist function ends
    let persist = persistence(999);
