import React from "react";
import ReactLogo from "../../../../assets/react.svg";

const Avatar: React.FC = () => {
  return (
    <div className=" bg-slate-100 rounded-lg p-[20px] pb-[40px]">
      <div className=" flex items-center">
        <img className=" w-[50px] h-[50px] mr-[24px]" src={ReactLogo}></img>
        <div className=" flex-1">
          <div>Huanwen Du</div>
          <div>React | Next | Vue | Node</div>
        </div>
      </div>
      <div className=" text-[14px] pt-[16px]"> Complete your profile</div>
      <div className=" text-[14px] mt-[16px]">100%</div>
    </div>
  );
};

export default Avatar;
