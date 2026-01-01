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