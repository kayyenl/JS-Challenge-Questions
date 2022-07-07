 //BEGINNER CHALLENGES

 function calcRemainder(number, divisor) {
    return number % divisor
 }
  
//  console.log(calcRemainder(4,2))
//  console.log(calcRemainder(7,8))
//  console.log(calcRemainder(9,8))

function isOdd(number) {
    return (number%2 !== 0)
}

// console.log(isOdd(1))
// console.log(isOdd(2))
// console.log(isOdd(3))

function booleanInteger(number) { //cant return in a ternary!
    return (number%2 === 0) ?  1 : -1
}

// console.log(booleanInteger(1))
// console.log(booleanInteger(2))
// console.log(booleanInteger(5))

function isLoggedInAndSubscribed(login, sub) {
    return (login === "LOGGED_IN" && sub === "SUBSCRIBED") ? true : false
}

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))

function isLoggedInOrSubscribed(login, sub) {
    return (login === "LOGGED_IN" || sub === "SUBSCRIBED") ? true : false
}

// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))

