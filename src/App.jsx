import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Git rebase -i</h1>
      <div className="card">
        <h1>Cities</h1>
        <br />
        <h2>London</h2>
        <h2>Birmingham</h2>
        <h2>Manchester</h2>
        <h2>Leeds</h2>
        <h2>Glasgow</h2>
        <h2>York</h2>
        <h2>Reading</h2>
        <h2>Sheffield</h2>
      </div>
    </>
  );
}

export default App;
