import React, { Component } from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import Homepage from './pages/homepage.js'
import AllStyles from './styleguide/views/all.js'
import Sandbox from './styleguide/views/sandbox.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <a href="/">Home</a>
            <nav>
              <ul>
                <li><NavLink to="/all-books" activeClassName="is-active">View Books</NavLink></li>
                <li><NavLink to="/sell-books" activeClassName="is-active">Sell Books</NavLink></li>
              </ul>
            </nav>
          </header>
          <Route exact path="/" component={ Homepage }/>
          <Route path="/styleguide/all" component={ AllStyles } />
          <Route path="/styleguide/sandbox" component={ Sandbox } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
