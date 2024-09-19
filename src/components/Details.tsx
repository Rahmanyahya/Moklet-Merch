import Image from "next/image";
import detailsImages2 from "@/assets/man/details1.png";
import detailsImages3 from "@/assets/man/detail2.png";
import detailsImages4 from "@/assets/man/detail3.png";
import detailsImage6 from "@/assets/man/deatails5.png"
import detailsImages5 from "@/assets/man/y.png";
import Models1 from "@/assets/Models1.png";
import Models2 from "@/assets/Models2.png";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const clothes = [
  {
    src: Models1,
    Product: "Jersey Mokleters Timeless",
    Price: "170.000",
    Dicount: "150.000",
    Description: "Special Anniversary",
  },
  {
    src: Models2,
    Product: "Jersey Mokleters Timeless",
    Price: "170.000",
    Dicount: "150.000",
    Description: "Special Anniversary",
  },
];

const qty = [1, 2];

type productDetails = {
  productName: string;
  normalPrice: string;
  dicountPrice: string;
  description: string;
};

const details = () => {
  return (
    <section>
      <div>
        <h1 className="mt-[19px] ml-[30px] text-black text-[20px]">
          <i>
            <a href="/Home">Home</a> / <a href="/Product">Product</a>
          </i>
        </h1>
      </div>
      <div className="grid grid-cols-2 px-[195px] max-lg:px-[10px] max-lg:grid-cols-1">
        <center>
        <div className="flex pt-[81px] gap-[17px]">
          <div className="flex-row " >
            <Image alt="detail images" src={detailsImage6} className="rounded-sm"  ></Image>
            <Image alt="detail images " src={detailsImages2} className="mt-[10px] rounded-sm"></Image>
            <Image alt="detail images " src={detailsImages3} className="mt-[10px] rounded-sm"></Image>
            <Image alt="detail images " src={detailsImages4} className="mt-[10px] rounded-sm"></Image>
          </div>
          <div>
            <Image alt="details image" src={detailsImages5} />
          </div>
        </div>
        </center>
        <div></div>
      </div>
      <div className="mt-[142px] px-[10px]">
        <h1 className="px-[10px] font-bold text-[40px] text-black">YOU MIGHT ALSO LIKE</h1>
        <center>
          <div className="mt-[48px] grid grid-cols-4 gap-[30px] max-xl:grid-cols-2 max-md:grid-cols-1">
            {qty.map((_, index) =>
              clothes.map((clothe, idx) => (
                <Card
                  key={`${index}-${idx}`}
                  src={clothe.src}
                  hargaNormal={clothe.Price}
                  hargaDiscount={clothe.Dicount}
                  product={clothe.Product}
                  description={clothe.Description}
                />
              )),
            )}
          </div>
        </center>
      </div>
      <Footer />
    </section>
  );
};

export default details;

