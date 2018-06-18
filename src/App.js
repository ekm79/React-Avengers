import React, { Component } from 'react';
import './App.css';
import avengers from './avengersData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers: by Erin Meredith</h1>
        </header>
        {this.state.avengers.map(avenger => {
          return <p> {avenger} </p>
        })}

       
      </div>
    );
  }
}

export default App;
