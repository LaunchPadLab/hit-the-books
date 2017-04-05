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

    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
  }

  handleChange (event) {
    const { value } = event.target
    const loweredValue = value.toLowerCase()
    this.search(loweredValue)
  }

  search (query) {
    const { allBooks } = this.state

    const queryResult = allBooks.filter((book) => {
      const { title } = book
      return title.toLowerCase().includes(query)
    })

    this.setState({
      filteredBooks: queryResult,
      query: query
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
          onChange={this.handleChange}
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
