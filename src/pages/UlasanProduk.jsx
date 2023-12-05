import NavbarComponentLogin from '../components/NavbarComponentLogin'
import Footer from '../components/Footer'
import UlasanP from '../assets/img/UlasanP.png'
import Rating from '../assets/img/Rating.png'
import Hanna   from '../assets/img/Hanna.png'
import HannaU   from '../assets/img/HannaU.png'
import Rony   from '../assets/img/Rony.png'
import RonyU   from '../assets/img/RonyU.png'

const UlasanProduk= () => {
    return (
    <>
        <div className="bg-primary" style={{height:'125px'}}>
            <NavbarComponentLogin />
        </div>
        <img src={UlasanP} alt="" style={{width:'90%', height:'60px', marginTop:'2%', marginLeft:'5%'}}/>
        <img src={Rating} alt="" style={{width:'80%', marginLeft:'10%', marginTop:'2%'}}/>
        <hr className='my-5 mx-5 border-2' style={{borderColor:'dark', borderWidth:'3'}} />
        <div className="hanna">
            <div className="">
                <div className="foto">
                    <img src={Hanna} alt=""style={{width:'40%', marginLeft:'5%'}}/>
                    <p style={{marginLeft:'14%', maxWidth:'50%'}}> Makanannya sampai dengan aman, 3 hari yang lalu pesan dan barangnya baru sampai tadi pagi. 
                        Produk yang dikirim sesuai dengan yang aku pesan. Sesuai dengan yang difoto makanannya.
                        Makasihhh^^
                    </p>
                    <img src={HannaU} alt="" style={{width:'40%', marginLeft:'14%'}}/>
                </div>
                <div className="foto1" style={{marginTop:'3%'}}>
                    <img src={Rony} alt=""style={{width:'40%', marginLeft:'5%'}}/>
                    <p style={{marginLeft:'14%', maxWidth:'50%'}}> Akhirnya yang ditunggu-tunggu sampai. 
                        Cewekku pengen banget croissant dari Arab ini karena fyp tiktok katanya beda sama yang di Indo. 
                        Makasih banget min, jastipnya terpercaya pol ini, semoga makin disayang pacar ku yaa karena udh 
                        effort beli ini make jastip, hehe...
                        </p>
                    <img src={RonyU} alt="" style={{width:'20%', marginLeft:'14%', marginBottom:'3%'}}/>
                </div>


            </div>
           
        </div>
        <Footer />
    </>
    )
}

export default UlasanProduk
