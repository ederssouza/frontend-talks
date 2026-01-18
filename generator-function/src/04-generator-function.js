/**
 * Ganha a habilidade de liberar o event loop
 * - podemos sair do fluxo de executar, executo outra instrução de depois eu volto
 */

// function* generator() {
//   console.log("start");
//   yield 10;
//   yield 20;
//   yield 30;
// }

// const g1 = generator();

// console.log("g1 =>", g1.next());
// console.log("g1 =>", g1.next());
// console.log("g1 =>", g1.next());
// console.log("g1 =>", g1.next());

// ===============================================================

// const g2 = generator();

// for (let i of g2) {
//   console.log("g2 =>", i);
// }

// ===============================================================

async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function* generatorAsync() {
  console.log("start");

  await sleep(1000);

  yield 10;

  await sleep(5000);

  yield 20;
}

(async () => {
  // const asyncG = generatorAsync();
  // const result = await asyncG.next();
  // console.log(result);

  const asyncG = generatorAsync();

  for await (let i of asyncG) {
    console.log("asyncG =>", i);
  }

  console.log("end");
})();
