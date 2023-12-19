import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import {FaCartPlus} from "react-icons/fa" 
import Dropdown from '../components/Dropdownw';
import { useNavigate } from "react-router-dom";
import Card from "../components/Card"

const KatalogMakanan = () => {
  
  let navigate = useNavigate();
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
  <div className='fitur'></div>
    <Container className=''>
    <Row className='ms-5'>
                      {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold" >Chek Hup Coffee (Malaysia)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Chek Hup Coffee merupakan minuman dari kopi panggang yang nikmat dan memiliki rasa yang khas.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Banana.jpg" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Banana Chips Rasa Matcha </h3>
                  <p style={{ fontSize: '0.8rem' }} >Keripik pisang dengan taburan matcha diatasnya dan kaya akan rasa</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Nct.png"alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Lightstick NCT Dream Korea</h3>
                  <p style={{ fontSize: '0.8rem' }} >Lampu stik khusus yang melambangkan fandom atau perkumpulan dari fans NCT.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 800.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
          <Row className='ms-5'>
                      {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold" >Chek Hup Coffee (Malaysia)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Chek Hup Coffee merupakan minuman dari kopi panggang yang nikmat dan memiliki rasa yang khas.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Banana.jpg" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Banana Chips Rasa Matcha </h3>
                  <p style={{ fontSize: '0.8rem' }} >Keripik pisang dengan taburan matcha diatasnya dan kaya akan rasa</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Nct.png"alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Lightstick NCT Dream Korea</h3>
                  <p style={{ fontSize: '0.8rem' }} >Lampu stik khusus yang melambangkan fandom atau perkumpulan dari fans NCT.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 800.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
          <Row className='ms-5'>
                      {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold" >Chek Hup Coffee (Malaysia)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Chek Hup Coffee merupakan minuman dari kopi panggang yang nikmat dan memiliki rasa yang khas.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Banana.jpg" alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Banana Chips Rasa Matcha </h3>
                  <p style={{ fontSize: '0.8rem' }} >Keripik pisang dengan taburan matcha diatasnya dan kaya akan rasa</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Nct.png"alt="unspalsh.com" className=" rounded shadow mt-3" />
                  <h3 className="fw-bold">Lightstick NCT Dream Korea</h3>
                  <p style={{ fontSize: '0.8rem' }} >Lampu stik khusus yang melambangkan fandom atau perkumpulan dari fans NCT.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 800.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
    </Container>
  
  <Footer/>
</div>
  )
}

export default KatalogMakanan
