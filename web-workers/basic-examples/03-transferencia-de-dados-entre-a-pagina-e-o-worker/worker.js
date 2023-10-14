self.onmessage = function (event) {
  if (event.data.byteLength) {
    return console.log(
      "ArrayBuffer recebido no Worker com tamanho:",
      event.data.byteLength
    );
  }

  console.log("Dado recebido no Worker:", event.data);
};
