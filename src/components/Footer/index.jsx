import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary p-2 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="d-flex justify-content-center gap-2">
              <a className="text-light" href="/">
                company Name
              </a>
              ©2023.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
