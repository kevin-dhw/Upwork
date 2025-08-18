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
        <FixedComp close={close}>
          <div
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              console.log("Availability content");
            }}
            className={classNames(
              " w-[100px] h-[100px] bg-red-200",
              " transition-all ease-in-out duration-500 delay-100 hover:scale-110"
            )}
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
