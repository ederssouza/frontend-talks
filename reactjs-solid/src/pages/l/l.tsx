import { Tabs } from "../../components";

function L() {
  return (
    <div>
      <header>
        <h1>
          SO<span>L</span>ID
        </h1>
        <span>Liskov Substitution Principle</span>
        <p>Classes derivadas devem ser substituíveis por suas classes base.</p>
      </header>

      <Tabs
        badExample={<div>Exemplo Ruim</div>}
        goodExample={<div>Exemplo Bom</div>}
      />
    </div>
  );
}

export default L;
