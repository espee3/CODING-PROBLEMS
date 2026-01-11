// @ts-check
// function humanReadable(timeInSeconds){
//     if (timeInSeconds < 0 || timeInSeconds > 359999 || !Number.isInteger(timeInSeconds)) {
//         return null
//     }
//     let HH, MM, SS;
//     let seconds, minutes, hour;
//     let secondsConversion, minutesConversion, hourConversion;

//     hourConversion = timeInSeconds/3600

//     if (Number.isInteger(hourConversion)){ 
//         hour = hourConversion
//     } else {
//         minutesConversion = (hourConversion % 3600)/60 //to convert the Hour Remainder into minutes, 

//         if (Number.isInteger(minutesConversion)){
//             minutes = minutesConversion
//         } else {
//             secondsConversion = (minutesConversion % 60)
//             if (Number.isInteger(secondsConversion)){
//                 seconds = secondsConversion
//             }
//         }
//     }

//     HH = hour, MM = minutes, SS = seconds;
//     console.log(`${HH}:${MM}${SS}`)

//     //return `${HH}:${MM}${SS}`
// }

// console.log(humanReadable(359999))

function humanReadable(timeInSeconds){
    if (timeInSeconds < 0 || timeInSeconds > 359999 || !Number.isInteger(timeInSeconds)) {
        return null
    }
    let HH, MM, SS;
    let seconds, minutes, hour;
    let hourRemainder, minutesRemainder;

    hour = timeInSeconds/3600
    
    hourRemainder = timeInSeconds % 3600
    minutes = (hourRemainder)/60

    minutesRemainder = hourRemainder % 60
    seconds = minutesRemainder

    HH = Math.floor(hour).toString().padStart(2,'0')
    MM = Math.floor(minutes).toString().padStart(2,'0')
    SS = Math.floor(seconds).toString().padStart(2,'0')

    return (`${HH}:${MM}:${SS}`)    
}

humanReadable(399)