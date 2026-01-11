
function compareDir(dir1,dir2){
    //your dir depends on the functions input
    //compareDir(NORTH, SOUTH)


    let north, south, east, west;

    cancelNS = north === south;
    cancelEW = east === west;

    if (cancelNS || cancelEW){
        console.log(dir2)
        return dir2
    } else {
        console.log("return null")
        return null
    }    
}

compareDir(north, south)