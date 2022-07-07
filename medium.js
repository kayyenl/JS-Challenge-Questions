// MEDIUM CHALLENGES

function filterOutFalsy(obj1, obj2) {
    return (obj1 == false) ? obj1 : obj2 //or, if (!obj1)
}

// console.log(filterOutFalsy(0, 500))
// console.log(filterOutFalsy(false, 100))
// console.log(filterOutFalsy(true, 'Dog'))

function arrLength(array) {
    return array.length
}

// console.log(arrLength([1,2,3]))
// console.log(arrLength([5, 0, -4, 1]))
// console.log(arrLength([]))

function arrLastElem (array) {
    return array[array.length - 1]
}

// console.log(arrLastElem([3,2,0,6,2]))
// console.log(arrLastElem(['dog', 'cat', 'ball']))
// console.log(arrLastElem([null, 5, false]))

function arrSum(array) {
    let returnsum = 0
    for (let i = 0; i < array.length; i++) returnsum += array[i]
    return returnsum
}

// console.log(arrSum([2,2,2]))
// console.log(arrSum([100,200,500]))
// console.log(arrSum([0,-5,-10]))

function progressiveSum(number) {
    let returnsum = 0
    for (let i = 0; i <= number; i++) returnsum += i
    return returnsum
}

// console.log(progressiveSum(3))
// console.log(progressiveSum(4))
// console.log(progressiveSum(600))

function calcTime(number) {
    let min = Math.floor(number/60)
    let sec = number % 60
    let minStr = min.toString().padStart(2, '0')
    let secStr = sec.toString().padStart(2, '0')
    return (minStr + ':' + secStr)
}

// console.log(calcTime(66))
// console.log(calcTime(50))
// console.log(calcTime(300))

function getMax(array) {
    let maxnum
    for (let i = 0; i < array.length; i++) {
        if (i === 0) maxnum = array[i]
        if (maxnum < array[i]) maxnum = array[i]
    }
    return maxnum
}

// console.log(getMax([5,100,0]))
// console.log(getMax([12,10,-20]))
// console.log(getMax([-300,-100,-200]))

function reverseString(string) {
    let returnstr = ""
    for (let i = string.length - 1; i >= 0; i--) returnstr += string[i]
    return returnstr
}

// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))
// console.log(reverseString('Lee Kay Yen'))

function stringToArray(string) {
    return string.split('')
}

// console.log(stringToArray('David'))
// console.log(stringToArray('This is cool'))
// console.log(stringToArray('Lee Kay Yen'))

function stringToArrayRev(string) { //you can only reverse an array!!
    return string.split('').reverse()
}

// console.log(stringToArrayRev('David'))
// console.log(stringToArrayRev('This is cool'))
// console.log(stringToArrayRev('Lee Kay Yen'))

function stringToArrayRevThenString(string) {
    return string.split('').reverse().join('')
}
//the params for join is just appending in btw the objects

// console.log(stringToArrayRevThenString('David'))
// console.log(stringToArrayRevThenString('This is cool'))
// console.log(stringToArrayRevThenString('Lee Kay Yen'))

function convertToZeros(array) {
    let returnarr = []
    for (let i = 0; i < array.length; i++) array.push(0)
    return returnarr
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))