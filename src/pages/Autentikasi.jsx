import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Autentikasi = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="bg-primary p-5 rounded">
        {/* Konten kotak di sini */}
        <h3 className="text-light">Masukkan Kode Autentikasi</h3>
        <p className="text-light">Ini adalah kotak di tengah berukuran sedang berwarna biru.</p>
      </div>
    </div>
  );
};

export default Autentikasi;
