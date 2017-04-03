import React, { Component } from 'react';

class BookDetails extends Component {
  fetchCurrentBook (books) {
    const { params } = this.props.match
    const bookId = params.id
    return books.find((book) => book.id === parseInt(bookId, 10))
  }

  componentWillMount () {
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
    const book = this.fetchCurrentBook(books)

    this.setState({book: book})
  }

  render () {
    const book = this.state.book

    return (
      <div>
        <h2>{ book.name }</h2>
        <ul>
          <li>By: { book.author }</li>
          <li>Class: { book.class }</li>
          <li>{ book.price }</li>
          <li>Seller: { book.seller }</li>
        </ul>
      </div>
    );
  }
}

export default BookDetails;
