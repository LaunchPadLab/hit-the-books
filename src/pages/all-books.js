import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllBooks extends Component {
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
      <div className="content">
        <div className="search-block">
          <div className="content-block-container">
            <label>SEARCH</label>
            <input
              placeholder="What are you looking for?"
              value={query}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="content-block-container">
          <div className="book-list">
            <ul>
              {
                filteredBooks.map(book => {
                  const bookLink = `/book-details/${book.id}`
                  return (
                    <div key={book.id} className="card book-preview">
                      <div className="text-block">
                        <Link to={bookLink}><h2>{book.title}</h2></Link>
                        <p>Author(s): {book.author}</p>
                      </div>
                    </div>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AllBooks