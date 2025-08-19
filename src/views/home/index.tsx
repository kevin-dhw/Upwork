import React, { useRef } from "react";
import Search, { SearchRef } from "./components/search";
// import classNames from "classnames";
import Avatar from "./components/avatar";
import CloseComp from "../../components/closeComp";
import Availability, { AvailabilityRef } from "./components/availability";
import Boost, { BoostRef } from "./components/boost";
import SomeFunctiolnal from "./components/someFuctional";
import Other from "./components/other";
import Tab from "./components/tab";
import TabMatchList from "./components/tabMatchList";
import FooterContent from "./components/footerContent";

const Test: React.FC = () => {
  const searchRef = useRef<SearchRef>(null);

  const availabilityRef = useRef<AvailabilityRef>(null);
  const boostRef = useRef<BoostRef>(null);

  const getVal = (val: string) => {
    console.log(val, "123 out");
  };

  return (
    <div className=" h-[100%] w-screen">
      <div className=" px-[80px] pt-[20px] flex gap-[30px] ">
        <div className=" flex-1 ">
          <div className=" w-[100%] h-[200px] bg-[#e9e9e9] rounded-xl"></div>
          <div className=" pt-[20px]">
            <Search ref={searchRef} getVal={getVal} />
          </div>
          <div className=" pt-[20px] font-bold text-[20px]">
            Jobs you might like
          </div>
          <div className=" mt-[20px]">
            <Tab></Tab>
          </div>
          <div>
            <TabMatchList></TabMatchList>
          </div>
        </div>
        <div className=" w-[300px] ">
          <Avatar></Avatar>
          <div className=" mt-[20px]">
            <CloseComp title="Promote with ads">
              <div className=" flex flex-col">
                <div className=" py-[14px]">
                  <div className=" flex items-center">
                    <div className=" flex-1">Availability badge</div>
                    <div className=" cursor-pointer w-[26px] h-[26px] hover:bg-gray-300 rounded-full flex">
                      <div
                        className=" m-auto"
                        onClick={() => {
                          availabilityRef.current?.open();
                        }}
                      >
                        🖊️
                      </div>
                    </div>
                  </div>
                  <div className="  pb-[10px] h-[20px] text-gray-400">Off</div>
                </div>
                <div className=" pb-[14px]">
                  <div className=" flex items-center">
                    <div className=" flex-1">Boost your badge</div>
                    <div className=" cursor-pointer w-[26px] h-[26px] hover:bg-gray-300 rounded-full flex">
                      <div
                        className=" m-auto"
                        onClick={() => {
                          boostRef.current?.open();
                        }}
                      >
                        🖊️
                      </div>
                    </div>
                  </div>
                  <div className="  pb-[10px] h-[20px] text-gray-400">Off</div>
                </div>
              </div>
            </CloseComp>
          </div>
          <div className=" mt-[20px]">
            <CloseComp title="Connects: 57">
              <div className=" flex flex-col">
                <div className=" border-[2px] border-[#108a00] mt-[20px] rounded-md flex">
                  <div className=" m-auto py-[6px] text-[16px] text-[#108a00] font-bold">
                    By Connects
                  </div>
                </div>
                <div className=" pt-[16px] flex justify-between text-[16px]">
                  <div className=" text-[#108a00] underline">View details</div>
                  <div>|</div>
                  <div className=" text-[#108a00] underline">Free Connects</div>
                </div>
              </div>
            </CloseComp>
          </div>
          <div>
            <SomeFunctiolnal></SomeFunctiolnal>
          </div>
          <div className=" mt-[20px]">
            <Other></Other>
          </div>
        </div>
      </div>
      {/* footer content */}
      <FooterContent />
      {/* Availability badge content */}
      <Availability ref={availabilityRef}></Availability>
      {/* boost your profile content */}
      <Boost ref={boostRef}></Boost>
    </div>
  );
};

export default Test;
