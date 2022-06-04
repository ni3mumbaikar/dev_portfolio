import { useState } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        <HomePage />
        <Projects />
      </>
    </div>
  );
}

export default App;
