import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Booking = (props) => {
  const [user, setUser] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    } else {
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (redirect) {
    return <Link to="/login" />;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    discount: 0,
    rental_amount: props.cost,
    start_date: "",
    end_date: "",
    rental_status: 1,
    users_id: user.id,
    cars_id: props.id,
  };

  const validationSchema = Yup.object().shape({
    start_date: Yup.date()
      .min(new Date(), "Start date must be today or later")
      .required("Start date is required"),
    end_date: Yup.date()
      .min(Yup.ref("start_date"), "End date must be after start date")
      .required("End date is required"),
    cars_id: Yup.number().required("Car selection is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const apiUrl = "https://localhost:7279/api/Rental/booking";
      axios
        .post(apiUrl, values)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="start_date">Start date:</label>
              <Field type="date" name="start_date" />
              <ErrorMessage name="start_date" />
            </div>
            <div>
              <label htmlFor="end_date">End date:</label>
              <Field type="date" name="end_date" />
              <ErrorMessage name="end_date" />
            </div>
            <button>Pay With Khalti</button>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Booking;
