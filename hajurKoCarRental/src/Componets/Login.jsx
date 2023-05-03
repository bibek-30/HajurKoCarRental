import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "./Landing/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [formState, setFormState] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email_address: "",
      password: "",
    },
    validationSchema: Yup.object({
      email_address: Yup.string()
        .email("Invalid email address")
        .required("Input valid email"),
      password: Yup.string()
        .min(8, "Must be 8 characters or less")
        .required("password muct be 8 character"),
    }),
    onSubmit: (values) => {
      const apiUrl = "https://localhost:7279/api/user/login";
      axios
        .post(apiUrl, values)
        .then((response) => {
          localStorage.setItem("token", response.data.jwtToken);
          localStorage.setItem("user", JSON.stringify(response.data));
          if (response.status === 200 && response.data.role === 2) {
            navigate("/");
            console.log(response);
          }
          if ((response.status === 200 && response.data.role === 0) || 1) {
            navigate("/side");
            console.log(response);
          }

          console.log(response.data);
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
                      {/* <p>Sign In</p> */}
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="email_address">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
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
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={(values) => setFormState(values)}
                          >
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        {/* <p className="forgot-password text-right"> */}
                        {/* Forgot <Link to="#">password?</Link>
                        </p> */}
                        <p className="mb-0  text-center">
                          Dont have an account??{" "}
                          <Link to="/register" className="text-primary fw-bold">
                            Sign up
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
