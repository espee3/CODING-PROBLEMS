
// function isIsogram(str){
//     let wordArray = str.split("");

//     for (let i = 0; i < wordArray.length; i++) {
//         let pickedWord = wordArray.at(i).toLowerCase();

//         for (let j=i+1; j< wordArray.length; j++){
//             let currentWord = wordArray.at(j).toLowerCase();

//             if (pickedWord === currentWord){
//             return false;  
//             } 
//         }
//     }
//     return true;

// }

// isIsogram("Isogram");







// let word = "Atari";
// let wordArray = word.split("");
// // console.table (wordarray);
// // console.log (wordArray);

// // console.log("position at 2:", wordArray.at(2));
// // console.log("lenght of array", wordArray.length);

// // start at 0; stop at 5; add 1 every time

// for (let i = 0; i < wordArray.length; i++) {

//     let pickedWord = wordArray.at(i).toLowerCase();

//     for (let j=i+1; j< wordArray.length; j++){
//         let currentWord = wordArray.at(j).toLowerCase();
//         if (pickedWord === currentWord){
//            // console.log( pickedWord, wordArray.at(j) );
//            console.log("This is an Isogram")   
//         }   else {
//             console.log("This is not an isogram")
//         }
//     }
// }










// function checkUniqueness(arr) {
//   // 1. Pick a word
//   for (let i = 0; i < arr.length; i++) {
//     let matchCount = 0;
//     let currentWord = arr[i].toLowerCase();

//     // 2. Compare it against every word in the list (including itself)
//     for (let j = 0; j < arr.length; j++) {
//       if (currentWord === arr[j].toLowerCase()) {
//         matchCount++;
//       }
//     }

//     // 3. If it appears more than once, we found a duplicate!
//     if (matchCount > 1) {
//       return `Found a duplicate: "${arr[i]}" appears ${matchCount} times.`;
//     }
    
//     // 4. If matchCount is only 1, the loop continues to the next i automatically
//     console.log(`"${arr[i]}" is unique so far, moving to next...`);
//   }

//   // 5. If the outer loop finishes completely
//   return "Every word is unique in the list.";
// }

// const words = ["Apple", "Banana", "Cherry"];
// console.log(checkUniqueness(words));



/*PERSISTENCE CODE



*/

// function multiplyEverything(numbers) {
//     let total = 1;

//     for (let i = 0; i < numbers.length; i++) {
//         total = total * numbers[i];
//         console.log(`Step ${i + 1}: Total is now ${total}`);
//     }

//     console.log("Final Product:", total);
//     return total;
// }

// multiplyEverything([2, 3, 4]); 
// // Final Product: 24

// truth = [];
// truth.append = 3;
// truth.pop =5;
// console.table(truth);
// console.log(truth);


//SOLVING THE PERSISTENCE ISSUE
//    function persistence(num){    
//     let totalArray = [];    //thats that holds the persistence
//     number = num.toString().split("").map(Number);

//         while (number.length > 1) {
//             let total = 1;

//             for (let i = 0; i < number.length; i++){
//                 total = total * number[i];
//                 //totalArray.push(total);      
//             }
        
//         totalArray.push(total);
//         number = total.toString().split("").map(Number);

//         }//while loop ends

//     let persistenceArray = totalArray;
    
//     return {
//         "persistenceArray": persistenceArray,
//     }

    
//     }//persist function ends

//     let persist = persistence(999);
//     console.log(persist)

// array = ["Andrew"];
// function countArrayElement(element){
//         elem = [];
//         elem.push(element)
//         element = element.split("");
//         console.log(element)

//     }
// countArrayElement(array[0])


    // function countArrayElement(element){
    //     let elem = [];  //an array to push the elements into
    //     let counted = [];
    //     elem.push(element)
    //     element = element.split("");    //splits it into individual letters and makes an array of
    //     //console.log(element)
    //     counted.push(element.length); //number of words per array of element
    //     console.log(counted)
    //     return counted;
    // }

    // array = ["Atari", "Agazi"];

    // for (let i = 0; i < array.length; i ++){
    // console.log(array[i])}

    
// function wordSpin(word) {
//     allWords = [];
//     let wordArray = [];
//     let joinedArray = [];
//     wordArray = word.toString().split(""); 
//     for (i = wordArray.length - 1; i >= 0; i--){ // name: word Reversal loop
//             joinedArray.push(wordArray[i]);
//         }
//         console.log("wordArray after loop", wordArray);
//         console.log("joinedArray after loop", joinedArray);
//     let joinedWord = joinedArray.join("");
//     allWords.push(joinedWord); //as it joins the word, it pushes it to allWords
//     console.log(allWords) 
//     return allWords 
// }
// wordSpin("GOD IDS");

//counter
// function counter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//       return count;
//     },
//     decrement() {
//       count--;
//       return count;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }
// const myCounter = counter();
// myCounter.increment(); // 1
// myCounter.increment(); // 2
// myCounter.getCount(); // 2

    // if (stringArr.includes("x") && stringArr.includes("o") ){
    //     if (xFilter.length === oFilter.length){
    //         return true
    //     }
    //     else { return false}  
    // } else if(!stringArr.includes("x") && !stringArr.includes("o")){
    //     return false
    // }

  //object counter frequency map  
// const books = [
//   { title: "The Hobbit", pages: 300, read: true },
//   { title: "Atomic Habits", pages: 250, read: false },
//   { title: "JavaScript Basics", pages: 100, read: true },
//   { title: "Deep Work", pages: 200, read: false }
// ];

// // 1. .filter() - The "Security Guard" 
// // It keeps only the books that pass the test (in this case, unread books).
// const unreadBooks = books.filter(book => book.read === false);

// console.log(unreadBooks)