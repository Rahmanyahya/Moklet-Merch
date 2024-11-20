"use client";
import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

export default function Calendar() {
  // Sample data for the table
  const scheduleData = [
    {
      pos: 1,
      club: "Club A",
      m: 10,
      s: 7,
      k: 2,
      g: 20,
      kLost: 5,
      goalDifference: "+15",
      points: 21,
      performance: "WWLWW",
    },
    {
      pos: 2,
      club: "Club B",
      m: 10,
      s: 6,
      k: 3,
      g: 18,
      kLost: 7,
      goalDifference: "+11",
      points: 19,
      performance: "<IoCheckmarkCircleSharp />"
      
    },

  ];

  return (
    <>
      <div
        data-aos="fade-up"
        className="w-full h-full bg-red rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-10 py-10"
      >
        <div className="m-[10px] md:m-[12px] ">
          <div className="w-full h-[48px] bg-red-500 rounded-[4px] items-center text-black flex justify-center">
            <h5 className="text-[16px] font-semibold ">
              Pertandingan Hari Ini
            </h5>
          </div>
          <div className="flex justify-between gap-x-[12px] my-[8px] ">
            <div className="w-full h-[40px] md:h-[48px] rounded-[4px] text-black flex justify-center p-[10px] bg-red-100 ">
              <h5 className="md:text-[16px] text-[14px] font-semibold">Tim A</h5>
            </div>
            <div className="w-full h-[40px] md:h-[48px] rounded-[4px] text-black flex justify-center p-[10px] bg-red-100 ">
              <h5 className="md:text-[16px] text-[14px] font-semibold">Tim B</h5>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="flex gap-x-[12px]">
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  Pos
                </th>
                <th className="w-full max-w-[480px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  Club
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  M
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  W
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  D
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  L
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  G
                </th>
                <th className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  +/-
                </th>
                <th className="w-full max-w-[120px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  Poin
                </th>
                <th className="w-full max-w-[480px] h-[48px] rounded-[4px] flex justify-center items-center text-black border border-black p-[12px]">
                  Performa
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((data, index) => (
                <tr key={index} className="flex gap-x-[12px]">
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.pos}
                  </td>
                  <td className="w-full max-w-[480px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.club}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.m}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.s}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.k}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.g}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.kLost}
                  </td>
                  <td className="w-full max-w-[56px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.goalDifference}
                  </td>
                  <td className="w-full max-w-[120px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                    {data.points}
                  </td>
                  <td className="w-full max-w-[480px] h-[48px] rounded-[4px] flex justify-center items-center text-black p-[12px]">
                  <IoCheckmarkCircleSharp className="color-red"/> <IoIosCloseCircle />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Additional content can be added here */}
      </div>
    </>
  );
}
