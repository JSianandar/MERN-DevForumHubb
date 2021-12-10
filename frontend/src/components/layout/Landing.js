import React from "react";
import PropTypes from "prop-types";

function Landing(props) {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">
              A Hub Where All Developers can <b>Connect</b>
            </h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers.
            </p>
            <br />
            <p className="lead">This is a work in progress</p>
            <div className="buttons">
              <a href="register.html" class="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" class="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
