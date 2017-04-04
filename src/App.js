import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage.js'
import AllBooks from './pages/all-books.js'
import SellBook from './pages/sell-book.js'
import BookDetails from './pages/book-details.js'

class App extends Component {
  componentWillMount() {
    const books = [
      {
        id: 1,
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        isbn: '9781534968998',
        course: 'ENGL101',
        sellerName: 'Wade Novak',
        sellerEmail: 'wade@launchpadlab.com',
        description: 'A Tale of Two Cities is a novel by Charles Dickens, set in London and Paris before and during the French Revolution.'
      },
      {
        id: 2,
        title: 'Intro to the Periodic Table of Elements',
        author: 'Jessica Shaw',
        isbn: '1111111111111',
        course: 'CHEM105',
        sellerName: 'Sally Smith',
        sellerEmail: 'sally@example.com',
        description: 'An introduction to the periodic table of elements for chemistry students.'
      },
      {
        id: 3,
        title: 'Bossanova in the Brazilian Era',
        author: 'Joao Gilberto',
        isbn: '2222222222222',
        course: 'MUSIC333',
        sellerName: 'James Delgado',
        sellerEmail: 'james@example.com',
        description: 'Introduces the Bossanova, which is today one of the best-known Brazilian music genres abroad.'
      }
    ]
    const existingBooks = JSON.parse(localStorage.getItem('bookList'))

    let booksToAdd = books
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
          <Route path="/book-details/:id" component={ BookDetails }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
