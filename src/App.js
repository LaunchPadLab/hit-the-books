import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage.js'
import AllBooks from './pages/all-books.js'
import SellBook from './pages/sell-book.js'
import { bookData } from './book-data'

class App extends Component {
  componentWillMount() {
    const existingBooks = JSON.parse(localStorage.getItem('bookList'))
    let booksToAdd = bookData
    if (existingBooks) booksToAdd = existingBooks
    localStorage.setItem('bookList', JSON.stringify(booksToAdd))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <a href="/">Home</a>
            <nav>
              <ul>
                <li><Link to="/all-books">View Books</Link></li>
                <li><Link to="/sell-book">Sell Books</Link></li>
              </ul>
            </nav>
          </header>
          <Route exact path="/" component={ Homepage } />
          <Route path="/all-books" component={ AllBooks }/>
          <Route path="/sell-book" component={ SellBook }/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
