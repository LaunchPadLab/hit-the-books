import React, { Component } from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage.js'

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
        </div>
      </BrowserRouter>
    )
  }
}

export default App
