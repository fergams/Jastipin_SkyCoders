import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {} from "../data/index"                                                                                                                                                                                        

const Home = () => {
  return (
    <div className='homepage'>
      <header className="w-90 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box align-center mt-4"><h3>Selamat Datang di Website</h3>
          </Row>
          <Row className="header-box align-center fw-bold mb-4"><h5> Jastip.in</h5></Row>
          <div></div>
          <Row className="header-box align-center fw-bold mt-4"><h6> Website jasa titip produk dan barang baik dari berbagai daerah </h6></Row>
          <Row className="header-box align-center fw-bold"><h6> di Indonesia maupun dari luar negeri</h6></Row>
        </Container>
      </header>
      <Row>
        <Col className='text-center mt-4'>
        <button className="btn btn-outline-primary rounded-5 btn-lg me-2" onClick={() => navigate("/morearticle")}>Makanan <i className="fa-solid fa-chevron-right ms-1"></i></button>
        <button className="btn btn-outline-primary rounded-5 btn-lg me-2" onClick={() => navigate("/morearticle")}>Eletronik <i className="fa-solid fa-chevron-right ms-1"></i></button>
        <button className="btn btn-outline-primary rounded-5 btn-lg" onClick={() => navigate("/morearticle")}>Pakaian <i className="fa-solid fa-chevron-right ms-1"></i></button>
        </Col>
      </Row>
      <div className='Kelas min-vh-100'></div>
      
    </div>
    
  )
}

export default Home