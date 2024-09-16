import localFont from "next/font/local";
import Slider from "../components/Carousesl"
import Cta from "@/components/Cta";
import Model from "@/components/Models"
import Product from "@/components/Product";
import News from "@/components/News"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Slider/>
        <Cta/>
        <Model/>
        <Product/>
        <News/>
        <Footer/>
    </>
  );
}
