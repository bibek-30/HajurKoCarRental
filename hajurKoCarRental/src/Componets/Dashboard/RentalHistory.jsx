import axios from "axios";
import React, { useEffect, useState } from "react";

const RentalHistory = () => {
  const [successData, setSuccessData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    axios.get("https://localhost:7279/api/Rental/success").then((res) => {
      setSuccessData(res.data);
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
            </tr>
          </thead>
          <tbody>
            {successData.map((data, index) => (
              <tr key={data.id}>
                <td scope="row">{index + 1}</td>
                <td>{data.users.full_name}</td>
                <td>{data.cars.registration_number}</td>
                <td>{data.cars.model}</td>
                <td>{new Date(data.start_date).toLocaleDateString()}</td>
                <td>{new Date(data.end_date).toLocaleDateString()}</td>
                <td>${data.rental_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RentalHistory;
