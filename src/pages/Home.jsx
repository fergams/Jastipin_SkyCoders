import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index"                                                                                                                                                                                        

const Home = () => {
  return (
    <div className='homepage'>
      <header className="w-90 min-vh-100 d-flex align-items-center rounded">
        <Container>
          <Row className="header-box align-center mt-4"><h3>Selamat Datang di Website</h3>
          </Row>
          <Row className="header-box align-center fw-bold mb-4"><h5> Jastip.in</h5></Row>
          <div></div>
          <Row className="header-box align-center fw-bold mt-4"><h6> Website jasa titip produk dan barang baik dari berbagai daerah </h6></Row>
          <Row className="header-box align-center fw-bold"><h6> di Indonesia maupun dari luar negeri</h6></Row>
        </Container>
      </header>
      <div className='produk w-100 min-vh-100'>
        <Container>
      {/* <Row>
        <Col className='text-center mt-4'>
        <button className="btn btn-outline-primary rounded-5 btn-lg me-2" onClick={() => navigate("/morearticle")}>Makanan <i className="fa-solid fa-chevron-right ms-1"></i></button>
        <button className="btn btn-outline-primary rounded-5 btn-lg me-2" onClick={() => navigate("/morearticle")}>Eletronik <i className="fa-solid fa-chevron-right ms-1"></i></button>
        <button className="btn btn-outline-primary rounded-5 btn-lg" onClick={() => navigate("/morearticle")}>Pakaian <i className="fa-solid fa-chevron-right ms-1"></i></button>
        </Col>
      </Row> */}
      <Row>
            <Col>
              <h1 className="text-center fw-bold mt-5">Rekomendasi Produk</h1>
            </Col>
          </Row>
      <Row>
        {ProdukTerbaru.map((Produk) => {
          return <Col key={Produk.id} className='rounded'>
            <img src={Produk.image} alt="unspalsh.com" className='mb-5 rounded shadow mt-3'/>
            <div className='star mb-5'> 
              <i className={Produk.star1}></i>
              <i className={Produk.star2}></i>
              <i className={Produk.star3}></i>
              <i className={Produk.star4}></i>
              <i className={Produk.star5}></i>
            </div>
          </Col>
        })}
      </Row>
        </Container>
      </div>
    </div>
    
  )
}

export default Home