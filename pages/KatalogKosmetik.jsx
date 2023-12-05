import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import {FaCartPlus} from "react-icons/fa" 
import Dropdown from '../components/Dropdownw';
import Card from "../components/Card"

const KatalogKosmetik = () => {
  return (<div className='homepage'>
  <NavbarComponentLogin/>
  <header className="hkat d-flex align-items-center rounded">
    <Container>
      <Row className="header-box align-center mt-4"></Row>
      <Row className="header-box align-center fw-bold mb-4"><h5> Jastip.in</h5></Row>
      <div></div>
      <Row className="header-box align-center fw-bold mt-4"><h6> Kategori Produk</h6></Row>
      <Dropdown />
    </Container>
  </header>
  <div className='fitur mr-5'></div>
    <Container>
  <Row>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
  </Row>
  <Row>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
  </Row>
  <Row>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
  </Row>
  <Row>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
    <Col>
  <Card/>
    </Col>
  </Row>
    </Container>
  
  <Footer/>
</div>
  )
}

export default KatalogKosmetik