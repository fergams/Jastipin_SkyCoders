import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Autentikasi.css";
import user from "../assets/img/user.png";
import Button from "react-bootstrap/Button";

const Autentikasi = () => {
  const preventWheel = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="bg rounded">
        <div className="p-5 rounded-5">
          {<img src={user} width="120" height="120" alt="Profle" className="position-relative  start-50 translate-middle m-2 heihgt-20 mt-5" />}
          <h3 className="text-light  text-center" style={{ padding: "3vh" }}>
            Masukkan Kode Autentikasi
          </h3>
          <div className="d-flex justify-content-around ">
            <div className="p-1 ">
              {/* Konten Grid 1 */}
              <p>
                <input type="number" onWheel={{ preventWheel }} className="form-control my-1 py-2" style={{ width: "8vh", heigth: "7vh" }} />
              </p>
            </div>
            <div className="p-1">
              {/* Konten Grid 2 */}
              <p>
                <input type="number" className="form-control my-1 py-2" style={{ width: "8vh", heigth: "7vh" }} />
              </p>
            </div>
            <div className="p-1">
              {/* Konten Grid 3 */}
              <p>
                <input type="number" className="form-control my-1 py-2" style={{ width: "8vh", heigth: "7vh" }} />
              </p>
            </div>
            <div className="p-1 ">
              {/* Konten Grid 4 */}
              <p>
                <input type="number" className="form-control my-1 py-2" style={{ width: "8vh", heigth: "7vh" }} />
              </p>
            </div>
          </div>

          <p className="text-light  text-center">Belum Menerima kode?</p>
          <p className="text-light  text-center">Kirim ulang kode</p>
          <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
            <Button className='buton' variant="primary" style={{ width: "18vh" }}>Kirim</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autentikasi;
