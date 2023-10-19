import { useState } from "react";
import "./App.css";
import DataFetcher from "./components/dataFetcher";

function App() {
  return (
    <div className="App">
      <h1>Data dari Random User Generator API</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
