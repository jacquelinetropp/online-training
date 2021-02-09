import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

import CartIcon from "../../components/cartIcon/CartIcon";

const LogOut = () => {
  return (
    <div className="logout">
      <div className="btn_link">
        <Link to="/signup">
          <Button variant="outline-danger" onClick={() => auth.signOut()}>
            Log Out
          </Button>
        </Link>
      </div>
      <div className="btn_link">
        <Button variant="danger">
          <CartIcon />
        </Button>
      </div>
    </div>
  );
};

export default LogOut;
