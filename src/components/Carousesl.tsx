"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Image1 from "@/assets/Timnas3.jpg";
import Image2 from "@/assets/Timnas2.jpeg";
import Image3 from "@/assets/timnas4.jpeg";
const ImageList = [
  {
    id: "Image1",
    src: Image1, // Tambahkan src untuk setiap gambar
  },
  {
    id: "Image2",
    src: Image2,
  },
  {
    id: "Image3",
    src: Image3,
  },
];

export function Component() {
  return (
    <section className=" w-full min-h-[100%] max-h-[100%] object-fill max-sm:h-[60vh] md:h-[40vh] xl:h-[100vh] lg:h-[100vh] 2xl:h-[100vh]">
      <Carousel
        className="rounded-none"
        theme={{
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
            snap: "snap-x",
          },
          control: {
            base: "inline-flex m-[1rem] h-10 w-10 items-center justify-center border-2 border-white sm:w-10 sm:h-10",
          },
          indicators: {
            base: "h-[15px] w-[30px] rounded-[3px]",
            active: {
              on: "bg-[#BE1E2D] dark:bg-gray-800",
              off: "bg-white/50 hover:bg-white ",
            },
          },
        }}
      >
        {ImageList.map((imageItem) => (
          <div
            key={imageItem.id}
            id={imageItem.id}
            className="flex h-full relative bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            <Image
              src={imageItem.src}
              alt={imageItem.id}
              layout="fill"
              objectFit="cover"
            />
            <div className="text-white absolute text-left bottom-[63px] left-[248px] max-sm:left-[3rem] max-lg:left-[7rem] ">
              <h1 className="text-5xl font-extrabold max-sm:text-2xl">
                Timnas Indonesia 
              </h1>
              <p className="text-xl mt-[10px] mb-[20px] max-sm:text-sm">
                Timnas Indonesia Siap Menjamu Arab Saudi<br /> Pada Kualifikasi Piala Dunia
              </p>
              <button className="border-white border-2 py-[0.8rem] text-lg font-bold w-[60%] max-sm:py-[0.3rem] hover:bg-primaryRed hover:border-primaryRed duration-200">
                Read
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Component;
