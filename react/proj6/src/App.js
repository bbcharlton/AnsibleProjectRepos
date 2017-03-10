import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header text="Header with props." />
      </div>
    );
  }
}
