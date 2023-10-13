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

- Transferindo dados simples (texto, números)
- Transferindo objetos complexos com StructuredClone
- Transferência de objetos com transferable objects para melhor desempenho

## 4. Ciclo de vida de um Web Worker

- Iniciando, parando (terminate()) e reiniciando Workers
- Tratando erros com onerror

## 5. Web Workers dedicados vs. Shared Workers

- Entendendo Web Workers dedicados
- Introdução ao Shared Workers e suas vantagens
- Inicializando e comunicando-se com Shared Workers

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