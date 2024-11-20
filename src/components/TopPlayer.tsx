import TopPlayerCard from "./TopPlayerCard";

export default function TopPlayer() {
  return (
    <>
      {/* Card */}
      <div className="bg-[#E3F2FF] pt-28 flex justify-center px-[10px] md:px-80 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="text-start text-black ">
                <p className="text-[18px] font-bold text-black">Top Player</p>
                <TopPlayerCard />
            </div>
            <div className="text-start text-black" >
                <p className="text-[18px] font-bold text-black">MVP</p> 
            <TopPlayerCard />
            <div className="mt-5 text-start text-black">
                <p className="text-[18px] font-bold text-black">Player Of The Match</p>
            <TopPlayerCard />
            </div>
            <div className="mt-5 text-start text-black ">
                <p className="text-[18px] font-bold text-black">Top Assist</p>
            <TopPlayerCard />
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
