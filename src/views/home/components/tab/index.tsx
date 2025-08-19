import React from "react";
import useHeaderStore from "../../../../store/home/header";
import classNames from "classnames";

const Tab: React.FC = () => {
  const { jobTabData, changeJobData } = useHeaderStore();
  const curTabTitle = jobTabData.find((item) => item.selected)?.subTitle;
  return (
    <div>
      <div className=" relative">
        <div className=" z-50 flex gap-[14px] ">
          {jobTabData.map((item, idx) => {
            return (
              <div
                onClick={() => {
                  changeJobData(idx);
                }}
                key={idx}
                className={classNames(
                  " pb-[5px]",
                  item.selected && " border-b-[3px] border-black font-bold"
                )}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className=" z-[-10] border-b-[1px] absolute bottom-[1px] w-[100%]"></div>
      </div>
      <div className=" border-b-[1px] py-[20px] px-[10px] text-gray-400">
        {curTabTitle}
      </div>
    </div>
  );
};

export default Tab;
