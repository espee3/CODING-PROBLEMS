function persistence (num){
    let total = 1;

    let number = num.toString();
    number = number.split("").map(Number);
    console.log(number);

    for (let i = 0; i < number.length; i++){
        total = total * number[i];
        console.log(total);

    }

}

persistence(39);