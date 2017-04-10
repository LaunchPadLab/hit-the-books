import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllBooks extends Component {
  componentWillMount() {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    this.setState({ bookList: bookList })
  }

  render() {
    const bookList = this.state.bookList
    return (
      <div className="content content-block-container">
        <div className="book-list">
          {
            bookList.map(book => {
              const bookLink = `/book-details/${book.id}`
              return (
                <div key={book.id} className="card book-preview">
                  <div className="text-block">
                    <Link to={bookLink}><h2>{book.title}</h2></Link>
                    <p>Author(s): {book.author}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default AllBooks
