import React, { Component } from 'react';

class AllBooks extends Component {
  componentWillMount() {
    this.setState({ book: {} })
  }

  submitBook(e) {
    e.preventDefault()
    console.log(this.state.book)
  }

  render() {
    const book = this.state.book
    return (
      <div>
        <h2>Add a Book For Sale</h2>
        <form onSubmit={this.submitBook.bind(this)}>
          <label>
            Name:
            <input type="text" name="name" value={book.name} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={book.author} />
          </label>
          <label>
            Course:
            <input type="text" name="course" value={book.course} />
          </label>
          <label>
            Price
            <input type="text" name="price" value={book.price} />
          </label>
          <label>
            Your Name:
            <input type="text" name="seller_name" value={book.seller_name} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AllBooks;
