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
                <Col className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className=" katalog rounded shadow mt-3" />
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

                <Col className="rounded">
                  <img src="../img/Banana.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
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

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/BlunderCokro.png"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Blunder Cokro Khas Madiun</h3>
                  <p style={{ fontSize: '0.8rem' }} >Produk roti legendaris dengan kelembutan dari roti bluder Cokro memiliki tempat spesial tersendiri di hati.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 20.000
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
                  <img src="../img/Bakpia.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Bakpia Pathok 25 (Khas Yogyakarta)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Bakpia Pathok 25 merupakan jajanan populer yang menjadi oleh-oleh khas Kota Yogyakarta.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 40.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/StrudelMalang.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Strudel Oleh - Oleh Khas Malang</h3>
                  <p style={{ fontSize: '0.8rem' }} >Strudel merupakan kue yang berlapis terbuat dari pastri dan isinya berbagai macam buah-buahan.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 50.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Lays.png"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Lays Fusion (Arab Edition)</h3>
                  <p style={{ fontSize: '0.8rem' }} >PO dari Arab Saudi, barang sampai akhir oktober. Kami menerima pesanan barang atau makanan.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 35.000
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
                  <img src="../img/Piepisang.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Pie Pisang Khas Lampung</h3>
                  <p style={{ fontSize: '0.8rem' }} >Makanan ini memiliki teksturnya kering di bagian luarnya namun bagian dalamnya terasa lembut.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 55.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Dodolgarut.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Dodol Garut Original</h3>
                  <p style={{ fontSize: '0.8rem' }} >Dodol Garut memiliki rasa yang manis dan dipadukan dengan berbagai varian rasa.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 15.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/croissant.png"alt="unspalsh.com" className="katalog rounded shadow mt-3"  onClick={() => navigate("/DetailProduk")} style={{cursor:'pointer'}}/>
                  <h3 className="fw-bold">Croissant Arab Saudi</h3>
                  <p style={{ fontSize: '0.8rem' }} >Croissant termasuk salah satu jenis flaky pastry yang memiliki tekstur berlapis-lapis. </p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2"  onClick={() => navigate("/DetailProduk")} style={{cursor:'pointer'}}/>
                        Rp 15.000
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
