self.onmessage = function (event) {
  const number = event.data;
  const result = factorial(number);
  self.postMessage(result);
};

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
