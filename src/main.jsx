import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import HomePage from "./components/HomePage";
import "./styles/index.css";
import "./styles/common.css";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        {/* <Route path="/projects" element={<Projects />}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
