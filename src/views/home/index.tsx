import React, { useRef } from "react";
import Search, { SearchRef } from "./components/search";
import Avatar from "./components/avatar";

const Test: React.FC = () => {
  const searchRef = useRef<SearchRef>(null);

  const getVal = (val: string) => {
    console.log(val, "123 out");
  };

  return (
    <div className=" h-screen w-screen">
      <div className=" px-[80px] pt-[20px] flex gap-[30px] ">
        <div className=" flex-1 ">
          <div className=" w-[100%] h-[200px] bg-[#e9e9e9] rounded-xl"></div>
          <div className=" pt-[20px]">
            <Search ref={searchRef} getVal={getVal} />
          </div>
          <div className=" pt-[20px] font-bold text-[20px]">
            Jobs you might like
          </div>
        </div>
        <div className=" w-[300px] ">
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Test;
