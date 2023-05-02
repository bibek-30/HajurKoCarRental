import React, { useState, useEffect } from "react";

import "./Feed.css";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";

import axios from "axios";

const Feed = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7279/api/Cars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                          <Link to={`/details/${feed.id}`}>
                            <img
                              src={feed.photo}
                              className="card-img-top card-img-custom"
                              alt={feed.brand_name}
                            />
                          </Link>
                        </div>

                        <div className="card-body">
                          <Link
                            to={`/details/${feed.id}`}
                            className="text-decoration-none"
                          >
                            <h5 className="card-title">
                              {feed.brand} {feed.model}
                            </h5>
                          </Link>

                          <p className="card-text small mb-1">
                            {feed.description}
                          </p>
                          <p className="card-text mb-0">${feed.rental_cost}</p>
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
