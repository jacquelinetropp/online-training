import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Fragment>
      <div className="btn_link">
        <Link to="/signup">
          <Button variant="outline-danger">Sign Up</Button>
        </Link>
      </div>
      <div className="btn_link">
        <Link to="/login">
          <Button variant="outline-danger">Login</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default LogIn;
