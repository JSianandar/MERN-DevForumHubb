import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
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
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
