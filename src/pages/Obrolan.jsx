import React from "react";
import "../Style/Obrolan.css";
import { Button, Icon, Image, Item, Label, Rating } from "semantic-ui-react";
import { Container, Row, Col, Form } from "react-bootstrap";
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
              <img src="../img/toko.png" className="img-fluif rounded-circle ml-4 mt-4" style={{ width: "60px", height: "60px", marginLeft: "50px" }} />
              <div className="teks-obrolan">
                <p>berkah.jastip</p>
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
        </Container>

        <div className="Chat">
          <Row>
            <Col className="Isi-Chat" style={{ backgroundColor: "#D7E3F6", width: "875px", height: "500px", marginRight: "10px", marginTop: "30px", marginLeft: "0px" }}>
              <div className="foto d-flex align-items-center">
                <img src="../img/toko.png" className="img-fluif rounded-circle ml-1 mt-3" style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
                <p style={{ marginLeft: "10px", marginTop: "10px" }}>berkah.jastip</p>
              </div>
              <hr className="my-3 mx-0 border-2" style={{ borderColor: "dark", borderRight: "35%" }} />
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
