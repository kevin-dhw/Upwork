import React, { useState, useEffect } from "react";
import TabItem from "./tabItem";
import classNames from "classnames";
import useHeaderStore from "../../store/home/header";

const Header: React.FC = () => {
  const { tabData, searchData, changeSearchData } = useHeaderStore();
  const [showType, setShowType] = useState(false);
  const [curState, setCurState] = useState(0);
  const [searchVal, setSearchVal] = useState("");

  const getCurState = () => {
    const idx = searchData.findIndex((item) => item.selected);
    setCurState(idx);
  };
  useEffect(() => {
    getCurState();
  }, []);

  const handleMouseEnter = (idx: number) => {
    setCurState(idx);
  };
  const handleMouseLeave = () => {
    getCurState();
  };

  return (
    <div className=" w-screen h-[70px] flex items-center px-[30px]">
      <div className=" font-bold text-[20px]">upwork</div>
      <div className=" flex-1 flex pl-[50px]">
        {tabData.map((item, index) => {
          return <TabItem key={index} title={index} item={item}></TabItem>;
        })}
      </div>
      <div className=" ">
        <div className=" flex items-center border rounded-md">
          <div className=" flex items-center rounded-md hover:border hover:border-black">
            <div className=" pr-[10px] pl-[20px]">+</div>
            <input
              aria-label="Search"
              placeholder="search"
              value={searchVal}
              className=" h-[36px] outline-none rounded"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchVal(e.target.value)
              }
            ></input>
            <div className=" text-[20px] pr-[20px] pl-[10px]">
              {searchVal.length != 0 && (
                <div
                  onClick={() => {
                    setSearchVal("");
                  }}
                >
                  -
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              setShowType(!showType);
            }}
            className=" relative border-l px-[20px] py-[5px] hover:rounded-md hover:border-black hover:border"
          >
            <div>{searchData.find((item) => item.selected)?.title}</div>
            {showType && (
              <div className=" absolute top-[40px] left-0 ">
                <div className=" py-[10px] border w-[220px] rounded-md ">
                  {searchData.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => changeSearchData(idx)}
                        className={classNames(
                          " px-[20px] py-[5px]",
                          curState === idx && "bg-gray-100"
                        )}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        <div className=" font-bold">{item.title}</div>
                        <div className=" text-gray-400 text-[14px]">
                          {item.subTitle}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" mx-[20px]">notification</div>
      <div>avatar</div>
    </div>
  );
};

export default Header;
