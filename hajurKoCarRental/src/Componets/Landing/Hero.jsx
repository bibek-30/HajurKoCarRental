import React from "react";
import { Link } from "react-router-dom";

import carImage from "../../assets/carImage.png";

const Hero = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${carImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "calc(100vh - 4rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#fff",
            textShadow: "2px 2px 2px #000",
            paddingLeft: "15rem",
            paddingRight: "15rem",
          }}
        >
          Discover the world on your terms with our flexible travel packages...
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            textShadow: "2px 2px 2px #000",
            maxWidth: "40rem",
            lineHeight: "2.5rem",
          }}
        >
          Rent a car today and explore the world on your own terms. From solo
          trips to family getaways, we've got you covered with our variety of
          travel options.
        </p>
        <Link
          to={"/car"}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.8rem",
            backgroundColor: "#fff",
            textDecoration: "none",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "2px 2px 2px #000",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#333";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#333";
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
