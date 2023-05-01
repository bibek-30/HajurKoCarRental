import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import "./Details.css";

function CarDetails() {
  const [carDetails, setCarDetails] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const dummyData = {
      make: "Tesla",
      model: "Model S",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdorpLxWlzmX3XNKTlKB5jaHPlpzrOLbWRFpnWJfcocpu5eRclSIkh4vDhJFNBZVr_Ck&usqp=CAU",
        "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75",
        "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      ],
      description:
        "The Tesla Model S is a premium electric sedan with impressive acceleration and range.",
      year: 2022,
      color: "Red",
      price: "$79,990",
      vin: "5YJSA1DG9CFP01657",
      currentMileage: "10,000",
      features: [
        "Autopilot advanced safety and convenience features",
        "Premium interior and sound",
        "High-efficiency particulate air (HEPA) filter system",
      ],
    };
    setCarDetails(dummyData);
  }, []);

  if (!carDetails) {
    return <div>Loading car details...</div>;
  }

  const carouselItems = carDetails.images.map((imageSrc, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100 car-details-image"
        src={imageSrc}
        alt={`${carDetails.make} ${carDetails.model}`}
      />
    </Carousel.Item>
  ));

  const featuresList = carDetails.features.map((feature, index) => (
    <li key={index} className="car-details-feature">
      {feature}
    </li>
  ));

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };
  return (
    <div className="bg-dark ">
      <Navbar />
      <div className="container my-5 car-details-container">
        <div className="row">
          <div className="col-md-6">
            <Carousel interval={3000} pauseOnHover={false} fade={true}>
              {carouselItems}
            </Carousel>
            <div className="text-center mt-3 ">
              <button className="btn btn-primary mx-2">Book Now</button>
              <button className="btn btn-primary mx-2">Add To Cart</button>
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
                <strong>VIN:</strong> {carDetails.vin}
              </li>
              <li className="list-group-item car-details-item">
                <strong>Current Mileage:</strong> {carDetails.currentMileage}
              </li>
              <li className="list-group-item car-details-item ">
                <strong>Features:</strong>
                <ul className="car-details-feature-list">{featuresList}</ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CarDetails;
