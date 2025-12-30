 
function isIsogram(str){
    let wordArray = str.split("");

    for (let i = 0; i < wordArray.length; i++) {
        let pickedWord = wordArray.at(i).toLowerCase();

        for (let j=i+1; j< wordArray.length; j++){
            let currentWord = wordArray.at(j).toLowerCase();

            if (pickedWord === currentWord){
            return false;  
            } 
        }
    }
    return true;

}

isIsogram("Isogram");