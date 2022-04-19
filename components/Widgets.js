import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";

const Widgets = ({trendingResults, followResults}) => {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-[#fff] z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#eff3f4] p-3 rounded-full relative">
          <SearchIcon className="text-[#999]-500 h-5 z-50" />
          <input type="text" placeholder="Search Twitter"
            className="bg-transparent placeholder-[gray]-500 outline-none text-[#333] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-white focus:shadow-lg" />
        </div>
      </div>      

      <div className="text-[#333] space-y-3 bg-[#eff3f4] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h2 className="font-bold text-xl px-4">What's happening</h2>
        {trendingResults.map((result, idx) => (
          <Trending key={idx} result={result} />
        ))}
        <button className="hover:bg-black hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">Show more</button>        
      </div>

      <div className="text-[#333] space-y-3 bg-[#eff3f4] pt-2 rounded-xl w-11/12 xl:w-9/12">
          <h2 className="font-bold text-xl px-4">Who to follow</h2>
          {followResults.map((result, idx) => (
            <div key={idx} className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center">
              <Image src={result.userImg} width={50} height={50} objectFit="cover" className="rounded-full" />

              <div className="ml-4 leading-5 group">
                <div><span className="font-bold group-hover:underline">{result.username}</span></div>            
                <div><span className="text-[#536471] font-medium text-[15px]">{result.tag}</span></div>                
              </div>

              <button className="ml-auto bg-[#0f1419] text-white rounded-full font-bold text-sm py-1.5 px-3.5">Follow</button>
            </div>
          ))}
          <button className="hover:bg-black hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
            Show more</button>
      </div>
    </div>
  )
}

export default Widgets