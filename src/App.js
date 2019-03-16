import React, { Component } from 'react';
import './App.css';

import Inicio from './Home/Inicio'

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
       
        <Inicio />
      </div>
    );
  }
}

export default App;
