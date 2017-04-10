import React from 'react'

function Sandbox () {
  return (
    <section>
      <header className="navigation">
        <div className="content-block-container">
          <a href="/" className="logo link-white-base">Hit the Books</a>
          <nav>
            <ul>
             <li><a href="#" className="is-active">Buy Books</a></li>
             <li><a href="#">Sell Books</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="content">
        <div className="search-block">
          <div className="content-block-container">
            <label>SEARCH</label>
            <input type="text" name="" placeholder="What are you looking for?" />
          </div>
        </div>
        <div className="content-block-container">
          <p><strong>Recently Added Books</strong></p>
          <div className="book-list">
            <div className="card book-preview">
              <div className="text-block">
                <h2>Understanding Art <span>(10th Edition)</span></h2>
                <p>Authors: Lois Fichner-Rathus</p>
              </div>
              <a href="#" className="button-primary">Contact Seller</a>
            </div>
            <div className="card book-preview">
              <div className="text-block">
                <h2>Understanding Art <span>(10th Edition)</span></h2>
                <p>Authors: Lois Fichner-Rathus</p>
              </div>
              <a href="#" className="button-primary">Contact Seller</a>
            </div>
            <div className="card book-preview">
              <div className="text-block">
                <h2>Understanding Art <span>(10th Edition)</span></h2>
                <p>Authors: Lois Fichner-Rathus</p>
              </div>
              <a href="#" className="button-primary">Contact Seller</a>
            </div>
            <div className="card book-preview">
              <div className="text-block">
                <h2>The Reading Strategies Book <span>(10th Edition)</span></h2>
                <p>Authors: Lois Fichner-Rathus</p>
              </div>
              <a href="#" className="button-primary">Contact Seller</a>
            </div>
          </div>
        </div>
      </main>


      <main className="content centered">
        <section>
          <div className="card">
            <h2>Sell a Book</h2>
            <fieldset>
              <label>Title</label>
              <input type="text" name=""/>
            </fieldset>
            <fieldset>
              <label>Book Edition</label>
              <input type="text" name=""/>
            </fieldset>
            <fieldset>
              <label>Authors</label>
              <input type="text" name="" />
            </fieldset>
            <div className="row">
              <fieldset className="col-6">
                <label>ISBN</label>
                <input type="text" name=""/>
              </fieldset>
              <fieldset className="col-6">
                <label>Course</label>
                <input type="text" name="" />
              </fieldset>
            </div>
            <fieldset>
              <label>Book Description</label>
              <textarea name="message" placeholder="What's this book about..."></textarea>
            </fieldset>
            <div className="button-area">
              <button className="button-primary">Place Book for Sale</button>
            </div>
          </div>
        </section>
      </main>


      <main className="content">
        <div className="content-block-container">
          <a href="#" className="back-link">Back to Search</a>
          <section className="row">
            <div className="col-8">
              <div className="card">
                <h2>Understanding Art <span>(10th Edition)</span></h2>
                <table>
                  <tr>
                    <td>Authors:</td>
                    <td>Saundra K Ciccarelli, J Noland White</td>
                  </tr>
                  <tr>
                    <td>ISBN:</td>
                    <td>0205972241</td>
                  </tr>
                  <tr>
                    <td>Course:</td>
                    <td>PSYCH 100, PSYCH 101</td>
                  </tr>
                  <tr>
                    <td>Decription:</td>
                    <td>David Myers’ new partnership with coauthor C. Nathan DeWall matches two dedicated educators and scholars, each passionate about teaching psychological science through writing and interactive media. With this new edition of the #1 bestselling Psychology, Myers and DeWall take full advantage of what an integrated text/media learning combination can do. New features move students from reading the chapter to actively learning online: How Would You Know puts students in the role of scientific researcher and includes tutorials on key research design principles; Assess Your Strengths self-tests help students learn a little more about themselves, and include tips about nurturing key strengths. These and other innovations rest on the same foundations that have always distinguished a new David Myers edition—exhaustive updating (hundreds of new citations), captivating writing, and the merging of rigorous science with a broad human perspective that engages both the mind and heart. This edition of Psychology is accompanied by its own dedicated version of Worth Publishers’ breakthrough online course space, featuring a fully integrated e-Book, LearningCurve adaptive quizzing, a rich collection of student media resources, and easy setup, assessment, and course management options for instructors.</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card col-4 interested">
              <h2>Interested?</h2>
              <p>Negotiate your price and get the book you need fast.</p>
              <a href="#" className="button-primary col-12">Contact Seller</a>
            </div>
          </section>
        </div>
      </main>
    </section>
  )
}

export default Sandbox
