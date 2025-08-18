import {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  MouseEvent,
} from "react";
import FixedComp from "../../../../components/fixedComp";

export interface BoostProps {}
export interface BoostRef {
  open: () => void;
}

const InnerBoost: ForwardRefRenderFunction<BoostRef, BoostProps> = (_, ref) => {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };
  const close = () => {
    console.log("close fiexdComp");
    setShow(false);
  };

  useImperativeHandle(ref, () => {
    return { open };
  });
  if (show) {
    return (
      <div>
        <FixedComp close={close}>
          <div
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              console.log("Boost content");
            }}
            className=" w-[100px] h-[100px] bg-red-200"
          >
            Boost
          </div>
        </FixedComp>
      </div>
    );
  }
};

const Boost = forwardRef(InnerBoost);
export default Boost;
