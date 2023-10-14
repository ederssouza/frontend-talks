self.onmessage = function (event) {
  const receivedBuffer = event.data;

  // Convertendo o ArrayBuffer de volta para string JSON
  const jsonString = new TextDecoder().decode(receivedBuffer);

  // Convertendo a string JSON de volta para um objeto
  const data = JSON.parse(jsonString);

  // Processando os dados
  const processedData = processData(data);

  // Enviando os dados processados de volta para o script principal
  const processedJson = JSON.stringify(processedData);
  const processedBuffer = new TextEncoder().encode(processedJson).buffer;

  self.postMessage(processedBuffer, [processedBuffer]);
};

function processData(data) {
  const theadColumns = createTheadColumns(data);
  const tbodyRows = createTbodyRows(data);

  return {
    theadColumns,
    tbodyRows,
  };

  function createTheadColumns(data) {
    const columns = Object.keys(data[0])
      .map((key) => `<th>${key}</th>`)
      .join("");

    return `<tr>${columns}</tr>`;
  }

  function createTbodyRows(data) {
    return data
      .map((row) => {
        return `
          <tr>
            ${Object.values(row)
              .reduce((acc, column, index) => {
                if (index <= 6) {
                  acc.push(`<td>${column}</td>`);
                }

                return acc;
              }, [])
              .join("")}
          </tr>
      `;
      })
      .join("");
  }
}
