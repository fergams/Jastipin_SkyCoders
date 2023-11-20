
import { Navbar, Container, Nav } from "react-bootstrap";
import {useState,useEffect} from "react";
import {navLinks} from "../data/index";
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarComponent = () => {
  const [changeColor, SetChangeColor] = useState(false);

  const ChangeBackgroundColor = () => {
    if (window.scrollY > 10) {
      SetChangeColor(true);
    } else {
      SetChangeColor(false);
    }
  };

  useEffect(() => {
    ChangeBackgroundColor();

    window.addEventListener('scroll', ChangeBackgroundColor);
  })

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""} >
      <Container>
        <img className="imggg"
             src="./public/logo.jpg"
             alt="image"/>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">Jastip.in</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
              
            
<div className="col-1 me-3"></div>
          <Nav className="mx-auto">
          <div className="search">
                <input type="text" className="form-control" placeholder="Cari apa?" />
                
              </div>
              <div><button className="btn btn-primary">Search</button></div>
            {navLinks.map((link) => {
              
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                  } end>{link.text}</NavLink>
                </div>
              );
            })}
          </Nav>
          <div>
            <button className="btn btn-outline-primary rounded-1 me-2">Daftar</button>
          </div>
          <div>
            <button className="btn btn-primary rounded-1">Masuk</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent