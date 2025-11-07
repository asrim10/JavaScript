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
      resolve(`Success`); // success statemet/callback
      //   reject(`Failure`); // failure statement
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

const sequentialPromise = async () => {
  console.time("sequentialPromise");
  const res1 = await delay(3000);
  console.log(res1);
  const res2 = await delay(5000);
  console.log(res2);
  //wait time is sum of both
  console.timeEnd("sequentialPromise");
};
sequentialPromise();

const parallelPromise = async () => {
  console.time("parallelPromise");
  const [res1, res2] = await Promise.all([delay(3000), delay(5000)]); // wait time is max of both
  console.log(res1, res2);
  console.timeEnd("parallelPromise");
};
parallelPromise();
