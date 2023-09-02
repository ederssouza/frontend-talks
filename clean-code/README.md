# Clean Code

## Nomes Significativos

- Use nomes descritivos para variáveis e funções e que revelem a intenção;
- Evite nomes muito curtos e abstrações desnecessárias;
- Use palavras pronunciáveis e evite siglas.

### ❌ Ruim

```js
function d(d1, d2) {
  return d1 - d2
}
```

### ✅ Bom

```js
function calculateDiffDates(startDate, endDate) {
  return endDate - startDate;
}
```

## Funções

- Devem ser pequenas e fazer apenas uma coisa;
- Use um número mínimo de argumentos (dois) ou utilize objetos para passar muitos parâmetros;
- Evite efeitos colaterais (side effects);
- Prefira exceções a códigos de retorno.

### ❌ Ruim

```js
function createUser(data) {
  validateUserData(data)
  saveToDatabase(data)
  sendEmail(data)
}
```

### ✅ Bom

```js
function createUser(info) {
  if (!validateUserData(info)) {
    throw new Error('Invalid user data')
  }

  saveToDatabase(data)
  sendEmail(data)
}
```

## Comentários

- O código deve ser autoexplicativo, minimizando a necessidade de comentários;
- Comentários devem ser usados para esclarecer, não para compensar código confuso;
- Evite comentários redundantes ou irrelevantes.

### ❌ Ruim

```js
// sum a and b
function sum(n1, n2) {
  return a + b
}
```

### ✅ Bom

```js
function sum(number1, number2) {
  return number1 + number2
}
```

## Formatação

- Mantenha uma formatação consistente;
- Agrupe funcionalidades relacionadas;
- Mantenha linhas de código curtas.

### ❌ Ruim

```js
function sum(number1, number2){return number1+number2}
```

### ✅ Bom

```js
function sum(number1, number2) {
  return number1 + number2
}
```

## Objetos e Estruturas de Dados

- Prefira o uso de objetos privados com comportamento;
- Evite estruturas de dados públicas sem comportamento.

### ❌ Ruim

```js
const car = { brand: "Toyota", model: "Corolla" };
```

### ✅ Bom

```js
class Car {
  constructor(brand, model, color) {
    this._brand = brand;
    this._model = model;
  }

  getBrand() {
    return this._brand;
  }
}
```

## Tratamento de Erro

- Use exceções em vez de códigos de retorno;
- Escreva testes que forcem exceções;
- Não retorne `null`.

### ❌ Ruim

```js
function divide(number1, number2) {
  if (number2 === 0) return "Error"
  return number1 / number2
}
```

### ✅ Bom

```js
function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Division by zero not allowed")
  }

  return number1 / number2
}
```

## Limites

- Mantenha interfaces limpas para separar sistemas;
- Evite usar código de terceiros diretamente; use um adaptador.

### ❌ Ruim

```js
import thirdPartyLib from "thirdPartyLib"

thirdPartyLib.function()
```

### ✅ Bom

```js
import thirdPartyLib from "thirdPartyLib";

function adaptedFunction() {
  return thirdPartyLib.function()
}

adaptedFunction()
```

## Classes

- Devem ser pequenas e ter apenas uma razão para mudar (Princípio da Responsabilidade Única);
- Mantenha o número de variáveis de instância limitado.

### ❌ Ruim

```js
class User {
  constructor(name, email, password, address, phone) {
    //...
  }
}
```

### ✅ Bom

```js
class User {
  constructor(name, email) {
    //...
  }
}
```

## Smells e Heurísticas

O livro também descreve vários "code smells" (indicadores de problemas no código) e heurísticas de refatoração. Mas para esse exemplo, vamos utilizar a heurística da "cláusula guarda".

> *A cláusula guarda (ou "guard clause") é uma técnica usada em programação para tratar condições excepcionais logo no início de uma função ou método, permitindo que a lógica principal da função permaneça menos indentada e, portanto, mais legível.*

### ❌ Ruim

```js
function divide(number1, number2) {
  if (number2 !== 0) {
    return number1 / number2
  } else {
    throw new Error("Division by zero is not allowed.")
  }
}
```

### ✅ Bom

```js
function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Division by zero is not allowed.")
  }

  return number1 / number2
}
```
