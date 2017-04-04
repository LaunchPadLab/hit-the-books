import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage.js'
import AllBooks from './pages/all-books.js'
import SellBook from './pages/sell-book.js'

class App extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <a href="/home">Home</a>
            <nav>
              <ul>
                <li><Link to="/all-books">View Books</Link></li>
                <li><Link to="/sell-book">Sell Books</Link></li>
              </ul>
            </nav>
          </header>
          <Route path="/home" component={ Homepage }/>
          <Route path="/all-books" component={ AllBooks }/>
          <Route path="/sell-book" component={ SellBook }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
