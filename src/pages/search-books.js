import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  constructor (props) {
    super(props)

    const allBooks = JSON.parse(localStorage.getItem('bookList'))
    this.state = {
      allBooks: allBooks,
      filteredBooks: allBooks,
      query: ''
    }

    this.search = this.search.bind(this)
  }

  search (event) {
    const { allBooks } = this.state
    const { value } = event.target
    const loweredValue = value.toLowerCase()
    let queryResult = []

    allBooks.forEach((book) => {
      const { title } = book
      if (title.toLowerCase().indexOf(loweredValue) !== -1 ) queryResult.push(book)
    })

    this.setState({
      filteredBooks: queryResult,
      query: value
    })
  }

  render () {
    const { filteredBooks, query } = this.state

    return (
      <div>
        <input
          placeholder="What are you looking for?"
          style={{ width: '200px' }}
          value={query}
          onChange={this.search}
        />

        <ul>
          {
            filteredBooks.map(book => {
              const bookLink = `/book-details/${book.id}`
              return (
                <li key={book.id}>
                  <Link to={bookLink}>{book.title}</Link> ({book.author})
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default SearchBooks
