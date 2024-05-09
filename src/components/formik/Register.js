import React from "react";
import { useFormik } from 'formik';
import './form.css';

// Form Validation
const validate = values => {
  const errors = {};

  // Name
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Name cannot be more than 15 letters";
  }

  // Surname
  if (!values.surname) {
    errors.surname = "Required";
  } else if (values.surname.length > 20) {
    errors.surname = "Surname cannot be more than 20 letters";
  }

  // Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  // Password
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>ยง~]).{8,}$/.test(values.password)) {
    errors.password = (
      <>
        Password must contain the following:<br />
        • At least 8 characters<br />
        • An uppercase and a lowercase letter<br />
        • A number<br />
        • A special character
      </>
    );
  }

  // Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};


const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: values => {
      // Submit handling code goes here 
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h3>Register</h3>

        {/* Name */}
        <label htmlFor="name">Name</label>
        <input id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ?
          <div className="errorMessage">{formik.errors.name}</div> : null
        }

        {/* Surname */}
        <label htmlFor="surname">Surname</label>
        <input id="surname"
          name="surname"
          type="surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname ?
          <div className="errorMessage">{formik.errors.surname}</div> : null
        }

        {/* Email */}
        <label htmlFor="email">Email Address</label>
        <input id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ?
          <div className="errorMessage">{formik.errors.email}</div> : null
        }

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ?
          <div className="errorMessage">{formik.errors.password}</div> : null
        }

        {/* Confirm Password */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ?
          <div className="errorMessage">{formik.errors.confirmPassword}</div> : null
        }

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;