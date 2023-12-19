import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import NavbarComponentLogin from "../components/NavbarComponentLogin";
import Backcomp from "../components/Backcomp";
import Cardout from "../components/Cardout.jsx";
import ToggleButton from "../components/ToggleButton.jsx";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "../Style/Checkout.css";

const Checkout = () => {
  let navigate = useNavigate();
  return (
    <div className="pages">
      <NavbarComponentLogin />
      <head className="khat d-flex align-item-center">
        <Container>
          {/* <Row className="header-box align-center"></Row> */}
          <div className="check">
            <Backcomp />
          </div>
          <br />
          <div className="isi d-flex justify-content-between px-3 ">
            <div>
              <div className=" p-3 gap-2  d-flex " style={{ fontSize: "20px" }}>
                <IoLocationSharp style={{ width: "20px", height: "25px", color: "#0081C9" }} />
                Alamat Pengiriman
              </div>
              <div className="" style={{ paddingLeft: "40px" }}>
                <p className="m-0">Hanna | (+62) 895-3314-6732</p>
                <p className=" m-0 ">Nongsa Digital Park Kawasan Ekonomi Khusus Nongsa </p>
                <p>Batam, Kepulauan Riau.</p>
              </div>
            </div>
            <IoIosArrowForward style={{ width: "30px", height: "30px", color: "#0081C9" }} />
          </div>
          <br />
          <div className="barang">
            <div>
              <div style={{ fontSize: "20px", paddingLeft: "55px", fontWeight: "bold" }} className=" py-4 ">
                berkah.jastip
              </div>
              <hr />
              <div>
                <Cardout />
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className="Pesanan">
              <div>
                <p>Pesan:</p>
                <p>Total Pesanan (2 Produk) :</p>
              </div>
              <div>
                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>Silahkan Tinggalkan Pesan..</p>
                <p>RP120.000</p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className="metod">
              <div className=" d-flex align-items-center gap-3 ">
                <div style={{ marginRight: "400px" }} className=" d-flex align-items-center  ">
                  <RiMoneyDollarCircleFill style={{ width: "35px", height: "35px", color: "#3F8CFF" }} />
                  <p>Metode Pembayaran</p>
                </div>
                <div>
                  <ToggleButton />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className="Totall d-flex gap-5 ">
              <div>
                <p>Total Pembayaran</p>
                <p>RP 120.000</p>
              </div>
              <div>
                <Button variant="primary" onClick={() => navigate("/Pembayaran")} style={{ cursor: "pointer" }}>
                  Buat Pesanan
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </head>
    </div>
  );
};

export default Checkout;
