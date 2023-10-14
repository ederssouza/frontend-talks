const ports = [];

self.addEventListener("connect", handleConnect);

function handleConnect(event) {
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
}
