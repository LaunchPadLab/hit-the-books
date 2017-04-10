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
      <div className="content content-block-container">
        <div className="row">
          <div className="card col-6">
            <h2>{ title }</h2>
            <table>
              <tr>
                <td><p>Seller Name:</p></td>
                <td><p>{ sellerName }</p></td>
              </tr>
              <tr>
                <td><p>Author(s):</p></td>
                <td><p>{ author }</p></td>
              </tr>
              <tr>
                <td><p>ISBN:</p></td>
                <td><p>{ isbn }</p></td>
              </tr>
              <tr>
                <td><p>Course:</p></td>
                <td><p>{ course }</p></td>
              </tr>
              <tr>
                <td><p>Desciption:</p></td>
                <td><p>{ description }</p></td>
              </tr>
            </table>
          </div>
          
          <div className="card col-3">
            <h2>Interested?</h2>
            <p>Negotiate your price and get the book you need fast.</p>
            <a href={`mailto:${sellerEmail}`} className="button-primary">Contact Seller</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetails
