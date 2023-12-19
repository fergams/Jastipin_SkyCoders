import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import {FaCartPlus} from "react-icons/fa" 
import Dropdown from '../components/Dropdownw';
import Card from "../components/Card"

const KatalogPakaian = () => {
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
                  <img src="../img/bajutunik.jpg" alt="unspalsh.com" className=" katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Baju Tunik Kekinian motif bunga (Bangkok) </h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip tunik bangkok model & desain yang terbaru</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 80.000
                      </h5>
                    </Col>
                  </Row>
                </Col>

                <Col className="rounded">
                  <img src="../img/Bajukorea.jpeg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Baju (Korea) Style Wanita</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip korea mulai dari dress hingga wanita hijabers</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 250.000 - 700.000
                        </h5>
                    </Col>
                  </Row>
                </Col>      

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/sweater.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Jastip Sweater H&M</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip produk H&M sweater, hoddie, dll.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 400.000
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
                  <img src="../img/kaoszara.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Jastip T-Shirt Zara Women</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip kaos zara bisa pilih warna</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 300.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/blouse.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Jastip Zara Woman Blouse </h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip blouse zara sale 80%</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 250.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/kemejamen.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">jastip Uniqlo Kemeja Men</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip kemeja linen uniqlo pria</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 299.000
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
                  <img src="../img/kemejabangkok.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" > PO Kemeja (Bangkok) Wanita </h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip Bangkok kemeja wanita murah dan terpercaya</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 100.000 - 300.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Celana.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Celana Panjang Uniqlo Ezy</h3>
                  <p style={{ fontSize: '0.8rem' }} >PO jastip Ezy, koleksi ini tersedia dengan warna dan pola yang dibuat untuk memudahkan Anda melakukan padupadan warna dan siluet, sehingga lebih gaya dalam berpakaian, nyaman dan percaya diri.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 300.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/rok.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Jastip Rok Pendek H&M</h3>
                  <p style={{ fontSize: '0.8rem' }} >Rok H&M fashion berbahan jenas kain lembut dan tidak bikin gerah</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 330.000
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

export default KatalogPakaian
