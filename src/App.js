import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
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
                <li><Link to="/all-books">View Books</Link></li>
                <li><Link to="/sell-books">Sell Books</Link></li>
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
