import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Opps! this is the dead end.</h1>

        <Link to="/" className="btn" style={{ color: "blue" }}>
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
