import React from 'react'

function All () {
  return (
    <div>
      <h2>Welcome to the styleguide!</h2>

      <header className="navigation">
        <a href="/" className="logo link-white-base">Hit the Books</a>
        <nav>
         <ul>
           <li><a href="#">Buy Books</a></li>
           <li><a href="#">Sell Books</a></li>
         </ul>
        </nav>
      </header>
      <section>
        <main className="content">
          <div className="header-container">
            <div className="card">
              <h2>Understanding Art <span>(10th Edition)</span></h2>
              <p>Authors: Lois Fichner-Rathus</p>
              <a href="#" className="button-primary">Contact Seller</a>
            </div>
          </div>
        </main>
      </section>
      <main className="content centered">
        <section>
          <div className="card">
            <h2>Sell a Book</h2>
            <fieldset>
              <label>Title</label>
              <input type="text" name="" placeholder="Placeholder Text" />
            </fieldset>
            <fieldset>
              <label>Authors</label>
              <input type="text" name="" placeholder="Placeholder Text" />
            </fieldset>
            <div className="row">
              <fieldset className="col-6">
                <label>Author</label>
                <input type="text" name="" placeholder="Placeholder Text" />
              </fieldset>
              <fieldset className="col-6">
                <label>Course</label>
                <input type="text" name="" placeholder="Placeholder Text" />
              </fieldset>
            </div>
            <fieldset>
              <label>Book Description</label>
              <textarea name="message" placeholder="What's this book about..."></textarea>
            </fieldset>
            <button className="button-primary">Place Book for Sale</button>
          </div>
        </section>
      </main>
      <main className="content">
        <section>
          <a href="#">Back to Search</a>
          <div className="card">
            <h2>Understanding Art <span>(10th Edition)</span></h2>
            <table>
              <tr>
              </tr>

            </table>
          </div>

          <div className="card">
            <h2>Interested?</h2>
            <p>Negotiate your price and get the book you need fast.</p>
            <a href="#" className="button-primary">Contact Seller</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default All
