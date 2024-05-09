import { useFormik } from 'formik';
import './form.css';

const validate = values => {
  const errors = {};

  // Username
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length <= 5) {
    errors.username = "Username must be more than 5 letters";
  }

  // Password
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>ยง~]).{8,}$/.test(values.password)) {
    errors.password = (
      <>
        Password must contain the following:<br />
        - At least 8 characters<br />
        - An uppercase and a lowercase letter<br />
        - A number<br />
        - A special character
      </>
    );
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: values => {
    },
  });
  // Rendering of the form
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h3>Login</h3>

        {/* Username */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ?
          <div className="errorMessage">{formik.errors.username}</div> : null
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;