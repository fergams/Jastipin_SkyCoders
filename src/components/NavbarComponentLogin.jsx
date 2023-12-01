import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import {useState,useEffect} from "react";
import {navLinks} from "../data/index";
import {NavLink} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa"

const NavbarComponentLogin = () => {
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

          <Nav className="mx-auto mt-3">
<form class="form ">
    <label for="search">
        <input class="input" type="text" required="" placeholder="Cari Produk atau barang" id="search"/>
        <div class="fancy-bg"></div>
        <div class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
    </label>
</form>
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
            <FaCartPlus className='ikoncart fa-2xl' onClick={() => navigate("/Keranjang")}/></div>
        <div class="avatar"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponentLogin