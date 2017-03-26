import React, { Component } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import './App.css';
import Homepage from './homepage'

class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Homepage } />
      </Router>
    );
  }
}

export default App;
