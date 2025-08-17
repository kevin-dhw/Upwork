import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";

export interface SearchProps {
  getVal: (val: string) => void;
}

export interface SearchRef {
  getSearchVal: () => string;
}

const InnerSearch: ForwardRefRenderFunction<SearchRef, SearchProps> = (
  props,
  ref
) => {
  const { getVal } = props;
  const [searchVal, setSearchVal] = useState("");
  const [blurShow, setBlurShow] = useState(false);
  const [searchList] = useState([
    {
      title: "123",
    },
    {
      title: "456",
    },
    {
      title: "789",
    },
  ]);

  const handleFocus = () => {
    setBlurShow(true);
  };
  const getSearchVal = () => {
    return searchVal;
  };

  useImperativeHandle(ref, () => {
    return { getSearchVal };
  });

  return (
    <div className=" relative">
      <div className=" flex items-center rounded-md border hover:border-black ">
        <div className=" pr-[10px] pl-[20px]">+</div>
        <input
          onBlur={() => {
            setTimeout(() => {
              setBlurShow(false);
            }, 200);
          }}
          onFocus={handleFocus}
          aria-label="Search"
          placeholder="search for jobs"
          value={searchVal}
          className=" flex-1 h-[36px] outline-none rounded"
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
      {blurShow && (
        <div className=" border rounded-md mt-[3px] py-[5px] absolute top-[40px] w-[100%] bg-white">
          {searchList.map((item, idx) => {
            return (
              <div
                onClick={() => {
                  getVal(item.title);
                  setSearchVal(item.title);
                }}
                key={idx}
                className=" pl-[20px] py-[5px] hover:bg-gray-200 cursor-pointer"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const Search = forwardRef(InnerSearch);
export default Search;
