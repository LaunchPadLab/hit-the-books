import React, { Component } from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import Homepage from './pages/homepage.js'
import AllBooks from './pages/all-books.js'
import AllStyles from './styleguide/views/all.js'
import Sandbox from './styleguide/views/sandbox.js'
import SellBook from './pages/sell-book.js'
import BookDetails from './pages/book-details.js'
import SearchBooks from './pages/search-books.js'
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
          <header className="navigation">
            <div className="content-block-container">
              <a href="/" className="logo link-white-base">Hit the Books</a>
              <nav>
                <ul>
                  <li><NavLink to="/sell-books" activeClassName="is-active">Sell Books</NavLink></li>
                  <li><NavLink to="/search" activeClassName="is-active">Buy Books</NavLink></li>
                </ul>
              </nav>
            </div>
          </header>
          <Route exact path="/" component={ Homepage }/>
          <Route path="/all-books" component={ AllBooks }/>
          <Route path="/sell-books" component={ SellBook }/>
          <Route path="/book-details/:id" component={ BookDetails }/>
          <Route path="/search" component={ SearchBooks }/>
          <Route path="/styleguide/all" component={ AllStyles } />
          <Route path="/styleguide/sandbox" component={ Sandbox } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App