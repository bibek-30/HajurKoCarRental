import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "./Landing/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [formState, setFormState] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      date_of_birth: "",
      profile_picture: "",
      document: "",
      role: 0,
      address: "",
      phone_number: "",
      email_address: "",
      password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Full name is required"),
      date_of_birth: Yup.date().required("Date of birth is required"),
      profile_picture: Yup.string(),
      document: Yup.string().required("Document needed"),
      // role: Yup.string(),
      address: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Address is required"),
      phone_number: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Phone number is required"),
      email_address: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      // Create a new FormData object
      const formData = new FormData();

      // Add form data to the FormData object
      formData.append("full_name", values.full_name);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("profile_picture", values.profile_picture);
      formData.append("document", values.document);
      formData.append("role", 0);
      formData.append("address", values.address);
      formData.append("phone_number", values.phone_number);
      formData.append("email_address", values.email_address);
      formData.append("password", values.password);

      axios
        .post("https://localhost:7279/api/user/registration", formData)
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
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url('https://www.vectornator.io/blog/content/images/2022/09/1---car.PNG')",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Hajur ko Car Rental
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="full_name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.full_name}
                            placeholder="Enter full_name"
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.full_name &&
                            formik.errors.full_name ? (
                              <div className="text-danger">
                                {formik.errors.full_name}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>
                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="address"
                          >
                            <Form.Label className="text-center">
                              Address
                            </Form.Label>
                            <Form.Control
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.address}
                              placeholder="Enter address"
                            />
                            <Form.Text className="text-danger">
                              {formik.touched.address &&
                              formik.errors.address ? (
                                <div className="text-danger">
                                  {formik.errors.address}
                                </div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="date_of_birth"
                          >
                            <Form.Label className="text-center">
                              Date of birth
                            </Form.Label>
                            <Form.Control
                              type="date"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.date_of_birth}
                            />
                            <Form.Text className="text-danger">
                              {formik.touched.date_of_birth &&
                              formik.errors.date_of_birth ? (
                                <div className="text-danger">
                                  {formik.errors.date_of_birth}
                                </div>
                              ) : null}
                            </Form.Text>
                          </Form.Group>
                        </Row>

                        <Form.Group
                          className="mb-3"
                          controlId="profile_picture"
                        >
                          <Form.Label className="text-center">
                            Profile Picture
                          </Form.Label>
                          <Form.Control
                            type="file"
                            onChange={(event) => {
                              formik.setFieldValue(
                                "profile_picture",
                                event.currentTarget.files[0]
                              );
                            }}
                            onBlur={formik.handleBlur}
                            isInvalid={!!formik.errors.profile_picture}
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.profile_picture &&
                            formik.errors.profile_picture ? (
                              <div className="text-danger">
                                {formik.errors.profile_picture}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="document">
                          <Form.Label className="text-center">
                            Document
                          </Form.Label>
                          <Form.Control
                            type="file"
                            onChange={(event) => {
                              formik.setFieldValue(
                                "document",
                                event.currentTarget.files[0]
                              );
                            }}
                            onBlur={formik.handleBlur}
                            isInvalid={!!formik.errors.document}
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.document &&
                            formik.errors.document ? (
                              <div className="text-danger">
                                {formik.errors.document}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone_number">
                          <Form.Label className="text-center">
                            phone_number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone_number}
                            placeholder="Enter phone_number number"
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.phone_number &&
                            formik.errors.phone_number ? (
                              <div className="text-danger">
                                {formik.errors.phone_number}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email_address">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email_address"
                            placeholder="Enter email_address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email_address}
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.email_address &&
                            formik.errors.email_address ? (
                              <div className="text-danger">
                                {formik.errors.email_address}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <div className="text-danger">
                                {formik.errors.password}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                          />
                          <Form.Text className="text-danger">
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <div className="text-danger">
                                {formik.errors.password}
                              </div>
                            ) : null}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={(values) => setFormState(values)}
                          >
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <Link to="/login" className="text-primary fw-bold">
                            Sign In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
