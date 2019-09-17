import React from 'react';
import './App.css';
import GetData from "./components/GetData.js"; 

function App() {
  return (
    <div className="App">
      <h1> Dachshund Gallery </h1> 
      <GetData getData={GetData}/> 
    </div>
  );
}

export default App;
