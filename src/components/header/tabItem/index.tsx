import React, { useState } from "react";
import classNames from "classnames";
import { Item } from "../../../store/home/header";

export interface TabItemProps {
  title?: string;
  item?: Item;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { title = "23444", item } = props;
  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };
  return (
    <div className=" pr-[20px] relative">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={classNames(" cursor-pointer", hover && " text-[#14a800]")}
      >
        <div className=" cursor-pointer">{title}</div>
      </div>
      {hover && (
        <div
          className=" absolute top-0"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className=" mt-[40px] w-[300px] border rounded-lg shadow-[1px_1px_10px_1px_#d9d9d9] py-[10px]">
            {/* border-b */}
            <div className="  pb-[5px]">
              {/* <div className=" pl-[10px]">title</div> */}
              {item?.list.map((ele, idx) => {
                return (
                  <div
                    key={idx}
                    className=" cursor-pointer hover:bg-[#d9d9d9]  px-[20px] py-[5px]"
                  >
                    {ele.subtitle}
                  </div>
                );
              })}
            </div>
            {/* <div className=" pt-[10px] pb-[5px]">
              <div className=" pl-[10px]">title</div>
              <div className=" cursor-pointer hover:bg-[#d9d9d9]  px-[20px] py-[5px]">
                hover content
              </div>
              <div className=" cursor-pointer hover:bg-[#d9d9d9] px-[20px] py-[5px]">
                hover content
              </div>
              <div className=" cursor-pointer hover:bg-[#d9d9d9]  px-[20px] py-[5px]">
                hover content
              </div>
              <div className=" cursor-pointer hover:bg-[#d9d9d9]  px-[20px] py-[5px]">
                hover content
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabItem;
