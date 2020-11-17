import React from "react";
import { Button, Navbar, Nav, Image } from "react-bootstrap";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

import CartIcon from "../../Images/cart-outline.svg";

const navbar = ({ currentUser }) => {
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
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          {currentUser ? <LogOut /> : <LogIn />}
          <div className="btn_link">
            <Link to="/cart">
              <Button variant="danger">
                <Image src={CartIcon} />
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(navbar);
