// Promise async/await
// Future then/catch

console.log(1)
// setTimeout(() => console.log(2), 1000) // run after 1 sec
console.log(3) 

//Promise
const delay = ms => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(`Success`) // success statemet/callback
            },ms)
        }
    )
}
console.log("Start")
delay(2000).then((msg => console.log(msg))) // wait for promise to resolve
console.log("End")