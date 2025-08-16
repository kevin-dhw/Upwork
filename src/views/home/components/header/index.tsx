import React from "react";
import TabItem from "./tabItem";

const Header: React.FC = () => {
  return (
    <div className=" w-screen h-[70px] flex items-center px-[30px]">
      <div className=" font-bold text-[20px]">upwork</div>
      <div className=" flex pl-[50px]">
        <TabItem></TabItem>
        <TabItem></TabItem>
        <div>manage finances</div>
        <div>message</div>
      </div>
    </div>
  );
};

export default Header;
