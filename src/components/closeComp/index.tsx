import React, { useState, PropsWithChildren, useRef, useEffect } from "react";
import classNames from "classnames";
import BottomArrow from "../../assets/bottomArrow.jpg";
import TopArrow from "../../assets/topArrow.jpeg";

export interface CloseCompProps extends PropsWithChildren {
  title?: string;
}

const CloseComp: React.FC<CloseCompProps> = (props) => {
  const { children, title = " fake title" } = props;
  const childrenRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (childrenRef.current) {
      setHeight(childrenRef.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <div className=" p-[20px] bg-[#f9f9f9] rounded-md">
        <div className=" flex items-center">
          <div className=" flex-1 font-bold text-[18px]">{title}</div>
          <div
            className=" cursor-pointer"
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            {showContent ? (
              <img
                style={{ marginTop: "2px" }}
                width={20}
                height={14}
                src={BottomArrow}
              ></img>
            ) : (
              <img
                style={{ marginTop: "2px" }}
                width={20}
                height={14}
                src={TopArrow}
              ></img>
            )}
          </div>
        </div>
        <div
          style={{
            height: showContent ? `${height}px` : "0px",
          }}
          className={classNames(
            " transition-all ease-in-out duration-700 delay-100 overflow-hidden"
          )}
        >
          <div ref={childrenRef}> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default CloseComp;
