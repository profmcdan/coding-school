import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
const HomePage = () => (
  <Jumbotron>
    <div>
      <h2>Code School Admin</h2>
      <p className="lead">Learn more about us sometimes.</p>
      <p className="lead">
        <Link to="about" className="btn btn-primary btn-lg">
          More
        </Link>
      </p>
    </div>
  </Jumbotron>
);

export default HomePage;
