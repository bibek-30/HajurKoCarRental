// import React from "react";
// import Table from "react-bootstrap/Table";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Input, Space } from "antd";
// import { Modal } from "react-bootstrap";

// const { Search } = Input;

// const defaultCars = [
//   {
//     id: 1,
//     brand: "Tesla",
//     model: "Tesla S",
//     color: "White",
//     year: 2021,
//     registration_number: "1234",
//     avaibility_status: "Active",
//     photo: "image.jpg",
//     rental_cost: 2000,
//     mileage: 100,
//     description:
//       "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and ",
//   },
//   {
//     id: 1,
//     brand: "Honda",
//     model: "Honda SCk",
//     color: "White",
//     year: 2021,
//     registration_number: "1234",
//     avaibility_status: "Active",
//     photo: "image.jpg",
//     rental_cost: 2000,
//     mileage: 100,
//     description:
//       "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and ",
//   },
// ];

// const CarList = ({ cars = defaultCars, props }) => {
//   const formik = useFormik({
//     initialValues: {
//       model: "",
//       color: "",
//       registration_number: "",
//       brand: "",
//       rental_cost: "",
//       mileage: "",
//       description: "",
//       photo: "",
//       year: "",
//       avaibility_status: true,
//     },
//     validationSchema: Yup.object({
//       model: Yup.string()
//         .min(4, "Must be 4 characters or less")
//         .required("Add the nodel of the car"),
//       registration_number: Yup.string()
//         .min(3, "Must be 10 characters or less")
//         .required("Registration number of Car"),

//       brand: Yup.string()
//         .min(3, "Must be 10 characters or less")
//         .required("Brand of the car"),
//       mileage: Yup.string()
//         .min(3, "Must be 10 characters or less")
//         .required("mileage of the car"),
//       color: Yup.string()
//         .min(3, "Must be 8 characters or less")
//         .required("color of the car"),
//       rental_cost: Yup.string()
//         .min(3, "Must be 8 characters or less")
//         .required("color of the car"),
//       description: Yup.string()
//         .min(20, "Must be 8 characters or less")
//         .required("color of the car"),

//       availability_status: Yup.string()
//         .min(3, "Must be 8 characters or less")
//         .required("is it Available?"),

//       year: Yup.string()
//         .min(3, "Must be 8 characters or less")
//         .required("Provide details"),

//       photo: Yup.string()
//         .min(3, "Must be 8 characters or less")
//         .required("Provide photo of the car"),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       setFormState(values);
//     },
//   });
//   const onSearch = (value) => console.log(value);
//   const [showForm, setShowForm] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission here
//   };

//   const handleAddButtonClick = () => {
//     setShowForm(true);
//   };
//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Body>
//           <Card className="mx-auto mt-5" style={{ maxWidth: "600px" }}>
//             {/* <button
//               type="button"
//               className="btn-close"
//               aria-label="Close"
//             ></button> */}

//             <Card.Body>
//               <Modal.Header closeButton>
//                 <h2 className=" mb-1 text-center text-uppercase">
//                   Add Car for Rent
//                 </h2>
//               </Modal.Header>
//               <Form onSubmit={formik.handleSubmit}>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="brand">
//                     <Form.Label>Brand</Form.Label>
//                     <Form.Control
//                       type="brand"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.brand}
//                       // placeholder="brand"
//                     />
//                     <Form.Text className="text-danger">
//                       {formik.touched.brand && formik.errors.brand ? (
//                         <div className="text-danger">{formik.errors.brand}</div>
//                       ) : null}
//                     </Form.Text>
//                   </Form.Group>
//                 </Row>

//                 <Form.Group className="mb-3" controlId="registration_number">
//                   <Form.Label>Registration Number</Form.Label>
//                   <Form.Control
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.registration_number}
//                     // placeholder="345623"
//                   />
//                   <Form.Text className="text-danger">
//                     {formik.touched.registration_number &&
//                     formik.errors.registration_number ? (
//                       <div className="text-danger">
//                         {formik.errors.registration_number}
//                       </div>
//                     ) : null}
//                   </Form.Text>
//                 </Form.Group>
//                 <Row className="mb-3">
//                   <Form.Group as={Col} controlId="model">
//                     <Form.Label>Model</Form.Label>
//                     <Form.Control
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.model}
//                       // placeholder="Tesla"
//                     />
//                     <Form.Text className="text-danger">
//                       {formik.touched.model && formik.errors.model ? (
//                         <div className="text-danger">{formik.errors.model}</div>
//                       ) : null}
//                     </Form.Text>
//                   </Form.Group>

//                   <Form.Group as={Col} controlId="year">
//                     <Form.Label>Year</Form.Label>
//                     <Form.Control
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.year}
//                       // placeholder="2023"
//                     />
//                     <Form.Text className="text-danger">
//                       {formik.touched.year && formik.errors.year ? (
//                         <div className="text-danger">{formik.errors.year}</div>
//                       ) : null}
//                     </Form.Text>
//                   </Form.Group>

//                   <Form.Group as={Col} controlId="color">
//                     <Form.Label>Color</Form.Label>
//                     <Form.Control
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.color}
//                       // placeholder="Red"
//                     />
//                     <Form.Text className="text-danger">
//                       {formik.touched.color && formik.errors.color ? (
//                         <div className="text-danger">{formik.errors.Name}</div>
//                       ) : null}
//                     </Form.Text>
//                   </Form.Group>
//                 </Row>
//                 <Form.Group className="mb-3" controlId="rental_cost">
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.rental_cost}
//                     // placeholder="345623"
//                   />
//                   <Form.Text className="text-danger">
//                     {formik.touched.rental_cost && formik.errors.rental_cost ? (
//                       <div className="text-danger">
//                         {formik.errors.rental_cost}
//                       </div>
//                     ) : null}
//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="description">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.description}
//                     // placeholder="345623"
//                   />
//                   <Form.Text className="text-danger">
//                     {formik.touched.description && formik.errors.description ? (
//                       <div className="text-danger">
//                         {formik.errors.description}
//                       </div>
//                     ) : null}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="mileage">
//                   <Form.Label>Mileage</Form.Label>
//                   <Form.Control
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.mileage}
//                     // placeholder="Available"
//                   />
//                   <Form.Text className="text-danger">
//                     {formik.touched.mileage && formik.errors.mileage ? (
//                       <div className="text-danger">{formik.errors.mileage}</div>
//                     ) : null}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="photo">
//                   <Form.Label>photo</Form.Label>
//                   <Form.Control
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.photo}
//                     type="file"
//                   />
//                   <Form.Text className="text-danger">
//                     {formik.touched.photo && formik.errors.photo ? (
//                       <div className="text-danger">{formik.errors.photo}</div>
//                     ) : null}
//                   </Form.Text>
//                 </Form.Group>

//                 <Button
//                   variant="primary"
//                   type="submit"
//                   onClick={(values) => setFormState(values)}
//                 >
//                   Submit
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Modal.Body>
//       </Modal>
//       {/* <div className="d-flex justify-content-center align-items-center"> */}
//       {/* <div className="d-flex justify-content-center align-items-center"> */}
//       <div>
//         <div className="d-flex justify-content-between align-items-center mb-2">
//           <h2 className="align-items-center justify-content-center">
//             List of car
//           </h2>
//           <div className="ml-auto d-flex align-items-center">
//             <Search
//               placeholder="input search text"
//               onSearch={onSearch}
//               enterButton
//               size="large"
//             />
//           </div>

//           <Button size="md" onClick={handleShow}>
//             Add Car
//           </Button>
//         </div>
//       </div>
//       <Col md={15}>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Model</th>
//               <th>Color</th>
//               <th>Registration Number</th>
//               <th>Brand</th>
//               <th>Rental Cost</th>
//               <th>Mileage</th>
//               <th>Description</th>
//               <th>Photo</th>
//               <th>Year</th>
//               <th>Availability Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {defaultCars.map((car) => (
//               <tr key={car.registration_number}>
//                 <td>{car.model}</td>
//                 <td>{car.color}</td>
//                 <td>{car.registration_number}</td>
//                 <td>{car.brand}</td>
//                 <td>{car.rental_cost}</td>
//                 <td>{car.mileage}</td>
//                 <td>{car.description}</td>
//                 <td>
//                   <img
//                     src={car.photo}
//                     alt={car.model}
//                     style={{ width: "45px", height: "45px" }}
//                     className="rounded-circle"
//                   />
//                 </td>
//                 <td>{car.year}</td>
//                 <td>{car.availability_status}</td>
//                 <td>
//                   <Button variant="primary" size="sm" onClick={handleShow}>
//                     Edit
//                   </Button>
//                   <Link to="/edit">
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(car)}
//                     >
//                       Delete
//                     </Button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Col>
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// };

// export default CarList;

import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Input, Space } from "antd";
import { Modal } from "react-bootstrap";
import Addcar from "./AddCar";
import axios from "axios";

const { Search } = Input;

const CarList = ({ props }) => {
  const onSearch = (value) => console.log(value);
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);
  const [cars, setCars] = useState([]);

  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = () => {
    // Your delete logic here
    // ...

    // Show the confirmation modal
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    // Perform the actual delete action here
    // ...

    // Close the modal
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get("https://localhost:7279/api/Cars");
      setCars(response.data);
    };
    fetchCars();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Addcar></Addcar>
        </Modal.Body>
      </Modal>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="align-items-center justify-content-center">
            List of car
          </h2>
          <div className="ml-auto d-flex align-items-center">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              size="large"
            />
          </div>

          <Button size="md" onClick={handleShow}>
            Add Car
          </Button>
        </div>
      </div>
      <Col md={15}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Model</th>
              <th>Color</th>
              <th>Registration Number</th>
              <th>Brand</th>
              <th>Rental Cost</th>
              <th>Mileage</th>
              <th>Description</th>
              <th>Photo</th>
              <th>Year</th>
              <th>Availability Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.car_id}>
                <td>{car.model}</td>
                <td>{car.color}</td>
                <td>{car.registration_number}</td>
                <td>{car.brand}</td>
                <td>{car.rental_cost}</td>
                <td>{car.mileage}</td>
                <td>{car.description}</td>
                <td>
                  <img
                    src={car.photo}
                    alt={car.model}
                    style={{ width: "100px", height: "100px" }}
                    // className="rounded-circle"
                  />
                </td>
                <td>{car.year}</td>
                <td>{car.availability_status}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    // value={car.id}
                    onClick={handleShowEdit}
                  >
                    Edit
                  </Button>
                  {/* <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Body>
                      <EditCarForm />
                    </Modal.Body>
                  </Modal> */}

                  <Link to>
                    <Button variant="danger" size="sm" onClick={handleDelete}>
                      Delete
                    </Button>
                    <Modal show={showConfirmModal} onHide={handleCancelDelete}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete this car?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCancelDelete}
                        >
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={handleConfirmDelete}>
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default CarList;
