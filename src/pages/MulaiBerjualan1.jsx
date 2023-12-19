import NavbarComponentLogin from "../components/NavbarComponentLogin";
import "../Style/MulaiBerjualan1.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Backcomp3 from "../components/Backcomp4";
import { VscCircleLargeFilled } from "react-icons/vsc";

const MulaiBerjualan = () => {
  const iconSize = "2x";
  let navigate = useNavigate();
  return (
    <>
      <div className="" style={{ height: "125px", backgroundColor: "#0081C9" }}>
        <NavbarComponentLogin />
      </div>
      <div className="Mulai">
        <div className="subjud">
          <Backcomp3 />
        </div>
        <form style={{ width: "90%" }} action="">
          <div className="Menuinp">
            <div className=" d-flex flex-column ">
              <div className="dragImage">
              <label class="custum-file-upload w-100 h-100 " for="file">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill=""
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div class="text">
                <span>Click to upload File</span>
              </div>
              <input type="file" id="file" />
            </label>
              </div>
              <div className=" d-flex my-2 color"><VscCircleLargeFilled style={{color:"#0081C9", width:"30px", height:"20px"}} /><p className=" text-primary ">*Saya akan memastikan bahwa semua informasi yang saya unggah sesuai dengan persyaratan yang telah ditentukan.</p></div>
            </div>
            <div className="inp">
              <div className="NP">
                <label style={{ width: "200px" }} for="nama_pengguna">
                  Nama Pengguna:
                </label>
                <input id="nama_pengguna" className=" form-control  in w-50" type="text" />
              </div>
              <div className="NP">
                <label style={{ width: "200px" }} for="nama_produk">
                  Nama Produk:
                </label>
                <input id="nama_produk" className=" form-control  in w-50" type="text" />
              </div>
              <div className="NP">
                <label style={{ width: "200px" }} for="harga">
                  Harga:
                </label>
                <input id="harga" className=" form-control  in w-50" type="text" />
              </div>
              <div className="NP">
                <label style={{ width: "200px" }} for="variant">
                  Variant:
                </label>
                <input id="variant" className=" form-control  in w-50" type="text" />
              </div>
              <div className="NP">
                <label style={{ width: "200px" }} for="kuantitas">
                  Kuantitas:
                </label>
                <input id="kuantitas" className=" form-control  in w-50" type="text" />
              </div>
              <div className="NP flex-column gap-3">
                <div className=" d-flex  ">
                  <label style={{ width: "200px" }} for="spesifikasi_produk">
                    Spesifikasi Produk
                  </label>
                  {/* <input id="nama_pengguna" className=" form-control  in w-50" type="text" /> */}
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="snama_produk">
                    Nama Produk :
                  </label>
                  <input id="snama_produk" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="smerek">
                    Merek :
                  </label>
                  <input id="smerek" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="snegara_asal">
                    Negara Asal :
                  </label>
                  <input id="snegara_asal" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="sdikirim_ke">
                    Dikirim Ke :
                  </label>
                  <input id="sdikirim_ke" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="sstatus_ketersediaan">
                    Status Ketersediaan :
                  </label>
                  <input id="sstatus_ketersediaan" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="spriode_preorder">
                    Priode Pre-Oreder :{" "}
                  </label>
                  <input id="spriode_preorder" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="sstok">
                    Stok :
                  </label>
                  <input id="sstok" className=" form-control  in w-50" type="text" />
                </div>
                <div className=" d-flex ">
                  <label style={{ width: "200px" }} for="sketerangan">
                    Keterangan :
                  </label>
                  <input id="sketerangan" className=" form-control  in w-50" type="text" />
                </div>
              </div>
              <div className="NP">
                <label style={{ width: "200px" }} for="deskripsi_produk">
                  Deskripsi Produk:
                </label>
                <textarea id="deskripsi_produk" className=" form-control  in w-50" type="text" />
              </div>
              {/* <br /> */}
              <div className="">
                <button className="btn btn-lg btn-primary my-3 w-25 rounded-5 ">Kirim</button>
              </div>
              {/* <div></div> */}
            </div>
          </div>
        </form>
      </div>
      <br />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default MulaiBerjualan;
