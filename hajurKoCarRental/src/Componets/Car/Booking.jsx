// import { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import { ToastContainer, toast } from "react-toastify";
// import Khalti from "../Payment/KhaltiCOnfig";

// function Booking() {
//   const initialValues = {
//     photos: [],
//     startDate: "",
//     endDate: "",
//   };

//   const validationSchema = Yup.object().shape({
//     photos: Yup.array()
//       .min(1, "Please upload at least one photo")
//       .required("Photos are required"),
//     startDate: Yup.date().required("Start date is required"),
//     endDate: Yup.date().when(
//       "startDate",
//       (startDate, schema) =>
//         startDate && schema.min(startDate, "End date must be after start date")
//     ),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     toast.success("Your Booking is Placed Succesfully!");
//     resetForm();
//   };

//   const minDate = new Date().toISOString().slice(0, 10); // get current date in ISO format

//   const handlePhotoChange = (event, setFieldValue) => {
//     const files = Array.from(event.currentTarget.files);
//     setFieldValue("photos", files);
//   };

//   return (
//     <div className="booking-form">
//       <ToastContainer position="top-right" />

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, setFieldValue }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="photos">Photos</label>
//               <input
//                 type="file"
//                 id="photos"
//                 name="photos"
//                 multiple
//                 accept="image/*"
//                 onChange={(event) => handlePhotoChange(event, setFieldValue)}
//                 className={
//                   "form-control" +
//                   (errors.photos && touched.photos ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="photos"
//                 component="div"
//                 className="invalid-feedback"
//               />
//               {errors.photos && touched.photos && (
//                 <div className="alert alert-danger mt-3">{errors.photos}</div>
//               )}
//               {values.photos.length === 0 && (
//                 <div className="alert alert-danger mt-3">Photo is required</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="startDate">Start Date</label>
//               <Field
//                 type="date"
//                 id="startDate"
//                 name="startDate"
//                 placeholder="Enter start date"
//                 min={minDate}
//                 className={
//                   "form-control" +
//                   (errors.startDate && touched.startDate ? " is-invalid" : "")
//                 }
//               />
//               <ErrorMessage
//                 name="startDate"
//                 component="div"
//                 className="invalid-feedback"
//               />
//               {!values.startDate && (
//                 <div className="alert alert-danger mt-3">
//                   Start date is required
//                 </div>
//               )}
//             </div>

//             {values.startDate && (
//               <div className="form-group">
//                 <label htmlFor="endDate">End Date</label>
//                 <Field
//                   type="date"
//                   id="endDate"
//                   name="endDate"
//                   placeholder="Enter end date"
//                   min={values.startDate}
//                   className={
//                     "form-control" +
//                     (errors.endDate && touched.endDate ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="endDate"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//                 {!values.endDate && (
//                   <div className="alert alert-danger mt-3">
//                     End date is required
//                   </div>
//                 )}
//               </div>
//             )}

//             <button type="submit" className="btn btn-primary mt-3">
//               Book Now
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
// export default Booking;

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import KhaltiCheckout from "khalti-checkout-web";

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

    // Khalti payment
    const config = {
      publicKey: "test_public_key_dc74e0fd57cb46cd938e0a2aee986ac9",
      productIdentity: "1234567890",
      productName: "Test Product",
      productUrl: "http://example.com/test-product",
      eventHandler: {
        onSuccess(payload) {
          console.log(payload);
          toast.success(
            "Your Booking is Placed Successfully and Payment is Completed!"
          );
          resetForm();
        },
        onError(error) {
          console.log(error);
          toast.error("Payment Error! Please try again.");
        },
        onClose() {
          console.log("Payment closed");
          toast.info("Payment Closed! Please try again.");
        },
      },
    };

    const checkout = new KhaltiCheckout(config);

    checkout.show({
      amount: 1000, // change the amount as per your requirement
      mobile: "+9779800000000", // change the mobile number as per your requirement
      email: "test@example.com", // change the email address as per your requirement
    });
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

            <div className="payment-options">
              <button onClick={handleSubmit} className="btn btn-success">
                Pay with Khalti
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Booking;
