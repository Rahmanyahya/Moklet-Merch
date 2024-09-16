import Image from "next/image";
import Clothes1 from "@/assets/Baju1.png";
import Clothes2 from "@/assets/Baju2.png";

const clothes = [
  {
    src: Clothes1,
    productName: "Jersey Mokleters",
    price: 150000,
    discount: null, // 50% discount
  },
  {
    src: Clothes2,
    productName: "Jersey Mokleters",
    price: 150000,
    discount: null, // No discount
  },
  {
    src: Clothes1,
    productName: "Jersey Mokleters",
    price: 150000,
    discount: null, // No discount
  },
  {
    src: Clothes2,
    productName: "Jersey Mokleters",
    price: 150000,
    discount: null, // No discount
  },
];

const Product = () => {
  return (
    <section>
      <center>
        <h1 className="font-bold text-[40px] py-[58px] text-[#BE1E2D]">BEST CHOICE</h1>
      </center>
      <center>
        <div className="grid grid-cols-4 px-[10px] pr-[2rem] max-lg:grid-cols-2 gap-3 max-sm:grid-cols-1">
          {clothes.map((clothe, index) => (
           <center>
             <div key={index} className="relative w-[300px] h-[400px] px-3">
              <Image alt={clothe.productName} src={clothe.src} className="object-cover absolute -z-10" />
             
            
                <div className="bg-[#BE1E2D] mt-[10px] ml-[15px] w-[80px] h-[31px] text-left absolute">
                  <center>
                    <h1 className="text-[20px] font-light tracking-[0.3rem]">Offer</h1>
                  </center>
                </div>
            
             
              <div className="bottom-[44px] ml-[34px] text-left w-[100%] absolute">
                <h1 className="text-[20px] font-semibold w-full">{clothe.productName}</h1>
              
                {clothe.discount != null ? (
                  <div>
                  
                    <h1 className="text-[16px] font-medium line-through text-[#BE1E2D]">
                      IDR {clothe.price.toLocaleString("id-ID")}
                    </h1>
                   
                    <h1 className="text-[16px] font-medium">
                      IDR {(clothe.price * (1 - clothe.discount)).toLocaleString("id-ID")}
                    </h1>
                  </div>
                ) : (
                  <h1 className="text-[16px] font-medium">
                    IDR {clothe.price.toLocaleString("id-ID")}
                  </h1>
                )}
                <div className="bg-white mt-[14px] w-[105px] h-[27px]">
                  <center>
                    <h1 className="font-semibold text-black top-1/2">Pre-Order</h1>
                  </center>
                </div>
              </div>
            </div>
           </center>
          ))}
        </div>
      </center>
    </section>
  );
};

export default Product;
