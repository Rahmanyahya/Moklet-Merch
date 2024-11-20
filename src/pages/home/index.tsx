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
    <div className=" bg-[#E3F2FF]">
        <Slider/>
        <Cta/>
        <Clasement/>
        {/* <Model/> */}
        {/* <Product/>*/}
        {/* <News/>  */}
        <Footer/>
        <div className="fixed top-0 left-0 right-0">
        <Navbar/>
        </div>
        </div>
    </>
  );
}
