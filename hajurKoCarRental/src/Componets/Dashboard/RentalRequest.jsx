import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RentalRequest = () => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    axios.get("https://localhost:7279/api/Rental/pending").then((res) => {
      setPendingData(res.data);
    });
  };

  const approveRequest = (id) => {
    axios.put(`https://localhost:7279/api/Rental/${id}/success`).then((res) => {
      console.log(res.data);
      // Refresh the table
      fetchAllData();
    });
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">User Name</th>
              <th scope="col">Registration Number</th>
              <th scope="col">Car Model</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Rental Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingData.map((data, index) => (
              <tr key={data.id}>
                <td scope="row">{index + 1}</td>
                <td>{data.users.full_name}</td>
                <td>{data.cars.registration_number}</td>
                <td>{data.cars.model}</td>
                <td>{new Date(data.start_date).toLocaleDateString()}</td>
                <td>{new Date(data.end_date).toLocaleDateString()}</td>
                <td>${data.rental_amount}</td>
                <td>
                  <Link to="/side" onClick={() => approveRequest(data.id)}>
                    <Button variant="success">Approve</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RentalRequest;
