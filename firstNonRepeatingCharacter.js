
function objectCounter (arr, object){
    for (let key of arr){
        let keyAdder = 0
        if (object[key] === undefined){
            object[key] = 1
        }
        else {
            object[key]++
        }        
    }
    return object
}


function noRepeat (stringAlone){
    if (typeof stringAlone !== "string" || stringAlone === null){
        return ""
    }
    let stringFrequency = {}
    let stringToUse = stringAlone.toLowerCase().split("")
    let strFreqArr = []

    let stringOriginal = stringAlone.split("")

    //Object Call
    objectCounter(stringToUse, stringFrequency)

    for (let i = 0; i < stringOriginal.length; i++) {
        let char = stringOriginal[i].toLowerCase();

        if (stringFrequency[char] === 1) {
            console.log(stringOriginal[i])
            return stringOriginal[i]; 
        }
    }
}

noRepeat("googLe")
