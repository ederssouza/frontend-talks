# Web Workers

## 1. Introdução ao Web Workers

### Conceito e utilidade dos Web Workers

Web Workers permitem que você execute código JavaScript em uma thread separada do thread principal. Isso é útil porque JavaScript é uma linguagem single-threaded, o que significa que só pode fazer uma coisa de cada vez. Se você tem operações pesadas, como cálculos matemáticos intensivos ou processamento de dados, isso pode bloquear o thread principal e tornar sua interface de usuário não responsiva. Os Web Workers resolvem esse problema permitindo que você execute essas operações em segundo plano, em uma thread separada.

### Diferença entre thread principal e threads de Web Workers

O thread principal é onde a maior parte da atividade do navegador ocorre, incluindo renderização, interação com o DOM e execução de JavaScript. Se este thread estiver ocupado, a página pode parecer congelada ou não responsiva.

Um Web Worker, por outro lado, não tem acesso ao DOM e é executado em sua própria thread. Isso significa que ele não interfere na interatividade ou na renderização da página.

### Benefícios e limitações

#### Benefícios

1. Melhora a responsividade ao realizar operações pesadas em segundo plano.
1. Aproveita CPUs multi-core, pois permite a execução de múltiplos threads em paralelo.
1. Separação de preocupações: código intensivo pode ser isolado do código da UI.

#### Limitações

1. Web Workers não têm acesso ao DOM.
1. A comunicação entre o thread principal e os Web Workers é feita através de mensagens, o que pode ter overhead.
1. Não é possível usar algumas APIs da janela principal dentro de um Web Worker.

## 2. Configurando o seu primeiro Web Worker

### Criando um arquivo de script separado para o Worker

Os Web Workers são executados em um arquivo JavaScript separado, isolado do script principal. Esse isolamento permite que o Worker execute tarefas sem interferir na thread principal.

```js
// worker.js

self.onmessage = function(event) {
  console.log("Mensagem recebida no Worker:", event.data);
}
```

### Inicializando um Worker: `new Worker('path/to/worker.js')`

Para iniciar um Web Worker, você deve inicializá-lo no script principal usando a função new Worker(). O argumento dessa função é o caminho do arquivo JavaScript que contém o código do Worker.

### Comunicação entre a página e o Worker: postMessage e onmessage

A comunicação entre o script principal e o Web Worker é realizada através do envio de mensagens.

- `postMessage()`: é usado para enviar mensagens. Pode ser chamado tanto do script principal quanto do script do Worker.
- `onmessage`: é um manipulador de eventos que é acionado quando uma mensagem é recebida.

## 3. Transferência de dados entre a página e o Worker

### Transferindo dados simples (texto, números)

Como já vimos anteriormente, podemos usar postMessage para enviar dados simples, como strings e números, para um Worker.

```js
// main.js
const myWorker = new Worker('worker.js');

myWorker.postMessage("Texto simples");
myWorker.postMessage(1234);
```

```js
// worker.js
self.onmessage = function(event) {
  console.log("Dado recebido no Worker:", event.data);
}
```

### Transferindo objetos complexos com `StructuredClone`

O algoritmo `StructuredClone` permite copiar objetos complexos, como arrays, objetos e até mesmo alguns tipos de objetos especializados, como `Map` e `Set`.

### Transferência de objetos com transferable objects para melhor desempenho

Transferable objects são uma maneira de transferir dados para um Worker sem realmente copiar os dados. Em vez disso, a propriedade é "transferida", o que significa que ela não estará mais acessível no contexto original, mas agora estará acessível no Worker. Isso é útil para transferir grandes quantidades de dados, como ArrayBuffers, para um Worker de forma mais eficiente.

```js
// main.js
const myWorker = new Worker('worker.js');
const buffer = new ArrayBuffer(8);  // Cria um ArrayBuffer de 8 bytes

myWorker.postMessage(buffer, [buffer]);
```

```js
// worker.js
self.onmessage = function(event) {
  console.log("ArrayBuffer recebido no Worker com tamanho:", event.data.byteLength);
}
```

Note que ao transferir o `buffer` para o Worker usando transferable objects, o `buffer` não estará mais acessível no script principal. Se tentarmos acessá-lo após a chamada `postMessage`, ele terá um tamanho de byteLength de 0.

Esta técnica de transferência é muito útil quando você precisa manipular grandes conjuntos de dados em um Worker sem o custo de duplicar a memória.

Lembre-se de que nem todos os tipos de dados podem ser transferidos como transferable objects. Os mais comuns são `ArrayBuffer` e suas visualizações, como `Int32Array`, `Float32Array`, etc.

## 4. Ciclo de vida de um Web Worker

Um Web Worker possui um ciclo de vida bem definido desde a sua criação até a sua finalização. Vamos abordar as etapas desse ciclo e como gerenciar um Web Worker durante a sua vida útil.

### Iniciando, parando (terminate()) e reiniciando Workers

#### Iniciando um Web Worker

Você inicia um Web Worker criando uma nova instância da classe Worker, passando o caminho do script que o Web Worker executará:

```js
const worker = new Worker('path/to/worker.js');
```

#### Parando um Web Worker

Você pode interromper um Web Worker a qualquer momento usando o método `terminate()`:

```js
worker.terminate();
```

Após chamar `terminate()`, o Web Worker é imediatamente finalizado e não pode mais ser usado. Qualquer código em execução no Worker é interrompido e qualquer mensagem pendente não é entregue.

#### Reiniciando um Web Worker

Web Workers não possuem um método "restart" explícito. Para "reiniciar" um Worker, você deve terminá-lo (usando `terminate()`) e depois criar uma nova instância:

```js
worker.terminate();
worker = new Worker('path/to/worker.js');
```

### Tratando erros com `onerror`

Os erros que ocorrem dentro de um Web Worker não afetam o script principal, mas você pode querer ser notificado quando eles ocorrem para tomar alguma ação (como registrar o erro ou reiniciar o Worker).

Você pode fazer isso usando o evento `onerror`:

```js
worker.onerror = function(errorEvent) {
  console.error("Erro no Worker:", errorEvent.message);
  console.error("No arquivo:", errorEvent.filename);
  console.error("Na linha:", errorEvent.lineno);
  console.error("Na coluna:", errorEvent.colno);
};
```

Aqui, `errorEvent` é um objeto que contém detalhes sobre o erro, como a mensagem de erro, o arquivo em que o erro ocorreu e a posição exata do erro.

```js
// Iniciar Worker
const worker = new Worker('path/to/worker.js');

// Lidar com erros
worker.onerror = function(errorEvent) {
  console.error("Erro no Worker:", errorEvent.message);
  // Por exemplo, você pode optar por reiniciar o Worker quando um erro ocorre
  worker.terminate();
  worker = new Worker('path/to/worker.js');
};

// Alguma lógica adicional...
// ...

// Se necessário, termine o Worker
worker.terminate();
```

Lembre-se de que a comunicação entre o script principal e o Web Worker é isolada. Erros que ocorrem no Worker não afetam o script principal e vice-versa, o que torna os Web Workers uma ferramenta robusta para execução de tarefas em paralelo.

## 5. Web Workers dedicados vs. Shared Workers

Os Web Workers permitem que os scripts sejam executados em threads separadas da thread principal do navegador. Existem dois tipos principais de Web Workers: Dedicated Workers e Shared Workers. Vamos entender a diferença entre eles e como cada um funciona.

### Entendendo Web Workers dedicados

Os Dedicated Workers são o tipo mais comum de Web Workers. Eles são "dedicados" porque estão ligados exclusivamente à página ou ao script que os criou. Eles não podem ser acessados ou utilizados por outros scripts ou páginas.

#### Características

- Ligado a uma única página ou script.
- Não pode ser compartilhado ou acessado por múltiplas páginas ou iframes.
- A comunicação é geralmente feita usando `postMessage` e `onmessage`.

```js
const dedicatedWorker = new Worker('dedicatedWorker.js');

dedicatedWorker.onmessage = function(event) {
  console.log("Mensagem recebida do Dedicated Worker:", event.data);
};

dedicatedWorker.postMessage("Olá, Dedicated Worker!");
```

### Introdução ao Shared Workers e suas vantagens

Shared Workers permitem que múltiplas páginas ou iframes, do mesmo domínio, acessem e comuniquem-se com um único Worker. Isso é útil quando você tem várias páginas ou componentes que precisam compartilhar recursos, cálculos ou conexões.

#### Vantagens

- Recursos compartilhados: Pode ser útil para compartilhar dados ou conexões (como conexões WebSocket) entre várias páginas/telas.
- Economia de recursos: Em vez de iniciar um Worker para cada página ou iframe, você pode ter um único Shared Worker que atende a todas essas páginas.

### Inicializando e comunicando-se com Shared Workers

Para criar um Shared Worker, você usa a classe `SharedWorker`:

```js
const sharedWorker = new SharedWorker('sharedWorker.js');
```

A comunicação com um Shared Worker é um pouco diferente. Você não se comunica diretamente com o objeto `sharedWorker`, mas sim com sua porta (port).

```js
// main.js
const sharedWorker = new SharedWorker('sharedWorker.js');

// Ouvindo mensagens do Shared Worker
sharedWorker.port.onmessage = function(event) {
  console.log("Mensagem recebida do Shared Worker:", event.data);
};

// Enviando mensagem para o Shared Worker
sharedWorker.port.postMessage("Olá, Shared Worker!");

// Iniciando o porto para começar a receber mensagens
sharedWorker.port.start();
```

```js
// sharedWorker.js

// Ouvindo conexões
self.onconnect = function(event) {
  const port = event.ports[0];

  // Ouvindo mensagens enviadas através do porto
  port.onmessage = function(event) {
    console.log("Mensagem recebida no Shared Worker:", event.data);

    // Enviando uma resposta
    port.postMessage("Olá, página!");
  };

  port.start();
};
```

Em resumo, enquanto Dedicated Workers são específicos para a página que os criou, Shared Workers podem ser compartilhados entre várias páginas ou iframes do mesmo domínio, permitindo um nível adicional de colaboração e compartilhamento de recursos.

## 6. Importando scripts em Workers

- Utilizando importScripts()
- Considerações de desempenho ao importar scripts

## 7. Utilização de bibliotecas e frameworks com Web Workers

- Introdução a bibliotecas populares para Web Workers (como workerize e comlink)
- Integrando Web Workers com frameworks como React, Vue e Angular

## 8. Padrões de design com Web Workers

- Chunking: dividindo tarefas em pedaços para melhor resposta ao usuário
- Pooling: criando um conjunto de Workers e reutilizando-os
- OffscreenCanvas: renderização fora da tela em Web Workers para gráficos e animações

## 9. Otimizações e melhores práticas

- Monitoramento do desempenho dos Workers
- Evitando bloqueios e garantindo a responsividade da UI
- Estratégias de comunicação eficientes e redução do overhead

## 10. Casos de uso avançados e estudos de caso

- Web Workers em jogos web para física e IA
- Processamento de imagem e vídeo em segundo plano
- Simulações e cálculos complexos

## 11. Ferramentas e recursos adicionais

- Ferramentas de desenvolvimento para depuração e monitoramento de Web Workers
- Bibliotecas e plugins adicionais para ampliar as capacidades dos Workers

## 12. Projetos práticos

- Criar um processador de imagens com Web Workers
- Desenvolver um jogo simples usando Web Workers para lógica em segundo plano
- A medida que você avançar nesse cronograma, tente criar pequenos projetos ou exemplos práticos para solidificar o que aprendeu. A prática é essencial para compreender completamente como os Web Workers funcionam e como podem ser utilizados eficientemente. Boa sorte em seus estudos!