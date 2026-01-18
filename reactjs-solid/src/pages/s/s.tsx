import { Tabs } from "../../components";

function S() {
  return (
    <div>
      <header>
        <h1>
          <span>S</span>OLID
        </h1>
        <span>Single Responsibility Principle</span>
        <p>
          Uma classe deve ter apenas uma responsabilidade e deve ser totalmente
          encapsulada.
        </p>
      </header>

      <Tabs
        badExample={<div>Exemplo Ruim</div>}
        goodExample={<div>Exemplo Bom</div>}
      />
    </div>
  );
}

export default S;
