"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import MokletMerchLogo from "@/assets/MokletMerchLogo.png";

const item = [1, 2, 3];

export default function Component() {
  return (
    <section className="h-[320px] mt-[58px] w-screen sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        className="overflow-hidden"
        theme={{
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
            snap: "snap-x",
          },
          indicators: { base: "hidden" },
          root: {
            leftControl:
              "absolute right-[201px] text-black top-[7.5rem] flex h-full items-center justify-center px-4 focus:outline-none",
            rightControl:
              "absolute text-black right-[150px] top-[7.5rem] flex h-full items-center justify-center px-4 focus:outline-none",
          },
          control: {
            base: "inline-flex h-8 w-8 items-center justify-center border-2 border-black w-[54px] h-[54px]  sm:h-10 sm:w-10",
            icon: "h-[19.6px] w-[9.5px] text-black sm:h-6 sm:w-6",
          },
        }}
      >
        {item.map((item) => (
          <div key={item} className="flex h-full items-center justify-center ">
            <center>
              <div className="grid grid-cols-3 max-xl:grid-cols-1">
                <div className="">
                  <h1 className="text-[40px] font-bold text-black top-1/3 mt-[20px] absolute ">
                    UP COMING
                  </h1>
                </div>
                <div>
                  <Image
                    alt="Moklet Merch"
                    src={MokletMerchLogo}
                    className=""
                  />
                </div>
                <div className="text-left mt-[2rem]">
                  <h1 className="text-[32px] font-bold  text-primaryRed ">
                    Moklet Merch x Mokleters
                  </h1>
                  <p className="mt-[20.95px] mb-[20px] font-normal text-[24px] text-defBlack">
                    Clothing Colaboration and
                    <br /> several other interesting
                    <br /> accecories
                  </p>
                  <a
                    href=""
                    className="underline hover:text-primaryRed text-[24px] text-defBlack"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </center>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
