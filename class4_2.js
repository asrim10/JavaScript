// Promise async/await
// Future then/catch

console.log(1);
// setTimeout(() => console.log(2), 1000); // run after 1 sec
console.log(3);

//Promise
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    // time consuming function
    setTimeout(() => {
      //   resolve(`Success`); // success statemet/callback
      reject(`Failure`); // failure statement
    }, ms);
  });
};

const promiseCall = async () => {
  console.log("Start");
  try {
    const res = await delay(2000); //blocking
    console.log(res); //resolved value
  } catch (err) {
    console.log(err); // rejected vale
  }
  delay(2000) // non blocking
    .then((msg) => console.log(msg)) // wait for promise to resolve
    .catch((err) => console.log(err)); // wait for promise to reject

  console.log("End");
};
promiseCall();
