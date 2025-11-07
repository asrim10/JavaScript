// function

function greet(name) {
    return "Hello, " + name
}
let first = greet("Hari")
console.log(first)

// no restriction of arguments and return
function greetNormal() {
    console.log("Hello")
} 
greetNormal()

const arrowFunc = () => "Hello arrow"
console.log(arrowFunc())

const arrowFunc2 = (firstName) => {
    //function statment
    return "Hello " + firstName
}
console.log(arrowFunc2("Ram"))

const add = (a,b) => a + b
const subtract = (a, b) => {
    return a - b // return needed  does not run automatically
}
console.log(add(5, 3))
console.log(subtract(5,3))


//Practice
// make a function with "function" keyword named average1
function average1(a, b, c) {
    return (a + b + c)/3 
}
let param = average1(5, 6, 7)
console.log(param)

// function without scope using arrow function
const average2 = (a, b, c) => (a + b + c) / 3

// function with scope using arrow function
const average3 = (a, b, c) => {
    let avg = (a + b + c) / 3
    return avg
}
console.log(average2(5, 6, 7))
console.log(average3(5, 6, 7))

// Higher Order function/ Callbacks
const cb1 = (a, b, operation) => { //functioning argument
    console.log("Starting Operation")
    //logics
    return operation(a, b)
}
let num1 = 10
let num2 = 5
let sumFunc = (a, b) => {
    let sum = a + b
    console.log(sum)
    return sum
}
cb1(num1, num2, sumFunc)

const res2 = cb1(20, 30, (a, b) => a - b)
console.log(res2)

//Practice
// function named userStatus with two parameter 
const userStatus = (username,callback) =>{
    return callback(username)

}
// isAdmin function to check admin
const isAdmin = (username) => {
    return username === 'admin'
}
// isGuest function to check guest or not
const isGuest= (username) => {
    return username === 'guest'
}

let scenarion1 = userStatus("admin", isAdmin)
let scenarion2 = userStatus("guest", isAdmin)
let scenarion3 = userStatus("unknown", isAdmin)
let scenarion4 = userStatus("guest", isGuest)
let scenarion5 = userStatus("admin", isGuest)
console.log(scenarion1, scenarion2, scenarion3, scenarion4, scenarion5)

//Practice with annonymous function
// pass an anonymous function as callback to check if "student"
let scenarion6 = userStatus("student", (username) => username === 'student')
let scenarion7 = userStatus("teacher", (username) => username === 'student')
console.log(scenarion6)
console.log(scenarion7)

//closures
function outerFunction(outerVariable) {
    console.log("Outer function logic")
    return function innerFunction(inerVariable) {
        console.log("Outer Variable: " + outerVariable)
        console.log("Inner Variable: " + inerVariable)
    }
}
const newFunction = outerFunction("outside")// runs outer function
newFunction("inside")// runs inner function with outer variable preserved

const counter = (start) => {
    let count = start
    return () => {
        count++
        return count
    }
}
const addOne = counter(5)
console.log(addOne()) // 6
console.log(addOne()) // 7
console.log(addOne()) // 8

const studentRecord = (name1, age) => {
    const addMarks = (science, math, english)=>{
        console.log("Name : " + name1)
        console.log("Age : " + age)
        let avg = (science + math + english) / 3
        console.log("Average : " + avg)
    }
    return addMarks
}

const s1= studentRecord('Asrim', 20)
s1(90, 80, 90)
