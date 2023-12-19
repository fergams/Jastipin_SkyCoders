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
  <Container className=''>
    <Row className='ms-5'>
                <Col className="rounded">
                  <img src="../img/vaseline.jpg" alt="unspalsh.com" className=" katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Vaseline Gluta (Thailand)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Jastip Thailand vaseline gluta hya murah dan terpercaya</p>
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
                  <img src="../img/Cushionhair.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Cathy Doll Hair Chusion (Thailand)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Cathy doll hair line cushion cosmetics skincare Bangkok Thailand </p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 75.000
                        </h5>
                    </Col>
                  </Row>
                </Col>      

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Lipstik.png"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Lipstik (Korea) Muzigae, Jung Saem Mool, Laka Jelling</h3>
                  <p style={{ fontSize: '0.8rem' }} >Jastip Korea dengan brand ternama terdapat Laka Jelling Nude Gloss, Jung Saem Mool Beauty Lip Pression Glow Lasting Tint, dan Muzigae Mansion Objet Liquid.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 150.000 - 300.000
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
                  <img src="../img/Parfum.jpeg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Parfum Zara Orchid</h3>
                  <p style={{ fontSize: '0.8rem' }} >Parfum zara orchid dengan wangi yang manis da segar</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 150.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/eyeliner.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Eyeliner Cair Tahan Air (Korea)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Eyeliner jastip korea untuk wanita tahan air dan ultratipis</p>
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

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/foundation.jpeg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Foundation Kill Cover</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip foundation full coverge yang siap tutupi kekurangan diwajah kamu</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 200.000
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
                  <img src="../img/cushionbeauty.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >5 Cushion Korea Mulai Dari Cushion Laniage Dll</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip cushion korea yang paling populer</p>
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
                  <img src="../img/eyeshadow.jpeg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Eyeshadow Sivana Color</h3>
                  <p style={{ fontSize: '0.8rem' }} >Sivanna Colors terkenal di Thailand dengan produk-produk makeup terjangkau tapi berkualitas. </p>
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
                  <img src="../img/handbody.jpg"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Thai Goat's Milk Hand & Body lotion 500 ml (Thailand)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Open jastip thailand THAI Goat's Milk Hand & Body Lotion, Kegunaan : Membantu melembabkan dan menutrisi kulit agar kulit tampak sehat terawat.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 40.000
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

export default KatalogKosmetik
