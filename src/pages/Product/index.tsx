import Footer from "@/components/Footer"

import Models1 from "@/assets/Models1.png"
import Models2 from "@/assets/Models2.png"
import Card from "@/components/Card"

const clothes = [
    {
        src: Models1,
        Product: "Jersey Mokleters Timeless",
        Price: "170.000",
        Dicount: "150.000",
        Description: "Special Anniversary"
    },
    {
        src: Models2,
        Product: "Jersey Mokleters Timeless",
        Price: "170.000",
        Dicount: "150.000",
        Description: "Special Anniversary"
    }
]

const qty = [1,2,3,4,5,6]
export default function Costume() {
    return (
        <>
        <section className="w-screen min-h-screen overflow-hidden">
            <div>
                <h1 className="mt-[19px] ml-[30px] text-black text-[20px]">
                    <i>
                        <a href="/Home">Home</a> / <a href="/Product">Product</a>
                    </i>
                </h1>
            </div>
            <div className="flex">
               
                <div className="text-left w-[20vw] max-xl:hidden max-xl:w-0">
                    <div id="categories" className="ml-[30px] mt-[30px]">
                        <h1 className="text-[24px] font-semibold text-black">Categories</h1>
                        <p className="font-normal text-[20px] mt-[12px] text-black">T-shirt</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Jersey</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Long Sleeve</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Jacket</p>
                    </div>
                    <div id="accessories" className="mt-[49px] ml-[30px]">
                        <h1 className="font-semibold text-black text-[24px]">Accessories</h1>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Hat</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Belt</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Syal</p>
                        <p className="font-normal text-[20px] mt-[12px] text-black">Bracelet</p>
                    </div>
                </div>
                <div className="w-full">
                    <center>
                        <div className="w-[80vw] mt-[40px] max-xl:w-[100vw]">
                            <center>
                                <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                                    {
                                        qty.map((_, index) => (
                                            clothes.map((clothe, idx) => (
                                                <Card
                                                    key={`${index}-${idx}`}
                                                    src={clothe.src}
                                                    hargaNormal={clothe.Price}
                                                    hargaDiscount={clothe.Dicount}
                                                    product={clothe.Product}
                                                    description={clothe.Description}
                                                />
                                            ))
                                        ))
                                    }
                                </div>
                            </center>
                        </div>
                    </center>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}
