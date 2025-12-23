function persistence (num){


    function persist(){

        let total = 1;
        let totalArray = [];

        let number = num.toString();
        number = number.split("").map(Number);
        //console.log(number);

        for (let i = 0; i < number.length; i++){
            total = total * number[i];
            console.log(total);
            totalArray.push(total);
            console.log(totalArray); 
            return total
        
        }
    }





}

persistence(999);