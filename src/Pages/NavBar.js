import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Welcome"}>
              Welcome
            </Nav.Link>
            <Nav.Link as={Link} to={"/Home"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/About"}>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
