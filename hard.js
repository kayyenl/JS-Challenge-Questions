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
        let smallestnum = array[0]
        let smallindex = 0
        for (let j = 0; j < array.length; j++) {
            if (array.length === 1) smallestnum = array[j]
            else {
                if (smallestnum > array[j]) {
                    smallestnum = array[j]
                    smallindex = j
                }
            }
        }
        newarray.push(smallestnum)
        array.splice(smallindex, 1)
    }
    return newarray
}

// console.log(sortLowToHigh([20,40,10,30,50,10]))
// console.log(sortLowToHigh([5,10,0,-5]))
// console.log(sortLowToHigh([3,2,1,0]))

function sortUsingComparator(array) {
    return array.sort((a, b) => a - b)
} // a - b is ascending and b - a is descending.

// console.log(sortUsingComparator([20,40,10,30,50,10]))
// console.log(sortUsingComparator([5,10,0,-5]))
// console.log(sortUsingComparator([3,2,1,0]))

function sortHighToLow(array) {
    return array.sort((a, b) => b.price - a.price)
}

// console.log(sortHighToLow([
//     {id: 1, price: 50},
//     {id: 2, price: 30},
//     {id: 3, price: 60},
//     {id: 4, price: 10}
// ]))

function postsByUser(userId) {
    const result = fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(result)
}

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts") //gives you backend stuff
    console.log(await promise.json()) //changes from backend to frontend
} 

//FETCH always needs to be converted to ENGLISH!! convert to .json().

async function postsByUserReal(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts") 
    const result = await promise.json()
    const resultarr = result.filter(elem => elem.userId === userId)
    console.log(resultarr)
} 

console.log(oosts)

//the awaits in the lines are for teh bottom lines to WAIT
