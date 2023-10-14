const ports = [];

self.onconnect = function (event) {
  const port = event.ports[0];

  ports.push(port);
  port.addEventListener("message", messageHandler);
  port.start();

  function messageHandler(event) {
    for (const p of ports) {
      if (p !== port) {
        p.postMessage(event.data);
      }
    }
  }
};
