import InputToDo from "./componets/InputToDo/InputToDo"
import './App.css';
import { useState } from "react";

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        <InputToDo />
        
      </header>
    </div>
  );
}

export default App;
