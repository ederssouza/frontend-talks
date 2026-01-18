import { useState } from "react";

type TabsProps = {
  badExample: React.ReactNode;
  goodExample: React.ReactNode;
};

function Tabs({ badExample, goodExample }: TabsProps) {
  const [activeTab, setActiveTab] = useState<"bad" | "good">("bad");

  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
          margin: "2rem 0",
        }}
      >
        <li>
          <button onClick={() => setActiveTab("bad")}>❌ Exemplo Ruim</button>
        </li>
        <li>
          <button onClick={() => setActiveTab("good")}>✅ Exemplo Bom</button>
        </li>
      </ul>

      <div>
        {activeTab === "bad" && (
          <div>
            <h2>❌ Exemplo Ruim</h2>
            {badExample}
          </div>
        )}

        {activeTab === "good" && (
          <div>
            <h2>✅ Exemplo Bom</h2>
            {goodExample}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
