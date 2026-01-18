import { Tabs } from "../../components";

function D() {
  return (
    <div>
      <header>
        <h1>
          SOLI<span>D</span>
        </h1>
        <span>Dependency Inversion Principle</span>
        <p>Dependa de abstrações, não de implementações.</p>
      </header>

      {/* https://blog.shadui.dev/implementing-dependency-injection-in-a-react-project/?ref=dailydev */}

      <Tabs
        badExample={<div>Exemplo Ruim</div>}
        goodExample={<div>Exemplo Bom</div>}
      />
    </div>
  );
}

export default D;
