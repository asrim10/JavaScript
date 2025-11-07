//List/Array

const arr = [3, 4, 5]
const arr2 = [1, true, undefined, "Hello"]
// data type is not restricted in JS
// Spread operator
const arr3 = [arr, 3, 5] // [[3,4,5] 3,5]
const arr4 = [...arr, 3, 5] // [3,4,5,3,5]
const arr5 = [...arr, ...arr2] // [3,4,5,1, true, undefined, "Hello"]
console.log(arr5)
arr.push(10) // add element at end
console.log(arr)
const popped = arr.pop()
console.log(popped)
arr.unshift(100) // adds elemnt at the star
const shifted = arr.shift() // removes element form start
console.log(shifted)
console.log(arr)

//array access
console.log(arr[0])
console.log(arr.at(0))
arr[0] = 500 // although variable is const , array are mutable

// Iterate array
for (let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}

//Iterate with index
for (let index in arr) {
    console.log(index, arr[index])
}
//Iterate with value
for (let value of arr) {
    console.log(value)
}

//Object/Map/Record
const person ={
    firstName: "Hari",
    age: 30,
    "isAdmin": false,
    hobbies: ["reading", "travelling"],
    address: {
        street: "Kathmandu",
        country: "Nepal"
    }
}
console.log(person)
console.log(person.firstName)
console.log(person["firstName","age"])
person.age = 31 // modify
person.isAdmin = true
console.log(person.hobbies[0])
delete person.hobbies // delete key
console.log(person)

// Nullish checking
console.log(person.address.home) // undefined
// console.log(person.address.home.number) // error, cannot read property of undefined
console.log(person.address.home?.number)// undefined //home? check home as null or undefined
console.log(person.address.home?.number?.prefix) // undefined

console.log(person.address?.home?.number ?? 0)//0
console.log(person.address?.home?.continent ?? "Not specified") // Not specified
console.log(person.gender?.type ?? "N/A")// N/A

//Array /Iterable function
// forEach, map, filter , reduce

arr.forEach(
    (value, index) => {
        console.log(index, value)
    }
)
//callback can take 3 args : value, index, array
arr.forEach(elem => console.log(elem * 2))
//forEach doesnot return anything

const mappedArr = arr.map(value => value * 3)
console.log(mappedArr)

const mappedArr2 = arr.map((value, index) => {
    return value + index
})
console.log(mappedArr2) // map retrns new array / with same size/length

const name1 = ["Sarjak", "Anjali", "Anisha"]
const components = name1.map(
    name1 => `<li>${name1}</li>`
)
console.log(components)

const filteredArr = arr.filter(value => value > 10)
console.log(filteredArr) // filter returns new array with size <= original array

const reduceVal = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // 2nd args, initial value of accumulator
)
console.log(reduceVal) // reduce returns single aggregated value

// Practice
const cart = [
    { name: "Milk", category: "grocery", price: 2.5, qty: 2, inStock: true },
    { name: "Shampoo", category: "Beauty", price: 1.8, qty: 3, inStock: false },
    { name: "Egg", category: "grocery", price: 5.0, qty: 1, inStock: true }
]

//Use filter 
const filterCart = cart.filter(item => item.inStock && item.category === "grocery")
console.log(filterCart)

const mappedCart = filterCart.map(
    item => (
        {
            name: item.name,
            qty: item.qty,
            lineTotal: item.price * item.qty

        }
    )
)

const grandTotal = mappedCart.reduce(
    (acc, item) => acc + item.lineTotal,
    0
)

console.log("Grand Total : ", grandTotal)
