// Promise, on delay function add another argument, num
// if num %2 == 0 , resolve after ms
// else reject after ms
// run this both parallelPromise and sequentialPromise
// simulate (1000, 1500, 2500, 3000)
// run this both parallely and sequentially
//catch the errors in parallel executio with Promise.allSettled
// make a new function
// log the resolved and rejected values separately
// using non - blocking . then, run 1000, 2000, 3000, sequentially

const delayWithNum = (ms, num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num % 2 == 0 ? resolve(`Resolved: ${num}`) : reject(`Rejected: ${num}`);
    }, ms);
  });
};
delayWithNum(2000, 3)
  .then((res) => {
    delayWithNum(1000, 4)
      .then((res2) => {
        console.log(res2);
        delayWithNum(3000, 5)
          .then((res3) => console.log(res3))
          .catch((err3) => console.log(err3));
      })
      .catch((err2) => console.log(err2));
  })
  .catch((err) => {
    console.log(err);
  });
