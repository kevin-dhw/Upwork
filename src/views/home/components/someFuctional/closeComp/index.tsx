import React, { useState, PropsWithChildren, useRef, useEffect } from "react";
import classNames from "classnames";

export interface CloseCompProps extends PropsWithChildren {
  title?: string;
  border?: boolean;
}

const CloseComp: React.FC<CloseCompProps> = (props) => {
  const { children, title = " fake title", border = true } = props;
  const childrenRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (childrenRef.current) {
      setHeight(childrenRef.current.clientHeight);
    }
  }, []);

  return (
    <div className=" px-[20px]">
      <div
        className={classNames(
          " py-[20px] bg-[#f9f9f9] ",
          border ? " border-b" : ""
        )}
      >
        <div className=" flex">
          <div className=" flex-1 font-bold text-[18px]">{title}</div>
          <div
            className=" cursor-pointer"
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            {showContent ? "下" : "上"}
          </div>
        </div>
        <div
          style={{
            height: showContent ? `${height}px` : "0px",
          }}
          className={classNames(
            " transition-all ease-in-out duration-700 delay-100 overflow-hidden",
            ""
          )}
        >
          <div ref={childrenRef} className=" pt-[10px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseComp;
