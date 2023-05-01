import React, { useState } from "react";

import "./Feed.css";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";

const Feed = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    {
      id: 1,
      title: "First Feed",
      price: 80000,
      image: "https://via.placeholder.com/286x180.png",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Second Feed",
      price: 8800,
      image: "https://via.placeholder.com/286x180.png",
      description:
        "Another quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Third Feed",
      price: 8000,
      image: "https://via.placeholder.com/286x180.png",
      description:
        "A third example feed with some additional text to make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Fourth Feed",
      price: 80000,
      image: "https://via.placeholder.com/286x180.png",
      description:
        "A fourth example feed with some additional text to make up the bulk of the card's content.",
    },
    {
      id: 5,
      title: "Fifth Feed",
      price: 10000,
      image: "https://via.placeholder.com/286x180.png",
      description:
        "A fifth example feed with some additional text to make up the bulk of the card's content.",
    },
    {
      id: 6,
      title: "Sixth Feed",
      price: 11000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdorpLxWlzmX3XNKTlKB5jaHPlpzrOLbWRFpnWJfcocpu5eRclSIkh4vDhJFNBZVr_Ck&usqp=CAU",
      description:
        "A sixth example feed with some additional text to make up the bulk of the card's content.",
    },
    {
      id: 7,
      title: "Seventh Feed",
      price: 90000,
      image:
        "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75",
      description:
        "A seventh example feed with some additional text to make up the bulk of the card's content.",
    },
    {
      id: 8,
      title: "Eighth Feed",
      price: 10000,
      image:
        "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      description:
        "An eighth example feed with some additional text to make up the bulk of the card's content.",
    },
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (query) => {
    const filteredData = data.filter((feed) => {
      const title = feed.title.toLowerCase();
      const search = query.toLowerCase();
      return title.includes(search);
    });
    setFilteredData(filteredData);
  };

  const feedsToDisplay = search.length ? filteredData : data;

  const feedRows = [];
  for (let i = 0; i < feedsToDisplay.length; i += 4) {
    feedRows.push(feedsToDisplay.slice(i, i + 4));
  }

  return (
    <div className="bg-dark ">
      <Navbar />
      <div>
        <div className="container pt-2">
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title"
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <select className="form-control">
                  <option value="">All Categories</option>
                  <option value="classic">Classic</option>
                  <option value="sports">Sports</option>
                  <option value="casual">Casual</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {feedRows.map((row, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  {row.map((feed) => (
                    <div className="col-md-3" key={feed.id}>
                      <div className="card mb-4">
                        <div className="card-img-container text-center">
                          <Link to="/details">
                            <img
                              src={feed.image}
                              className="card-img-top card-img-custom"
                              alt={feed.title}
                            />
                          </Link>
                        </div>

                        <div className="card-body">
                          <Link to="/details">
                            <h5 className="card-title">{feed.title}</h5>
                          </Link>

                          <p className="card-text small mb-1">
                            {feed.description}
                          </p>
                          <p className="card-text mb-0">${feed.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
