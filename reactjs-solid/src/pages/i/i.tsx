import { Tabs } from "../../components";

function I() {
  return (
    <div>
      <header>
        <h1>
          SOL<span>I</span>D
        </h1>
        <span>Interface Segregation Principle</span>
        <p>
          Clientes não devem ser forçados a depender de interfaces que não usam.
        </p>
      </header>

      <Tabs
        badExample={<div>Exemplo Ruim</div>}
        goodExample={<div>Exemplo Bom</div>}
      />
    </div>
  );
}

export default I;
