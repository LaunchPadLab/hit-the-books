import React from 'react'

function All () {
  return (
    <div>
      <header className="navigation">
        <a href="/" className="logo link-white-base">Styleguide</a>
      </header>

      <nav className="side-navigation">
        <h5>Styleguide</h5>
        <ul>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#form-inputs">Form Inputs</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#nav-bar">Nav Bar</a></li>
          <li><a href="#card">Card</a></li>
          <li><a href="#grid">Grid</a></li>
        </ul>
      </nav>

      <main className="content with-sidebar styleguide">

        <div className="content-block-container">
          <h3 className="code-header" id="typography">Typography</h3>
          <div className="card">
            <h1>H1 - Header One</h1>
            <h2>H2 - Header Two</h2>
            <p>p — Some paragraph text</p>
            <a href="#">a — Some link text</a>
            <xmp><u>Underline text</u></xmp>
          </div>

          <h3 className="code-header" id="form-inputs">Form Inputs</h3>
            <h5>Input</h5>
            <div className="card styleguide-fields">
              <fieldset>
                <label>Label</label>
                <input type="text" name="" placeholder="Placeholder Text" />
              </fieldset>
              <fieldset className="error">
                <label>Label</label>
                <input type="text" name="" placeholder="Placeholder Text" />
                <span className="error-message">Label can't be blank</span>
              </fieldset>
            </div>

            <h5>Textarea</h5>
            <div className="card styleguide-fields">
              <fieldset>
                <label>Label</label>
                <textarea name="message" placeholder="Placeholder Text"></textarea>
              </fieldset>

              <fieldset className="error">
                <label>Label</label>
                <textarea name="message" placeholder="Placeholder Text"></textarea>
                <span className="error-message">Label can't be blank</span>
              </fieldset>
            </div>

            <h3 className="code-header" id="buttons">Buttons</h3>
            <div className="card">
              <button className="button-primary">Submit</button>
              <button className="button-primary in-progress">Submit</button>
              <button className="button-primary is-disabled">Submit</button>
              <xmp>button-primary
              button-primary in-progress
              button-primary is-disabled
              </xmp>
            </div>

            <h3 className="code-header" id="buttons">Nav Bar</h3>
            <div className="card styleguide-header">
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
            </div>
                <h3 className="code-header" id="grid">Grid</h3>
                <div className="card">
                  <div className="row">
                    <div className="col-1">Test</div>
                    <div className="col-5">Test</div>
                    <div className="col-6">Test</div>
                  </div>
            <xmp>col-1
            col-2
            col-3
            col-4
            col-5
            col-6
            col-7
            col-8
            col-9
            col-10
            col-11
            col-12
            </xmp>
                </div>

            <h3 className="code-header" id="card">Card</h3>
            <div className="card">
              <div className="book-list">
                <div className="card book-preview">
                 <div className="text-block">
                   <h2>Understanding Art <span>(10th Edition)</span></h2>
                   <p>Authors: Lois Fichner-Rathus</p>
                 </div>
                 <a href="#" className="button-primary">Contact Seller</a>
                </div>
              </div>
            </div>

          </div>
        </main>
    </div>
  )
}

export default All
