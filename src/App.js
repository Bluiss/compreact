// src/App.js
import React from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <h1>My API Data</h1>
      <MyComponent />{" "}
      {/* Load the component that fetches and displays API data */}
    </div>
  );
}

export default App;
