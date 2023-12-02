import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  

const DetailProduk = () => {
  return (
    <div className='homepage'>
    <NavbarComponentLogin/>
    <header className="khat d-flex align-items-center">
    <Container>
      <Row className="header-box align-center mt-4"></Row>
      <Row className="header-box align-center fw-bold mb-4 color-blue"><h5> Jastip.in</h5></Row>
      <div></div>
      <div></div>
    </Container>
    </header>
    </div>
  )
}

export default DetailProduk