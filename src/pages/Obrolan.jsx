import React from "react";
import "../Style/Obrolan.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponentLogin from "../components/NavbarComponentLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Obrolan = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="" style={{ height: "125px", backgroundColor: "#0081c9", paddingBottom: "0%", marginBottom: "0%" }}>
        <NavbarComponentLogin></NavbarComponentLogin>
      </div>
      <div class="d-flex">
        <Container className="Judul-obrolan">
          <Row>
            <Col className="judul">Obrolan</Col>
          </Row>
          <Col>
            <div className="logo-profile d-flex align-items-center">
              <img src="../img/testimonial/orang2.jpg" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>Toko Aisyah</p>
              </div>
            </div>
            <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
          </Col>
          <Col>
            <div className="logo-profile d-flex align-items-center">
              <img src="../img/testimonial/orang3.jpg" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>Toko Berkah Selalu</p>
              </div>
            </div>
            <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
          </Col>
          <Col>
            <div className="logo-profile d-flex align-items-center">
              <img src="../img/testimonial/orang1.jpg" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>Renatha Abgriel</p>
              </div>
            </div>
            <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
          </Col>
          <Col>
            <div className="logo-profile d-flex align-items-center">
              <img src="../img/testimonial/orang4.jpg" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>Jastip Wilayah Bandung</p>
              </div>
            </div>
            <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
          </Col>
          <Col>
            <div className="logo-profile d-flex align-items-center">
              <img src="../img/testimonial/orang5.jpg" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>Koleksi baju lucu</p>
              </div>
            </div>
            <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
          </Col>
        </Container>

        <div className="Chat">
          <Row>
            <Col className="Isi-Chat" style={{ backgroundColor: "#D7E3F6", width: "875px", height: "600px", marginRight: "10px", marginTop: "30px", marginLeft: "0px" }}>
              <div className="foto d-flex align-items-center">
                <img src="../img/testimonial/orang2.jpg" className="img-fluif rounded-circle ml-1 mt-3" style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
                <p style={{ marginLeft: "10px", marginTop: "10px" }}>Toko Aisyah</p>
              </div>
              <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
              <div className="foto d-flex align-items-center">
                <img src="../img/testimonial/orang2.jpg" className="img-fluif rounded-circle ml-1 mt-3" style={{ width: "65px", height: "65px", marginLeft: "10px" }} />
                <Col className="chat">
                  <p style={{ marginLeft: "10px", marginTop: "5px" }}> Halo Kak, mohon maaf sebelumnya</p>
                  <p style={{ marginLeft: "10px" }}> Untuk Photocard member Chanyeol sedang kosong nih...</p>
                </Col>
              </div>
              <div className="foto d-flex align-items-center">
                <img src="../img/testimonial/orang2.jpg" className="img-fluif rounded-circle ml-1 mt-3" style={{ width: "65px", height: "65px", marginLeft: "10px" }} />
                <Col className="chat">
                  <p style={{ marginLeft: "10px", marginTop: "5px" }}> Mau dicancel aja atau ganti dengan member yang lain ya kak?</p>
                  <p style={{ marginLeft: "10px" }}> Maaf ya kak, lupa update data di katalog huhu..</p>
                </Col>
              </div>
              <Col className="kirim" style={{ backgroundColor: "#1b9bee", width: "855px", height: "40px", marginRight: "20px", marginTop: "307px", justifyContent: "center", borderRadius: "10px" }}>
                <div className=" col d-flex">
                  <p style={{ fontSize: "10px", fontWeight: "lighter", paddingTop: "13px", paddingBottom: "5px", borderRadius: "10px", textAlign: "left", marginLeft: "10px" }}>Kirim Pesan...</p>
                  <FontAwesomeIcon icon="fa-thin fa-paper-plane" className="mr-2" />
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Obrolan;
