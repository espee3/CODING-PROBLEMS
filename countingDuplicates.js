function countDuplicates (word){
    pickedWord = word.toString().toLowerCase().split("");
    duplicateArr = []
    
    for (let i = 0; i < pickedWord.length; i++){
        arrElement1 = pickedWord.at(i)

        for(let j = i+1; j<pickedWord.length; j++){
            arrElement2 = pickedWord.at(j);
            if (arrElement1 === arrElement2 && !duplicateArr.includes(arrElement1)){ 
               count = 0;
               count = count + 1;
               if (count < 2){
                duplicateArr.push(arrElement2);                
               }               
            }
        }

    }
    console.log(duplicateArr.length)
    return duplicateArr.length
}

countDuplicates("")


//ALTERNATE SOLUTION TO ASK GEMINI LATER
// function countDuplicates(text) {
//     let words = text.toLowerCase().split("");
//     let counts = {}; // This is our storage object
//     let duplicates = 0;

//     for (let char of words) {
//         // If the character isn't in our object yet, set it to 1
//         // If it IS there, add 1 to its current number
//         counts[char] = (counts[char] || 0) + 1;
//     }

//     // Now we look at our notes (the object)
//     for (let key in counts) {
//         if (counts[key] > 1) {
//             duplicates++;
//         }
//     }

//     return duplicates;
// }

// console.log(countDuplicates("Ataariiii")); // Result: 2