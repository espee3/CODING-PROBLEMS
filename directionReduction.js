function dirReduct(arrayOfStrings){
    
    
    // function compDir(dir1, dir2){

    //     let north = "north", south = "south", east = "east", west = "west";
    //     let NS, EW
    //     NS = north && south, NS = false
    //     EW = east && west, EW = false

    //     //console.log(NS)
    //     if (NS){
    //         return null
    //     } else {
    //         return dir2
    //     }
    // }
    // compDir("north", "west");
    

}

let arr1 = ["NORTH", "SOUTH", "EAST", "WEST", "WEST"]
//dirReduct(arr1)


function dirReduc(arr) {
    const opposites = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };

    return arr.reduce((stack, current) => {
        const last = stack[stack.length - 1];
        
        // If the stack isn't empty and the last item is the opposite of current
        if (stack.length > 0 && last === opposites[current]) {
            stack.pop(); // Remove the "needless" movement
        } else {
            stack.push(current); // Keep the direction
        }
        console.log(stack)
        return stack;
    }, []);
}

dirReduc(arr1)