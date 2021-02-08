import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const LogOut = () => {
  return (
    <Fragment>
      <div className="btn_link">
        <Link to="/signup">
          <Button variant="outline-danger" onClick={() => auth.signOut()}>
            Log Out
          </Button>
        </Link>
        <div className="btn_link">
          <Button variant="danger">
            <CartIcon />
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default LogOut;
