import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";

function Booking() {
  const initialValues = {
    photos: [],
    startDate: "",
    endDate: "",
  };

  const validationSchema = Yup.object().shape({
    photos: Yup.array()
      .min(1, "Please upload at least one photo")
      .required("Photos are required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().when(
      "startDate",
      (startDate, schema) =>
        startDate && schema.min(startDate, "End date must be after start date")
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Your Booking is Placed Succesfully!");
    resetForm();
  };

  const minDate = new Date().toISOString().slice(0, 10); // get current date in ISO format

  const handlePhotoChange = (event, setFieldValue) => {
    const files = Array.from(event.currentTarget.files);
    setFieldValue("photos", files);
  };

  return (
    <div className="booking-form">
      <ToastContainer position="top-right" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="photos">Photos</label>
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                accept="image/*"
                onChange={(event) => handlePhotoChange(event, setFieldValue)}
                className={
                  "form-control" +
                  (errors.photos && touched.photos ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="photos"
                component="div"
                className="invalid-feedback"
              />
              {errors.photos && touched.photos && (
                <div className="alert alert-danger mt-3">{errors.photos}</div>
              )}
              {values.photos.length === 0 && (
                <div className="alert alert-danger mt-3">Photo is required</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <Field
                type="date"
                id="startDate"
                name="startDate"
                placeholder="Enter start date"
                min={minDate}
                className={
                  "form-control" +
                  (errors.startDate && touched.startDate ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="startDate"
                component="div"
                className="invalid-feedback"
              />
              {!values.startDate && (
                <div className="alert alert-danger mt-3">
                  Start date is required
                </div>
              )}
            </div>

            {values.startDate && (
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <Field
                  type="date"
                  id="endDate"
                  name="endDate"
                  placeholder="Enter end date"
                  min={values.startDate}
                  className={
                    "form-control" +
                    (errors.endDate && touched.endDate ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="invalid-feedback"
                />
                {!values.endDate && (
                  <div className="alert alert-danger mt-3">
                    End date is required
                  </div>
                )}
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-3">
              Book Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Booking;
