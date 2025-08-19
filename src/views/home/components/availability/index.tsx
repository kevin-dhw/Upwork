import {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  MouseEvent,
} from "react";
import FixedComp from "../../../../components/fixedComp";
import classNames from "classnames";

export interface AvailabilityProps {}
export interface AvailabilityRef {
  open: () => void;
}

const InnerAvailability: ForwardRefRenderFunction<
  AvailabilityRef,
  AvailabilityProps
> = (_, ref) => {
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
        <FixedComp close={close} show={show}>
          <div
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              console.log("Availability content");
            }}
            className={classNames(" w-[500px] h-[500px] bg-red-200")}
          >
            Availability
          </div>
        </FixedComp>
      </div>
    );
  }
};

const Availability = forwardRef(InnerAvailability);
export default Availability;
