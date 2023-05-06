import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className=" py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">&copy; 2023 Hajur ko Car Rental</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="mx-3">
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li className="mx-3">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mx-3">
                <Link className="text-decoration-none" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
