import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[17.6px] text-left text-sm text-gray-300 font-questrial ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0">
        <div className="flex-1 relative leading-[21px] font-medium">
          Computer services, Social Media, Networking, Virtual Communities,
          Community
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[11.2px] text-xs text-olive-black">
        <div className="w-[74.2px] flex flex-row items-end justify-start">
          <div className="flex-1 flex flex-row items-center justify-start">
            <img
              className="h-[23.8px] w-[21.2px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1000007778.svg"
            />
          </div>
          <div
            className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px] ml-[-45px]"
            style={frameDivStyle}
          >
            <b className="relative inline-block min-w-[47px] z-[1]">Class 45</b>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[7.9px]">
          <div className="flex flex-row items-start justify-start gap-[13.2px]">
            <div className="flex flex-row items-end justify-start gap-1">
              <img
                className="h-[23.8px] w-[21.2px] relative shrink-0"
                alt=""
                src="/group-1000007778.svg"
              />
              <div
                className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px]"
                style={frameDiv1Style}
              >
                <b className="relative inline-block min-w-[40px] shrink-0">
                  Class 8
                </b>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-1">
              <img
                className="h-[23.8px] w-[21.2px] relative"
                alt=""
                src="/group-1000007778.svg"
              />
              <div
                className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px]"
                style={frameDiv2Style}
              >
                <b className="relative inline-block min-w-[40px]">Class 8</b>
              </div>
            </div>
          </div>
          <div className="h-[20.3px] w-[20.3px] relative text-black">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
            <b className="absolute top-[0px] left-[5.1px] inline-block min-w-[10px] z-[1]">
              ...
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
