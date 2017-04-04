import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    );
  }
}

export default AllBooks;
