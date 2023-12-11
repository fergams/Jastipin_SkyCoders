import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import produk from "../assets/img/produk/im.png";
import "../Style/Cardout.css";

const Cardout = () => {
  return (
    <div>
      <Card className="itemss  d-flex  " style={{ backgroundImage: "none;", border:"none" }}>
        <Row>
          <Col md={2}>
            {/* Gambar */}
            <Card.Img variant="top" src={produk} alt="Gambar Barang" />
          </Col>
          <Col md={8} className=''>
            {/* Nama Barang */}
            <Card.Title className="nama-barang" style={{fontSize:"18px"}} >Nama Barang</Card.Title>
            {/* Variant Barang */}
            <Card.Subtitle className="mb-2 text-muted font-weight-bold">Variant Barang</Card.Subtitle>
            {/* Harga Barang */}
            <Card.Text className="harga-barang" style={{fontSize:"18px"}} >Rp 100.000</Card.Text>
          </Col>
          <Col className=' align-text-bottom  '><p>5x</p></Col>
        </Row>
      </Card>
    </div>
  );
};

export default Cardout;
