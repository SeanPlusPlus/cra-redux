import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Redux Demo</h2>
        <ItemList />
      </div>
    );
  }
}

export default App;
