function XO(word){
    stringArr = word.toString().toLowerCase().split("")
    xFilter = stringArr.filter(sieve => sieve === "x")
    oFilter = stringArr.filter(sieve => sieve === "o")
   
    if (xFilter.length === oFilter.length){
        console.log("true")
            return true
        } else {
            console.log("false")
            return false}
}
XO("")



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false