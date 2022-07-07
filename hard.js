// HARD CHALLENGES

function showRating(number) {
    let returnstr = ""
    for (let i = 1; i <= number; i++)  returnstr += "*"
    returnstr = (number % 1 !== 0) ? returnstr += "." : returnstr
    return returnstr.split("").join(" ")
}

// console.log(showRating(3))
// console.log(showRating(4.5))
// console.log(showRating(0.5))

function sortLowToHigh(array) {
    let newarray = []
    let ogLength = array.length
    for (let i = 0; i < ogLength; i++) {
        for (let j = 0; j < array.length; j++) {
            
        }
    }
}