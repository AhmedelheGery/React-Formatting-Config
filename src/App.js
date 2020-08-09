import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://img.icons8.com/all/500/settings.png"
          className="App-logo"
        />
        <form action="">
          <input
            type="text"
            placeholder="Enter your config"
            style={{ padding: "5%" }}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
