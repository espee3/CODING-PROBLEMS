function spinWords (words) {
    function countArrayElement(element){
        let elem = [];  //an array to push the elements into
        let counted = [];
        elem.push(element)
        element = element.split("");    //splits it into individual letters and makes an array of
        counted.push(element.length); //number of words per array of element
        return counted;
    }
    wordsArray = [];
    wordsArray = words.toString().split(" ");
    spinWords = [];
    let allWords = [];
    
   for (let i=0; i<wordsArray.length; i++){
        countArrayElement(wordsArray[i]); //countArrayElement returns numbers bro an array of words      //loops and counts first array elements given to it
        let countedArrayElement = countArrayElement(wordsArray[i]);
        if (countedArrayElement < 3){
            function wordSpin(word) {
                    let wordArray = [];
                    let joinedArray = [];
                    wordArray = word.toString().split(""); 
                    for (let i = wordArray.length - 1; i >= 0; i--){ // name: word Reversal loop                        
                        joinedArray.push(wordArray[i]);
                        }
                    let joinedWord = joinedArray.join("");
                    allWords.push(joinedWord); //as it joins the word, it pushes it to allWords
                }
            wordSpin(wordsArray[i]);    //for elements that are < 3

        } else {
            function noWordSpin(word) {
                    //allWords = [];
                    let wordArray = [];
                    let joinedArray = [];
                    wordArray = word.toString().split(""); 
                    for (let i = 0; i < wordArray.length; i++){ // name: word Reversal loop                    
                        joinedArray.push(wordArray[i]);
                        }
                    let joinedWord = joinedArray.join("");
                    allWords.push(joinedWord); //as it joins the word, it pushes it to allWords
                }
            noWordSpin(wordsArray[i]);       
        }
   } //for loop ends
    spinWords = allWords.join(" ");
    console.log(spinWords)
}

spinWords("All Might is Here")