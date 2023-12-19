import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarComponentLogin from "../components/NavbarComponentLogin";
import Backcomp2 from "../components/Backcomp2";
import Form from "react-bootstrap/Form";
import { IoIosChatbubbles } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import "../Style/Keranjang.css";
import { useNavigate } from "react-router-dom";   

const Keranjang = () => {
  let navigate = useNavigate();
  return (
    <div className="KeranjangPages">
      <NavbarComponentLogin />
      <head className="khat d-flex align-item-center">
        <Container>
          <Row>
            <div className="check">
              <Backcomp2 />
            </div>
            <br />
            <div style={{ padding: "10px 20px" }} className="perjudul d-flex align-items-center ">
              {/* <Col className=" d-flex gap-2" ><input type="checkbox" style={{width:"20px" , height:"20px", alignItems:"center"}} label="Check me out"/><p>Produk</p></Col> */}
              <Col>
                <Form.Check type="checkbox" label="Produk" />
              </Col>
              <Col>Harga Satuan</Col>
              <Col>Kuantitas</Col>
              <Col>Total Harga</Col>
              <Col>Aksi</Col>
            </div>
            <div className="isinya">
              <div style={{ fontSize: "20px", paddingLeft: "55px", fontWeight: "bold" }} className=" py-4 d-flex  ">
                <input type="checkbox" />
                berkah.jastip
                <IoIosChatbubbles styles={{ color: "#0081C9" }} />
              </div>
              <hr />
              <Col>
                <ProductCard />
              </Col>
              <br />
              <Col>
                <ProductCard />
              </Col>
            </div>
            <div>
              <div className="CheckSec">
                <Row className="onediv">
                  {/* Bagian kiri (poin 1-3) */}
                  <Col className="left-section">
                    <div className="d-flex ">
                      {/* 1. Input Checkbox */}
                      <Form.Check type="checkbox" style={{ width: "35px", height: "35px" }} />

                      {/* 2. Pilih semua */}
                      <Button variant="link">Pilih semua</Button>
                    </div>

                    {/* 3. Text button Hapus */}
                    <Button variant="danger">Hapus</Button>
                  </Col>

                  {/* Bagian kanan (poin 4-6) */}
                  <Col className="right-section gap-3 ">
                    {/* 4. Total Produk yang terpilih */}
                    <p>Total Produk: (2)</p>

                    {/* 5. Total harga */}
                    <p>RP 120.000</p>

                    {/* 6. Button Primary Bertuliskan "Checkout" */}
                    <div className="buttoncheck" > 
                    <Button variant="primary" onClick={() => navigate("/Checkout")}style={{ cursor: "pointer" }}>Checkout</Button>
                    </div>

                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </head>
    </div>
  );
};

export default Keranjang;
