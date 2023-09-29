import React from "react";
import "../../styles/home.css";


const ContactUs = () => {
  return (
    <>
      <div className="back-landing3">
<section className="py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 display-5 text-center fw-bolder text-white">Contactanos</h2>
        <p className="text-secondary mb-5 text-center fw-semibold fs-2 text-white">Llena el formulario debajo y nos pondremos en contacto contigo</p>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row justify-content-lg-center">
      <div className="col-12 col-lg-9">
        <div className=" border rounded shadow-sm overflow-hidden form">

          <form action="#!">
            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
              <div className="col-12">
                <label htmlFor="fullname" className="form-label">Nombre <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="fullname" name="fullname" />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">Numero de telefono</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </span>
                  <input type="tel" className="form-control" id="phone" name="phone" />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Mensaje <span className="text-danger">*</span></label>
                <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</section>
      </div>
          </>
  );
};

export default ContactUs;
