import { useCountdown } from './hooks/countdown'

function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(
    'Sun Mar 12 2023 18:00:00 GMT+0700'
  )

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
                      <div class="time">{days}</div>
                      <span>Ngày</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">{hours}</div>
                      <span>Giờ</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">{minutes}</div>
                      <span>Phút</span>
                    </div>
                  </div>
                  <div class="box">
                    <div>
                      <div class="time">{seconds}</div>
                      <span>Giây</span>
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
