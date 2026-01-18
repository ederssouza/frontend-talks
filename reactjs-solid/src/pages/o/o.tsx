import { Tabs } from "../../components";

function O() {
  return (
    <div>
      <header>
        <h1>
          S<span>O</span>LID
        </h1>
        <span>Open/Closed Principle</span>
        <p>
          Classes devem ser abertas para extensão, mas fechadas para
          modificação.
        </p>
      </header>

      <Tabs
        badExample={<div>Exemplo Ruim</div>}
        goodExample={<div>Exemplo Bom</div>}
      />
    </div>
  );
}

export default O;
