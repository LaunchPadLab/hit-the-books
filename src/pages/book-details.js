import React, { Component } from 'react';

class BookDetails extends Component {
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
    return (
      <div>
        <h2>Book Details</h2>
      </div>
    );
  }
}

export default BookDetails;
