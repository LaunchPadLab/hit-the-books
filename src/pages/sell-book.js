import React, { Component } from 'react'

class SellBook extends Component {
  constructor (props) {
    super(props)

    this.state = this.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitBook = this.submitBook.bind(this)
  }

  getState () {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    const { id } = bookList[bookList.length-1]

    return {
      bookList,
      newBook: {
        id: id + 1,
        title: '',
        author: '',
        course: '',
        isbn: '',
        sellerName: '',
        sellerEmail: '',
        description: ''
      }
    }
  }

  handleInputChange (event) {
    const { target } = event
    const { name, value } = target
    const { newBook } = this.state

    this.setState({
      newBook: {
        ...newBook,
        [name]: value
      }
    })
  }

  submitBook (event) {
    event.preventDefault()

    const { newBook, bookList } = this.state
    bookList.push(newBook)
    localStorage.setItem('bookList', JSON.stringify(bookList))
    this.setState(this.getState())
  }

  render () {
    const { newBook } = this.state

    return (
      <div>
        <h2>Sell a Book</h2>
        <form onSubmit={this.submitBook}>
          <label htmlFor="sellerName">Your Name</label>
          <input type="text" name="sellerName" value={newBook.sellerName} onChange={this.handleInputChange} />
          <label htmlFor="sellerEmail">Your Email</label>
          <input type="text" name="sellerEmail" value={newBook.sellerEmail} onChange={this.handleInputChange} />
          <label htmlFor="title">Book Title</label>
          <input type="text" name="title" value={newBook.title} onChange={this.handleInputChange} />
          <label htmlFor="author">Author(s)</label>
          <input type="text" name="author" value={newBook.author} onChange={this.handleInputChange} />
          <label htmlFor="isbn">ISBN</label>
          <input type="text" name="isbn" value={newBook.isbn} onChange={this.handleInputChange} />
          <label htmlFor="course">Course</label>
          <input type="text" name="course" value={newBook.course} onChange={this.handleInputChange} />
          <label htmlFor="description">Book Description</label>
          <input type="text" name="description" value={newBook.description} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SellBook
