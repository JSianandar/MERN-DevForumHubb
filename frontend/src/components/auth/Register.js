import React, { Fragment, useState } from "react";
// For working with redux
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
//Notification purposes
import { setAlert } from "../../actions/alert";
import { registerUser } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // Destructure Form Data
  const { name, email, password, confirm_password } = formData;
  // to enable the change of state of Form Data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // when submitting the form data
  const onSubmit = async (e) => {
    e.preventDefault();
    // if the passwords dont match
    if (password !== confirm_password) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };
  // if successfully login
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={confirm_password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(Register);
