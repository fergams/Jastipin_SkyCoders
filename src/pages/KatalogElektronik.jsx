import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import {FaCartPlus} from "react-icons/fa" 
import Dropdown from '../components/Dropdownw';
import { useNavigate } from "react-router-dom";
import Card from "../components/Card"

const KatalogElektronik = () => {
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
  <Container className=''>
    <Row className='ms-5'>
                <Col className="rounded">
                  <img src="../img/iphone.jpg" alt="unspalsh.com" className=" katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Iphone 12</h3>
                  <p style={{ fontSize: '0.8rem' }} >Jasa titip Iphone 12 legal anti keblokir IMEI</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 2.286.147 - 23.429.062
                      </h5>
                    </Col>
                  </Row>
                </Col>

                <Col className="rounded">
                  <img src="../img/Sound.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Sound System Portable</h3>
                  <p style={{ fontSize: '0.8rem' }} >Sound System Portable Spesifikasi : Connectivity Bluetooth YES Power 1000 Watt 10 inchi Two way system bass reflect, bluetooth...</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 5.000.000
                        </h5>
                    </Col>
                  </Row>
                </Col>      

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Magiccom.jpeg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Magic Com Niko</h3>
                  <p style={{ fontSize: '0.8rem' }} >Jastip magic com nik harga terbaik dan termurah di Desember 2023</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 900.000
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
                  <img src="../img/Mixer.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Akebono Food Mixer</h3>
                  <p style={{ fontSize: '0.8rem' }} >Akebono food mixer SI-b10 10 liter mixer pencampur makanan</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 4.450.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Ac.jpeg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Jastip AC Philips</h3>
                  <p style={{ fontSize: '0.8rem' }} >AC termurah dan bergaransi hanya bulan Desember 2023</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 2.000.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Setrika.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Setrika Listrik dan Uap</h3>
                  <p style={{ fontSize: '0.8rem' }} >Setrika listrik dan uap dengan harga termurah</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 600.000
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
                  <img src="../img/Dispenser.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Dispenser Philips Jastip</h3>
                  <p style={{ fontSize: '0.8rem' }} >Dispenser philips dengan galon dibawahnya</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 2.699.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Microwave.jpeg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Microwave Oven</h3>
                  <p style={{ fontSize: '0.8rem' }} >Jastip microwave dengan kapasitas 23 liter</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 3.000.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Kompor.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Kompor Listrik</h3>
                  <p style={{ fontSize: '0.8rem' }} >Kompor listrik yang memiliki wat kecil, dengan harga murah</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 6.000.000
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


export default KatalogElektronik
