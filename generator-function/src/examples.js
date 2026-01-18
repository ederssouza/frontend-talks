const productsMock = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
}));

async function sleep(time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function getProduct(id) {
  await sleep(2000);
  return productsMock.find((product) => product.id === id);
}

async function makeRequests() {
  // const productIds = [2, 30, 56];
  const productIds = productsMock.map(({ id }) => id);
  const responses = [];

  for (const productId of productIds) {
    const product = await getProduct(productId);
    responses.push(product);
  }

  console.table(responses);
}

(async () => {
  await makeRequests();
})();

// async function* makeRequests() {
//   // const productIds = [2, 30, 56];
//   const productIds = productsMock.map(({ id }) => id);

//   for (const productId of productIds) {
//     const product = await getProduct(productId);
//     yield product;
//   }
// }

// (async () => {
//   // se algum processo quebrar o fluxo não é interrompido
//   for await (const data of makeRequests()) {
//     console.table(data);
//   }
// })();

//
