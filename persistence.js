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
