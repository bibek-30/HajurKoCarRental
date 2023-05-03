import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Addcar() {
  const [formState, setFormState] = useState(true);
  const navigate = useNavigate();

  // .catch((error) => {
  //   console.error(error);
  //   alert("Error adding car.");
  // });
  // .catch((error) => {
  //   console.error("Error adding car:", error);
  //   alert("Error adding car.");
  // });

  const formik = useFormik({
    initialValues: {
      model: "",
      color: "",
      registration_number: "",
      brand: "",
      rental_cost: "",
      mileage: "",
      description: "",
      photo: "",
      year: "",
      avaibility_status: true,
    },
    validationSchema: Yup.object({
      model: Yup.string()
        .min(4, "Must be 4 characters or less")
        .required("Add the nodel of the car"),
      registration_number: Yup.string()
        .min(3, "Must be 10 characters or less")
        .required("Registration number of Car"),

      brand: Yup.string()
        .min(3, "Must be 10 characters or less")
        .required("Brand of the car"),
      mileage: Yup.string()
        .min(2, "Must be 1 characters or less")
        .required("mileage of the car"),
      color: Yup.string()
        .min(3, "Must be 8 characters or less")
        .required("color of the car"),
      rental_cost: Yup.string()
        .min(3, "Must be 8 characters or less")
        .required("color of the car"),
      description: Yup.string()
        .min(20, "Must be 8 characters or less")
        .required("color of the car"),
      year: Yup.string()
        .min(3, "Must be 8 characters or less")
        .required("Provide details"),
    }),
    onSubmit: (values) => {
      // Create a new FormData object
      const formData = new FormData();

      // Add form data to the FormData object
      formData.append("mode", values.mode);
      formData.append("color", values.color);
      formData.append("registration_number", values.registration_number);
      formData.append("brand", values.brand);
      formData.append("rental_cost", values.rental_cost);
      formData.append("mileage", values.mileage);
      formData.append("description", values.description);
      formData.append("photo", values.photo);
      formData.append("year", values.year);

      axios
        .post("https://localhost:7279/api/Cars", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            setFormState(values);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  return (
    <div>
      <Card className="mx-auto mt-5" style={{ maxWidth: "600px" }}>
        {/* <CloseButton onClick="close" /> */}

        <Card.Body>
          <h1 className=" mb-2 text-center text-uppercase">Add Car for Rent</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="brand"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.brand}
                  // placeholder="brand"
                />
                <Form.Text className="text-danger">
                  {formik.touched.brand && formik.errors.brand ? (
                    <div className="text-danger">{formik.errors.brand}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="registration_number">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.registration_number}
                // placeholder="345623"
              />
              <Form.Text className="text-danger">
                {formik.touched.registration_number &&
                formik.errors.registration_number ? (
                  <div className="text-danger">
                    {formik.errors.registration_number}
                  </div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.model}
                  // placeholder="Tesla"
                />
                <Form.Text className="text-danger">
                  {formik.touched.model && formik.errors.model ? (
                    <div className="text-danger">{formik.errors.model}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.year}
                  // placeholder="2023"
                />
                <Form.Text className="text-danger">
                  {formik.touched.year && formik.errors.year ? (
                    <div className="text-danger">{formik.errors.year}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.color}
                  // placeholder="Red"
                />
                <Form.Text className="text-danger">
                  {formik.touched.color && formik.errors.color ? (
                    <div className="text-danger">{formik.errors.Name}</div>
                  ) : null}
                </Form.Text>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="rental_cost">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rental_cost}
                // placeholder="345623"
              />
              <Form.Text className="text-danger">
                {formik.touched.rental_cost && formik.errors.rental_cost ? (
                  <div className="text-danger">{formik.errors.rental_cost}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                // placeholder="345623"
              />
              <Form.Text className="text-danger">
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-danger">{formik.errors.description}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mileage">
              <Form.Label>Mileage</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mileage}
                // placeholder="Available"
              />
              <Form.Text className="text-danger">
                {formik.touched.mileage && formik.errors.mileage ? (
                  <div className="text-danger">{formik.errors.mileage}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo">
              <Form.Label>photo</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.photo}
                type="file"
              />
              <Form.Text className="text-danger">
                <div className="text-danger"></div>
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(values) => setFormState(values)}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Addcar;
