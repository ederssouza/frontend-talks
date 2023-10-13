/**
 * ECMAScript 8 (também conhecida como ES8 e ECMAScript 2017)
 * lançada em junho de 2017
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

// (async () => {
//   console.time("async/await");
//   await showCurrentTime();
//   await showCurrentTime();
//   await showCurrentTime();
//   await showCurrentTime();
//   await showCurrentTime();
//   sayHello();
//   console.timeEnd("async/await");
// })();

// ==========

async function resolveRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolveRequest");
    }, 2000);
  });
}

async function rejectRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejectRequest");
    }, 2000);
  });
}

// (async () => {
//   console.time("async/await");

//   try {
//     const results = await Promise.all([
//       resolveRequest(),
//       resolveRequest(),
//       rejectRequest(),
//       resolveRequest(),
//       resolveRequest(),
//     ]);

//     console.log(results);

//     sayHello();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.timeEnd("async/await");
//   }
// })();

(async () => {
  console.time("async/await");

  try {
    const promises = await Promise.allSettled([
      resolveRequest(),
      resolveRequest(),
      rejectRequest(),
      resolveRequest(),
      resolveRequest(),
    ]);

    const results = promises.reduce(
      (acc, promise) => {
        const key = promise.status === "fulfilled" ? "success" : "error";
        acc[key].push(promise);
        return acc;
      },
      {
        success: [],
        error: [],
      }
    );

    console.log(results);

    sayHello();
  } catch (error) {
    console.log(error);
  } finally {
    console.timeEnd("async/await");
  }
})();
