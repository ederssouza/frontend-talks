/**
 * ECMAScript 6 (também conhecida como ES6 e ECMAScript 2015)
 * lançada em junho de 2015
 */
async function showCurrentTime() {
  const now = new Date();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(now.toJSON()));
    }, 2000);
  });
}

function sayHello() {
  console.log("Hello!!!");
}

// showCurrentTime().then(() => {
//   sayHello();
// });

console.time("chained then");

showCurrentTime().then(() => {
  showCurrentTime().then(() => {
    showCurrentTime().then(() => {
      showCurrentTime().then(() => {
        sayHello();

        console.timeEnd("chained then");
      });
    });
  });
});
