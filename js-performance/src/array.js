const length = 1000000;
const sampleArray = Array.from({ length }, (_, index) => index + 1);

function benchmark(name, callback) {
  console.time(name);
  callback();
  console.timeEnd(name);
}

// benchmark("array-map-filter", () => {
//   const arrayOfObjects = sampleArray.map((item) => ({ id: item }));
//   return arrayOfObjects.filter((item) => item.id % 2 === 0);
// });

// benchmark("array-map-filter-map-chained", () => {
//   return sampleArray
//     .map((item) => ({ id: item }))
//     .filter((item) => item.id % 2 === 0);
// });

// benchmark("for-of", () => {
//   const array = [];

//   for (const item of sampleArray) {
//     if (item % 2 === 0) {
//       array.push({ id: item });
//     }
//   }

//   return array;
// });

// benchmark("array-for", () => {
//   const array = [];

//   for (let index = 0; index < sampleArray.length; index++) {
//     const item = sampleArray[index];

//     if (item % 2 === 0) {
//       array.push({ id: item });
//     }
//   }

//   return array;
// });

// benchmark("array-map-reduce", () => {
//   return sampleArray.reduce((acc, item) => {
//     if (item.id % 2 === 0) {
//       acc.push({ id: item });
//     }

//     return acc;
//   }, []);
// });

// benchmark("array-map-reduce-concat", () => {
//   return sampleArray.reduce((acc, item) => {
//     return item.id % 2 === 0 ? acc.concat({ id: item }) : acc;
//   }, []);
// });
