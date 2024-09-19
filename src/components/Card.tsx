import Image from "next/image";

interface Card {
    src: any;
    hargaNormal: string;
    hargaDiscount: string;
    product: string;
    description: string;
}

const Product: React.FC<Card> = ({ src, hargaNormal, hargaDiscount, product, description }) => {
    return (
        <div className="flex flex-col items-center">
           
            <div className="w-[320px] h-[450px] rounded-[5px] max-x
            ">
                <Image alt="Model Image" src={src} className="object-cover" />
            </div>
            <div className="object-none mt-[16px] w-[320px] text-left max-2xl:ml-[2rem] max-xl:ml-0">
                <h1 className="font-normal text-[16px] text-black">{product}</h1>
                <div>
                    {hargaDiscount === "" ? (
                        <div className="text-left">
                            <h1 className="font-bold text-[20px] text-primaryRed">IDR {hargaNormal}</h1>
                            <p className="text-primaryRed font-normal text-[10px]">{description}</p>
                        </div>
                    ) : (
                        <div className="text-left flex gap-1 items-start">
                            <p className="font-bold text-[10px] text-gray-500 line-through">IDR {hargaNormal}</p>
                            <div>
                                <h1 className="font-bold text-[20px] text-primaryRed mt-[-5px]">IDR {hargaDiscount}</h1>
                                <p className="text-primaryRed font-normal text-[10px]">{description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
