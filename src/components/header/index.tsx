import React from "react";
import TabItem from "./tabItem";
import useHeaderStore from "../../store/home/header";

const Header: React.FC = () => {
  const { tabData } = useHeaderStore();
  return (
    <div className=" w-screen h-[70px] flex items-center px-[30px]">
      <div className=" font-bold text-[20px]">upwork</div>
      <div className=" flex pl-[50px]">
        {tabData.map((item, index) => {
          return <TabItem key={index} item={item}></TabItem>;
        })}
      </div>
    </div>
  );
};

export default Header;
