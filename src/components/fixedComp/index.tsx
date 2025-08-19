import React, { PropsWithChildren } from "react";
import "./style.css";
import classNames from "classnames";

export interface FixedCompProps extends PropsWithChildren {
  close?: () => void;
  show?: boolean;
}

const FixedComp: React.FC<FixedCompProps> = (props) => {
  const { children, close, show } = props;
  return (
    // 阻止冒泡不会触发外面元素的事件
    <div
      onClick={() => {
        setTimeout(() => {
          close?.();
        }, 500);
      }}
      className=" fixed top-0 bottom-0 right-0 left-0 bg-gray-200 bg-opacity-70 flex"
    >
      <div
        className={classNames(
          " m-auto ",
          show ? " animate-slide-in" : " animate-slide-out"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedComp;
