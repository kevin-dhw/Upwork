import React from "react";
import Search from "./components/search";

const Test: React.FC = () => {
  return (
    <div className=" h-screen w-screen">
      <div className=" px-[80px] pt-[20px] flex gap-[30px] ">
        <div className=" flex-1 ">
          <div className=" w-[100%] h-[200px] bg-[#e9e9e9] rounded-xl"></div>
          <div className=" pt-[30px]">
            <Search />
          </div>
        </div>
        <div className=" w-[300px] bg-green-200">right</div>
      </div>
    </div>
  );
};

export default Test;
