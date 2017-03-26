import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage.js'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={ Homepage } />
      </HashRouter>
    );
  }
}

export default App;
