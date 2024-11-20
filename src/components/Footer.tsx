import Image from "next/image";
import ImmortalLogo from "@/assets/IMMORTAL CUP.png";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#133E87] w-full h-[236px] grid grid-cols-2 mt-[83px] overflow-hidden">
      <div className="text-left flex py-[40px]">
        <div className="ml-[69px] mt-16">
          <Image alt="Moklet Merch" src={ImmortalLogo} />
        </div>
      </div>
      <div className="text-right grid grid-cols-2 pt-[40px] pr-[93px]">
        <div className="text-left">
          <p className="font-normal text-[20px]">FAQ</p>
          <p className="font-normal text-[20px] mt-[30px]">PRIVACY POLICY</p>
          <p className="font-normal text-[20px] mt-[30px]">CONTACT US</p>
        </div>
        <div className="text-right ml-[2px]">
          <div className="flex gap-[16px] justify-end ">
            <a
              href=""
              className="font-normal text-[20px] mt-[1px]  hover:underline"
            >
              sporttechnologymoklet
            </a>
            <IoMailOutline size={34} />
          </div>
          <div className="flex gap-[16px] mt-[30px] justify-end">
            <a
              href=""
              className="font-normal text-[20px] mt-[1px] hover:underline"
            >
              @smktelkommalang
            </a>
            <FaInstagram size={34} />
          </div>
          <div className="flex gap-[16px] mt-[30px] justify-end">
            <a
              href=""
              className="font-normal text-[20px] mt-[1px] hover:underline"
            >
              +62 812-9693-9020
            </a>
            <FaWhatsapp size={34} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
