import React from "react";

const Footer = () => {
  return (
    <>
      <footer  className="footer-main text-center   shadow-sm   border-body " >
        <div className="container " >
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center  p-3">© 2023 Copyright:</div>
      </footer>
    </>
  );
};

export default Footer;
