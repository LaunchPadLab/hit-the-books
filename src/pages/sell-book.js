import React, { Component } from 'react';

class SellBook extends Component {
  constructor (props) {
    super(props)

    const bookList = JSON.parse(localStorage.getItem('bookList'))
    const lastItemId = bookList[bookList.length-1].id
    this.state = {
      book: {
        id: lastItemId + 1,
        title: '',
        author: '',
        course: '',
        isbn: '',
        sellerName: '',
        sellerEmail: '',
        description: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitBook = this.submitBook.bind(this)
  }

  handleInputChange(event) {
    const { target } = event
    const { name, value } = target
    const { book } = this.state

    this.setState({
      book: {
        ...book,
        [name]: value
      }
    })
  }

  submitBook(event) {
    event.preventDefault()
    console.log(this.state.book)

  }

  render() {
    const { book } = this.state

    return (
      <div>
        <h2>Sell a Book</h2>
        <form onSubmit={this.submitBook}>
          <label for="sellerName">Your Name</label>
          <input type="text" name="sellerName" value={book.sellerName} onChange={this.handleInputChange} />
          <label for="sellerEmail">Your Name</label>
          <input type="text" name="sellerEmail" value={book.sellerEmail} onChange={this.handleInputChange} />
          <label for="title">Book Title</label>
          <input type="text" name="title" value={book.title} onChange={this.handleInputChange} />
          <label for="author">Author(s)</label>
          <input type="text" name="author" value={book.author} onChange={this.handleInputChange} />
          <label for="isbn">ISBN</label>
          <input type="text" name="isbn" value={book.course} onChange={this.handleInputChange} />
          <label for="course">Course</label>
          <input type="text" name="course" value={book.course} onChange={this.handleInputChange} />
          <label for="description">Book Description</label>
          <input type="text" name="description" value={book.course} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SellBook
