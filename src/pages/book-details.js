import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookDetails extends Component {
  fetchCurrentBook () {
    const { params } = this.props.match
    const bookId = params.id
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    return bookList.find((book) => book.id === parseInt(bookId, 10))
  }

  componentWillMount () {
    const book = this.fetchCurrentBook()
    this.setState({ book: book })
  }

  render () {
    const book = this.state.book

    return (
      <div>
        <Link to="/search">Back to Search</Link>
        <h2>{ book.title }</h2>
        <ul>
          <li>Author(s): { book.author }</li>
          <li>ISBN: { book.isbn }</li>
          <li>Course: { book.course }</li>
          <li>Description: { book.description }</li>
          <li>Seller Name: { book.sellerName }</li>
        </ul>

        <div>
          <h2>Interested?</h2>
          <p>Negotiate your price and get the book you need fast.</p>
          <a href={`mailto:${book.sellerEmail}`}>Contact Seller</a>
        </div>
      </div>
    )
  }
}

export default BookDetails
