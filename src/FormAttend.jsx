import axios from 'axios'
import { useForm } from 'react-hook-form'

function FormAttend() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    // axios.post(`http://localhost:3000/api/records`, data)
    axios.post(`https://loveme-backend.vercel.app/api/records`, data)
  }

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
                <h2 style={{ fontFamily: 'Muli' }}>Bạn sẽ đến chứ?</h2>
                <div className="section-title-img">
                  <div className="round-ball" />
                </div>
              </div>
              <form
                className="contact-validation-active"
                id="contact-form-main"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Tên của bạn"
                    required
                    {...register('name', { required: true })}
                  />
                </div>
                <div>
                  <select
                    name="service"
                    className="form-control"
                    {...register('attend_type', { required: true })}
                  >
                    <option disabled="disabled">Bạn sẽ tham dự chứ?</option>
                    <option>Có</option>
                    <option>Tất nhiên rồi</option>
                  </select>
                </div>
                <div>
                  <select
                    name="guest"
                    className="form-control"
                    required
                    {...register('guest', { required: true })}
                  >
                    <option disabled="disabled">Bạn sẽ đi chung với ai</option>
                    <option>Đi 1 mình</option>
                    <option>Đi 2 mình</option>
                    <option>Nhiều lắm :D </option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="special_request"
                    id="special_request"
                    placeholder="Bạn có yêu cầu đặc biệt gì không?"
                    {...register('special_request')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="your_wish"
                    id="your_wish"
                    placeholder="Lời chúc của bạn"
                    {...register('your_wish', { required: true })}
                  />
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn-s3">
                    Phản hồi
                  </button>
                  <div id="c-loader">
                    <i className="ti-reload" />
                  </div>
                </div>
                <div className="clearfix error-handling-messages">
                  <div id="success">Thank you</div>
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
