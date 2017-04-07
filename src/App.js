import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Homepage from './pages/homepage.js'
import AllBooks from './pages/all-books.js'
import AllStyles from './styleguide/views/all.js'
import Sandbox from './styleguide/views/sandbox.js'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <div className="styleguide-header">
            <header className="navigation">
              <div className="content-block-container">
                <a href="/" className="logo link-white-base">Home</a>
                <nav>
                  <ul>
                    <li><Link to="/all-books">View Books</Link></li>
                    <li><Link to="/sell-books">Sell Books</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <Route exact path="/" component={ Homepage }/>
          <Route path="/all-books" component={ AllBooks }/>
          <Route path="/styleguide/all" component={ AllStyles } />
          <Route path="/styleguide/sandbox" component={ Sandbox } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App