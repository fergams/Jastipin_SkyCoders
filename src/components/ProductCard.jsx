import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import produk from "../assets/img/produk/im.png";

import "../Style/ProductCard.css"; // Import file CSS terpisah jika diperlukan

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    // Implementasi logika penghapusan produk
    console.log("Produk dihapus");
  };

  return (
    <div className="cardd product-card  align-items-center">
      <Col md={1}>
        {/* Input Checkbox */}
        <input type="checkbox" />
      </Col>
      <Col md={2}>
        {/* Gambar Produk */}
        <Card.Img style={{height:"100px", width:"100px"}} variant="top" src={produk} alt="Gambar Produk" />
      </Col>
      <Col md={3}>
        {/* Judul dan Variant Produk */}
        <Card.Title>Judul Produk</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Variant Produk</Card.Subtitle>
      </Col>
      <Col md={2}>
        {/* Harga Awal */}
        <Card.Text>Rp 100.000</Card.Text>
      </Col>
      <Col md={2} className="d-flex align-items-center">
        {/* Button Increment/Decrement */}
        <Button variant="outline-secondary" onClick={handleDecrement}>
          <BsDash />
        </Button>
        <span className="mx-2">{quantity}</span>
        <Button variant="outline-secondary" onClick={handleIncrement}>
          <BsPlus />
        </Button>
      </Col>
      <Col md={2}>
        {/* Total Harga */}
        <Card.Text>Total: Rp {quantity * 100000}</Card.Text>
      </Col>
      <Col md={1}>
        {/* Button Hapus */}
        <Button variant="danger" onClick={handleDelete}>
          <BsTrash />
        </Button>
      </Col>
    </div>
  );
};

export default ProductCard;
