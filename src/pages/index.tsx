import localFont from "next/font/local";
import Slider from "../components/Carousesl"
import Cta from "@/components/Cta";
import Model from "@/components/Models"
import Product from "@/components/Product";
import News from "@/components/News"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
        <Slider/>
        <Cta/>
        <Model/>
        <Product/>
        <News/>
    </>
  );
}
