import React, { Component } from 'react';

class AllBooks extends Component {
  componentWillMount() {
    const books = [
      {
        id: 1,
        name: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        class: 'ENGL101',
        price: '$12.00',
        seller: 'Wade Novak'
      },
      {
        id: 2,
        name: 'Intro to the Periodic Table of Elements',
        author: 'Jessica Shaw',
        class: 'CHEM105',
        price: '$55.00',
        seller: 'Sally Smith'
      },
      {
        id: 3,
        name: 'Bossanova in the Brazillan Era',
        author: 'Joao Gilberto',
        class: 'MUSIC333',
        price: '$25.00',
        seller: 'James Delgado'
      }
    ]
    this.setState({bookList: books})
  }

  render() {
    const bookList = this.state.bookList
    return (
      <div>
        <h2>All Books</h2>
        <ul>
          {
            bookList.map(book => {
              return <li key={book.id}>{book.name} ({book.price})</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default AllBooks;
