// const delay = ms =>
//   new Promise((res, rej) =>
//     setTimeout(() => {
//       if (ms === 500) return rej('--------');
//       res();
//       console.log(ms);
//     }, ms)
//   );

// const delayBulk = async () => {
//   await delay(400);
//   await delay(500);
// };

// (async () => {
//   console.log('START');
//   try {
//     throw new Error('ERR ERR ERR');
//     delayBulk();
//     console.log('xxx');
//     await delay(100);
//     await delay(200);
//     await delay(300);
//   } catch (e) {
//     console.log(e.message);
//   }

//   delay(100)
//     .then(() =>
//       delay(200).then(() => {
//         console.log('xxxxx');
//       })
//     )
//     .then(() => delay(300))
//     .then(() => delay(400))
//     .then(() => delay(500))
//     .catch(e => console.log('ERR ERR ERR'));
// })();
