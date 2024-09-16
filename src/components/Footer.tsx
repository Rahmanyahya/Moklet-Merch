import Image from "next/image"
import MokletMerchLogo from "@/assets/MokletMerchLogo2.png"
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
      <section className="w-full h-[236px] grid grid-cols-2 bg-[#BE1E2D] mt-[83px] overflow-hidden" >
         <div className="text-left flex py-[40px]" >
           <div className="ml-[69px]"  >
           <Image alt="Moklet Merch" src={MokletMerchLogo}/>
           </div>
           <div className="mt-[53px]" >
            <p className="font-bold text-[20px]" >Thank you for your purchase.</p>
            <p className="font-normal text-[16px]" >@mokletmerch.com</p>
           </div>
         </div>
         <div className="text-right grid grid-cols-2 pt-[40px]">
           <div className="text-left" >
             <p className="font-normal text-[20px]" >FAQ</p>
             <p className="font-normal text-[20px] mt-[30px]" >PRIVACY POLICY</p>
             <p className="font-normal text-[20px] mt-[30px]" >CONTACT US</p>
           </div>
           <div className="text-right mr-[93px]" >
             <div className="flex gap-[16px] justify-end" > 
              <p className="font-normal text-[20px] mt-[1px]">mokletmerch@gmail.com</p>
              <IoMailOutline size={34}/>
            </div>
            <div className="flex gap-[16px] mt-[30px] justify-end" > 
              <p className="font-normal text-[20px] mt-[1px]">@mokletmerch</p>
              <FaInstagram size={34}/>
            </div>
            <div className="flex gap-[16px] mt-[30px] justify-end" > 
              <p className="font-normal text-[20px] mt-[1px] ">+62 813-3105-8857</p>
              <FaWhatsapp size={34}/>
            </div>
             
           </div>
         </div>
      </section>
    )
}

export default Footer