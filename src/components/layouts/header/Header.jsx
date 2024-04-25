/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const header = () => {
  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to={"/"}
          >
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to={"/portfolio"}
                  >
                    portfolio
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to={"/career"}
                  >
                    career
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to={"/"}
                  >
                    Order now
                  </NavLink>
                </Nav.Link>
                {/* <Nav.Link>
                  <NavLink
                    className={({isActive}) => (isActive ? "activeLink" : "")}
                    to={"/"}
                  >
                    about us
                  </NavLink>
                </Nav.Link> */}
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeLink contactLink" : "contactLink"
                    }
                    to={"/"}
                  >
                    Contact Us
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <button className="contactBtn">Contact Us</button>
        </div>
      </Container>
    </header>
  );
};
export default header;
