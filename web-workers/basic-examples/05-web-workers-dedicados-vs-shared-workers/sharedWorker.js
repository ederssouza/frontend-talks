let ports = [];

self.onconnect = function (event) {
  const port = event.ports[0];
  ports.push(port);

  port.onmessage = function (event) {
    console.log(`Mensagem recebida no Shared Worker: ${event.data}`);

    // Retransmite a mensagem para todas as outras páginas
    for (let p of ports) {
      console.log({ p, ports });
      if (p !== port) {
        // Não envie de volta para a página que originou a mensagem
        p.postMessage(`Mensagem da outra página: ${event.data}`);
      }
    }
  };

  port.start();
};
