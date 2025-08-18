import React, { PropsWithChildren } from "react";
import "./style.css";

export interface FixedCompProps extends PropsWithChildren {
  close?: () => void;
}

const FixedComp: React.FC<FixedCompProps> = (props) => {
  const { children, close } = props;
  return (
    // 阻止冒泡不会触发外面元素的事件
    <div
      onClick={() => {
        close?.();
      }}
      className=" fixed top-0 bottom-0 right-0 left-0 bg-gray-200 bg-opacity-70 flex"
    >
      <div className=" animate-slide-in m-auto ">{children}</div>
    </div>
  );
};

export default FixedComp;
