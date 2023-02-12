function FormAttend() {
  return (
    <div className="App">
      <section className="wpo-contact-section section-padding" id="RSVP">
        <div className="container">
          <div className="wpo-contact-section-wrapper">
            <div className="wpo-contact-form-area">
              <div className="wpo-section-title-s2">
                <div className="section-title-simg">
                  <img src="assets/images/section-title2.png" alt />
                </div>
                <h2>WILL YOU ATTEND?</h2>
                <div className="section-title-img">
                  <div className="round-ball" />
                </div>
              </div>
              <form
                method="post"
                className="contact-validation-active"
                id="contact-form-main"
              >
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="adress"
                    id="adress"
                    placeholder="Adress"
                  />
                </div>
                <div>
                  <select name="service" className="form-control">
                    <option disabled="disabled" selected>
                      Services
                    </option>
                    <option>Photography</option>
                    <option>The Rehearsal Dinner</option>
                    <option>The Afterparty</option>
                    <option>Videographers</option>
                    <option>Perfect Cake</option>
                    <option>All Of The Above</option>
                  </select>
                </div>
                <div>
                  <select name="guest" className="form-control">
                    <option disabled="disabled" selected>
                      Number Of Guests
                    </option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                  </select>
                </div>
                <div>
                  <select name="meal" className="form-control last">
                    <option disabled="disabled" selected>
                      Meal Preferences
                    </option>
                    <option>Chicken Soup</option>
                    <option>Motton Kabab</option>
                    <option>Chicken BBQ</option>
                    <option>Mix Salad</option>
                    <option>Beef Ribs</option>
                  </select>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn-s3">
                    Send An Inquiry
                  </button>
                  <div id="c-loader">
                    <i className="ti-reload" />
                  </div>
                </div>
                <div className="clearfix error-handling-messages">
                  <div id="success">Thank you</div>
                  <div id="error">
                    Error occurred while sending email. Please try again later.
                  </div>
                </div>
              </form>
              <div className="border-style" />
            </div>
            <div className="vector-1">
              <img src="assets/images/contact/1.png" alt />
            </div>
            <div className="vector-2">
              <img src="assets/images/contact/2.png" alt />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormAttend
