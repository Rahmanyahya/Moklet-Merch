"use client";

import Navbar from "./Navbar"; // Make sure the path to Navbar is correct
import Image1 from "@/assets/Timnas3.jpg";
import Image2 from "@/assets/Timnas2.jpeg";
import Image3 from "@/assets/timnas4.jpeg";
import logo from "../assets/IMMORTAL CUP.png";
import Image from "next/image";

export default function Component() {
  return (
    <>
      {/* Render the Navbar */}
      <nav>
        <div className="flex gap-10 absolute mt-8 z-20 w-full items-center p-4 bg-transparent text-white pt-0"> {/* Changed bg-blue-700 to bg-blue-500 */}
          <a href="/" className="flex items-center ml-20">
            <Image
              src={logo}
              alt="Moklet Merch Logo"
              className="h-[40px] w-[200px] mr-2"
            />
            <span className="font-bold text-lg"></span>
          </a>

          {/* Link */}
          <div className="flex justify-between items-center w-full mr-20 text-2xl">
            <div className="gap-x-[50px] flex">
              <a href="../home" className="hover:text-gray-300">
                Home
              </a>
              <a href="../News" className="hover:text-gray-300">
                News
              </a>
              <a href="../Clasement" className="hover:text-gray-300">
                Top Player
              </a>
              <a href="./Footer" className="hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Set a light blue background */}
      <div className="bg-[#E3F2FF] min-h-screen">
        <div className="container mx-auto mt-40 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* News Card 1 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={Image1.src}
                alt="Technology acquisitions"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Prediksi Skor China vs Jepang: Kemenangan Samurai Biru Bisa
                  Untungkan Timnas Indonesia
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Prediksi skor pertandingan China vs Jepang di ronde 3
                Kualifikasi Piala Dunia 2026 dapat menguntungkan Timnas
                Indonesia.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={Image2.src}
                alt="Technology acquisitions"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Berita Terkini Seputar Timnas: Update dan Analisis Terbaru
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ikuti perkembangan terbaru dari Timnas Indonesia, termasuk
                analisis pertandingan dan berita eksklusif lainnya.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-16 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={Image3.src}
                alt="Technology acquisitions"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Jadwal Pertandingan dan Prediksi Timnas di Kualifikasi
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Cek jadwal lengkap pertandingan Timnas di kualifikasi dan
                prediksi performa mereka menghadapi lawan-lawan tangguh.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-16 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
