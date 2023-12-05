import NavbarComponentLogin from '../components/NavbarComponentLogin'
import FAQ from "../assets/img/FAQ.png"
import Footer from '../components/Footer'

const Faq = () => {
    return (
    <div className="profile bg-primary" style={{height:'125px'}}>
        <NavbarComponentLogin /> 
        <img src={FAQ} alt=""  style={{width:'90%', height:'55px', marginTop:'12%', marginLeft:'5%' }}/>
        <div className="teks" style={{marginLeft:'5%', marginTop:'2%', fontSize:'15px'}}>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%'}}>Apa itu Jastipin ?</p>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%'}}>Bagaimana menggunakan layanan Jastipin ?</p>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%'}}>Apakah Jastipin melayani luar kota atau negara ?</p>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%'}}>Apakah layanan Jastipin aman ?</p>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%'}}>Bagaimana cara melacak pesanan di Jastipin ?</p>
            <p style={{backgroundColor:'#F9F9F9', padding:'10px', borderRadius:'10px', maxWidth:'95%', marginBottom:'30px'}}>Berapa kisaran ongkos titip barang di Jastipin ?</p>
        </div>

        <Footer />

    </div>
    )
}

export default Faq