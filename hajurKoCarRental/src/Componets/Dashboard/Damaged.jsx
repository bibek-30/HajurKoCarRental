import React, { useState } from "react";
import "./DamagedCar.css";

function DamagedCars() {
  const [cars, setCars] = useState([
    {
      id: 1,
      description: "Scratched paint",
      cost: 500,
      username: "John Smith",
      registration: "ABC123",
    },
    {
      id: 2,
      description: "Broken windshield",
      cost: 1000,
      username: "Jane Doe",
      registration: "DEF456",
    },
    {
      id: 3,
      description: "Dented fender",
      cost: 750,
      username: "Bob Johnson",
      registration: "GHI789",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    setIsFormOpen(false);
  };

  return (
    <div className="container">
      <h1>Damaged Cars</h1>
      <button onClick={handleAddButtonClick}>Add Car</button>
      {isFormOpen && (
        <form className="floating-form" onSubmit={handleFormSubmit}>
          <h2>Add Car</h2>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <label>
            Repair Cost:
            <input type="number" name="cost" />
          </label>
          <label>
            User Name:
            <input type="text" name="username" />
          </label>
          <label>
            Registration No.:
            <input type="text" name="registration" />
          </label>
          <div className="form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={() => setIsFormOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Repair Cost</th>
            <th>User Name</th>
            <th>Registration No.</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.description}</td>
              <td>${car.cost}</td>
              <td>{car.username}</td>
              <td>{car.registration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DamagedCars;
