import React from 'react';
import './App.css';
import GetData from "./components/GetData.js"; 
import Styled from "styled-components"; 

const Background = Styled.div`
background-image: url("https://wallpaperbro.com/img/124891.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
`

function App() {
  return (
    <Background> 
    <div className="App">
      <h1> Dachshund Gallery </h1> 
      <GetData /> 
    </div>
    </Background>
  );
}

export default App;

