import React from 'react';
import './App.css';
import GetData from "./components/GetData.js"; 
import Styled from "styled-components"; 

const Color = Styled.div`
background: gray; 
`

function App() {
  return (
    <div className="App">
      <h1> Dachshund Gallery </h1> 
      <GetData /> 
    </div>
  );
}

export default App;
