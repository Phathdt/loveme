function Countdown() {
  return (
    <div className="App">
      <section class="wpo-wedding-date section-padding">
        <div class="container">
          <div class="row">
            <div class="col col-xs-12">
              <div class="clock-grids">
                <div id="clock">
                  <div class="box">
                    <div>
                      <div class="time">00</div>
                      <span>Month</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">30</div>
                      <span>Days</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">00</div>
                      <span>Hours</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">00</div>
                      <span>Mins</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">00</div>
                      <span>Secs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Countdown
