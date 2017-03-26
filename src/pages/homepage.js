import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="/">Home</a>
          <nav>
            <ul>
              <li><Link to="/all-books">View Books</Link></li>
              <li><Link to="/sell-books">Sell Books</Link></li>
            </ul>
          </nav>
        </header>
        <h2>Hello World! Welcome to the Hit the Books App!</h2>
      </div>
    );
  }
}

export default Homepage;
