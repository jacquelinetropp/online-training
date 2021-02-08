import React from "react";
import { Button, Navbar, Nav, Image } from "react-bootstrap";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";

const navbar = ({ currentUser, hidden }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Personal Training</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="/plan">Plans</Nav.Link>
          </Nav>
          {currentUser ? <LogOut /> : <LogIn />}
        </Navbar.Collapse>
      </Navbar>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(navbar);
