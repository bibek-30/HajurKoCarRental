import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import "./Details.css";
import Booking from "./Booking";

const CarDetails = () => {
  const { id } = useParams();

  const [carDetails, setCarDetails] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const toggleBooking = () => {
    setShowBooking(!showBooking);
  };

  useEffect(() => {
    axios
      .get("https://localhost:7279/api/Cars/2", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setCarDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!carDetails) {
    return <div>Loading car details...</div>;
  }

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container my-5 car-details-container">
        <div className="row">
          <div className="col-md-6">
            <Carousel controls={false}>
              <img
                className="d-block w-100"
                src={carDetails.photo}
                alt={carDetails.make + " " + carDetails.model}
              />
            </Carousel>

            <div className="text-center mt-3 ">
              <button className="btn btn-primary mx-2" onClick={toggleBooking}>
                Book Now
              </button>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-link mx-2"
                onClick={() => setShowTerms(true)}
              >
                Terms and Conditions
              </button>
            </div>
            {showTerms && (
              <div className="terms-and-conditions">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <h2 className="text-center mb-4">Terms and Conditions</h2>
                      <p className="terms">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris scelerisque est non nunc faucibus, ac ullamcorper
                        risus tincidunt. Etiam fermentum sapien elit, et
                        tincidunt urna ultricies sed. Ut eu nulla et risus
                        sodales eleifend id a dolor. Aenean scelerisque enim
                        et...
                      </p>
                      <button
                        className="btn btn-primary float-right"
                        onClick={handleCloseTerms}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="text-center">
              {showBooking && (
                <div className="booking-modal">
                  <div className="booking-modal-content">
                    <button
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={toggleBooking}
                    >
                      X
                    </button>
                    <Booking />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item car-details-item">
                <h1 className="mb-4 car-details-heading">
                  {carDetails.make} {carDetails.model}
                </h1>
                <p className="car-details-description">
                  {carDetails.description}
                </p>
              </li>
              <li className="list-group-item car-details-item">
                <strong>Year:</strong> {carDetails.year}
              </li>
              <li className="list-group-item car-details-item">
                <strong>Color:</strong> {carDetails.color}
              </li>
              <li className="list-group-item car-details-item">
                <strong>Price :</strong> {carDetails.price} per Day
              </li>
              <li className="list-group-item car-details-item">
                <strong>VIN:</strong> {carDetails.registration_number}
              </li>
              <li className="list-group-item car-details-item">
                <strong>Current Mileage:</strong> {carDetails.mileage}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CarDetails;
