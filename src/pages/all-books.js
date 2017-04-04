import React, { Component } from 'react';

class AllBooks extends Component {
  componentWillMount() {
    const books = [
      {
        id: 1,
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        isbn: '9781534968998',
        course: 'ENGL101',
        sellerName: 'Wade Novak',
        sellerEmail: 'wade@launchpadlab.com',
        description: 'A Tale of Two Cities is a novel by Charles Dickens, set in London and Paris before and during the French Revolution.'
      },
      {
        id: 2,
        title: 'Intro to the Periodic Table of Elements',
        author: 'Jessica Shaw',
        isbn: '1111111111111',
        course: 'CHEM105',
        sellerName: 'Sally Smith',
        sellerEmail: 'sally@example.com',
        description: 'An introduction to the periodic table of elements for chemistry students.'
      },
      {
        id: 3,
        title: 'Bossanova in the Brazilian Era',
        author: 'Joao Gilberto',
        isbn: '2222222222222',
        course: 'MUSIC333',
        sellerName: 'James Delgado',
        sellerEmail: 'james@example.com',
        description: 'Introduces the Bossanova, which is today one of the best-known Brazilian music genres abroad.'
      }
    ]
    this.setState({ bookList: books })
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
