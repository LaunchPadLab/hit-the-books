import React, { Component } from 'react';

class AllBooks extends Component {
  componentWillMount() {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    this.setState({ bookList: bookList })
  }

  render() {
    const bookList = this.state.bookList
    return (
      <div>
        <h2>All Books</h2>
        <ul>
          {
            bookList.map(book => {
              return <li key={book.id}>{book.title} ({book.author})</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default AllBooks;
