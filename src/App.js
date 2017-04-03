import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/homepage.js'
import AllStyles from './styleguide/views/all.js'
import Sandbox from './styleguide/views/sandbox.js'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/home" component={ Homepage } />
          <Route path="/styleguide/all" component={ AllStyles } />
          <Route path="/styleguide/sandbox" component={ Sandbox } />
        </div>
      </HashRouter>
    );
  }
}

export default App;
