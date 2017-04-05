import React, { Component } from 'react'

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
    const {
      title,
      author,
      isbn,
      course,
      description,
      sellerName,
      sellerEmail
    } = this.state.book

    return (
      <div>
        <h2>{ title }</h2>
        <ul>
          <li>Author(s): { author }</li>
          <li>ISBN: { isbn }</li>
          <li>Course: { course }</li>
          <li>Description: { description }</li>
          <li>Seller Name: { sellerName }</li>
        </ul>

        <div>
          <h2>Interested?</h2>
          <p>Negotiate your price and get the book you need fast.</p>
          <a href={`mailto:${sellerEmail}`}>Contact Seller</a>
        </div>
      </div>
    )
  }
}

export default BookDetails
