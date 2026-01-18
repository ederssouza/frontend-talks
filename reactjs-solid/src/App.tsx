import { Link, Outlet } from "react-router";

function App() {
  return (
    <main className="app">
      <ul className="menu">
        <li>
          <Link to="/s">S</Link>
        </li>
        <li>
          <Link to="/o">O</Link>
        </li>
        <li>
          <Link to="/l">L</Link>
        </li>
        <li>
          <Link to="/i">I</Link>
        </li>
        <li>
          <Link to="/d">D</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}

export default App;
