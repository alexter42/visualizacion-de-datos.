import React, { Component } from 'react';
import './App.css';
import Map from  './Map';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visualización de datos geoespaciales</h1>
        </header>
        <Map/>
        <footer className="App-footer">
          <div className="footer-content">@alexter42</div>
        </footer>
      </div>
    );
  }
}

export default App;
