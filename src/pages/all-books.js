import React, { Component } from 'react'

class AllBooks extends Component {
  constructor (props) {
    super(props)

    const bookData = [
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
    
    this.state = {
      bookList: bookData
    }
  }

  render() {
    const bookList = this.state.bookList
    return (
      <div className="content content-block-container">
        <div className="book-list">
          {
            bookList.map(book => {
              return (
                <div key={book.id} className="card book-preview">
                  <div className="text-block">
                    <h2>{book.title}</h2>
                    <p>Author(s): {book.author}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default AllBooks
