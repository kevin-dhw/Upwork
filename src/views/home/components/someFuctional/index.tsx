import React from "react";
import CloseComp from "./closeComp";

const SomeFuctional: React.FC = () => {
  return (
    <div className=" bg-[#f9f9f9]">
      <div className=" mt-[20px] rounded-md overflow-hidden">
        <div>
          <CloseComp title="Consultations">
            <div>6666</div>
          </CloseComp>
        </div>
        <div>
          <CloseComp title="Preferences">
            <div>7777</div>
          </CloseComp>
        </div>
        <div>
          <CloseComp title="Proposals">
            <div>8888</div>
          </CloseComp>
        </div>
        <div>
          <CloseComp title="Project Catalog" border={false}>
            <div>9999</div>
          </CloseComp>
        </div>
      </div>
    </div>
  );
};

export default SomeFuctional;
