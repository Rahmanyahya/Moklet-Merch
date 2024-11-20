import Slider from "../../components/Carousesl"
import Cta from "@/components/Cta";
// import Model from "@/components/Models"
import Clasement from "@/components/Clasement";
// import Product from "@/components/Product";
// import News from "@/components/News"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-[#E3F2FF]">
        <Navbar/>
        <Slider/>
        <Cta/>
        <Clasement/>
        {/* <Model/> */}
        {/* <Product/>*/}
        {/* <News/>  */}
        <Footer/>
        </div>
    </>
  );
}
