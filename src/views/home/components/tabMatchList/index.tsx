import React from "react";
import Edit from "./Edit";
import PreView from "./preView";

const TabMatchList: React.FC = () => {
  const [state, setState] = React.useState<"edit" | "view">("view");
  return (
    <div className=" ">
      <div
        onClick={() => {
          setState(state === "edit" ? "view" : "edit");
        }}
      >
        profile
      </div>
      {state === "view" ? <PreView /> : <Edit />}
    </div>
  );
};

export default TabMatchList;
