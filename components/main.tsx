import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import MarkCard from "./card";



export type MainType = {
  className?: string;
  data: any;
  setData: any;

};

const Main: NextPage<MainType> = ({ className = "", data, setData }) => {
  return (
    <section
      className={`w-[1391px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[19px] max-w-full text-left text-base text-tmo-black font-questrial ${className}`}
    >
      <div className="self-stretch h-[51px] flex flex-col items-start justify-start gap-3.5 max-w-full">
        <div className="w-[322px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
          <b className="flex-1 relative leading-[30px] text-transparent !bg-clip-text [background:linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_#4b5563] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            About 159 Trademarks found for “nike”
          </b>
        </div>
        <div className="self-stretch h-[9px] relative border-gainsboro-100 border-t-[2px] border-solid box-border" />
      </div>
      <div className="w-[1329px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[63px] max-w-full mq750:gap-[31px] mq450:gap-4">
          <div className="flex-1 flex flex-col items-start justify-start gap-[15.2px] max-w-[calc(100%_-_359px)] mq1050:max-w-full">
            <div className="w-[738px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
              <div className="w-[341px] flex flex-row items-end justify-start py-0 pl-0 pr-7 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[20.5px]">
                  <b className="self-stretch h-[50px] relative leading-[30px] inline-block text-transparent !bg-clip-text [background:linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_linear-gradient(#4b5563,_#4b5563),_#4b5563] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0">{`Also try searching for `}</b>
                  <div className="flex flex-row items-start justify-start py-0 px-[29px]">
                    <div className="relative leading-[20px] font-semibold inline-block min-w-[40px]">
                      Mark
                    </div>
                  </div>
                </div>
                <div className="w-[130px] flex flex-col items-start justify-start gap-[37.8px] ml-[-101px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-3.5">
                    <button className="cursor-pointer border-chocolate-100 border-[1px] border-solid py-1.5 pl-3.5 pr-[13px] bg-seashell flex-1 rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200 hover:border-chocolate-200 hover:border-[1px] hover:border-solid hover:box-border">
                      <b className="relative text-xs leading-[20px] inline-block font-questrial text-chocolate-100 text-center min-w-[29px]">
                        nike*
                      </b>
                    </button>
                    <button className="cursor-pointer border-chocolate-100 border-[1px] border-solid py-1.5 px-[17px] bg-seashell flex-[0.7586] rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200 hover:border-chocolate-200 hover:border-[1px] hover:border-solid hover:box-border">
                      <b className="relative text-xs leading-[20px] inline-block font-questrial text-chocolate-100 text-center min-w-[22px]">
                        *ike
                      </b>
                    </button>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[26px]">
                    <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[52px]">
                      Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[72.5px] px-0 pb-0">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[48px]">
                  Status
                </div>
              </div>
              <div className="w-[133px] flex flex-col items-start justify-start pt-[72.5px] px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Class/Description
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full">
              <div className="h-[0.1px] flex-1 relative max-w-full">
                <div className="absolute top-[0px] left-[0px] border-gainsboro-100 border-t-[1px] border-solid box-border w-full h-full" />
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] border-gainsboro-100 border-t-[1px] border-solid box-border w-full h-full z-[1]" />
                  <div className="absolute top-[0px] left-[0px] border-gainsboro-100 border-t-[1px] border-solid box-border w-full h-full z-[2]" />
                </div>
              </div>
            </div>
            <div className="">
              {data?.map((mark: any, index: number) => (
                <MarkCard data={mark} key={index} />
              ))}
            </div>
            
          </div>
          <div className="w-[296px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-black mq1050:hidden">
            <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq450:gap-[22px]">
              <div className="w-[281px] flex flex-row items-start justify-start py-0 px-[39px] box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-[22px]">
                  <button className="cursor-pointer border-silver border-[1px] border-solid py-[9px] px-[21px] bg-white flex-1 rounded-lg flex flex-row items-start justify-start gap-1">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/filter-alt.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="h-5 relative text-xs font-medium font-questrial text-dimgray-200 text-left flex items-center shrink-0 min-w-[27px]">
                        Filter
                      </div>
                    </div>
                  </button>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-8 h-8 relative"
                      loading="lazy"
                      alt=""
                      src="/group-1000007924.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <img
                      className="w-8 h-8 relative"
                      loading="lazy"
                      alt=""
                      src="/group-1000007926.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="h-[120.8px] w-[253px] hidden" />
                    <div className="flex-1 shadow-[0px_4px_4px_rgba(231,_231,_231,_0.25),_0px_3.9px_10px_rgba(232,_232,_232,_0.25),_0px_4.3px_68px_rgba(198,_198,_198,_0.25)] rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[17.5px] pb-[31.6px] pl-[18px] pr-4 gap-2 z-[1]">
                      <b className="relative capitalize inline-block min-w-[46.7px] z-[2]">
                        Status
                      </b>
                      <div className="self-stretch flex flex-row items-start justify-start gap-1.5 text-sm text-gray-400">
                        <div className="rounded-xl bg-aliceblue-100 border-tmo-blue border-[1px] border-solid flex flex-row items-start justify-start py-2 px-3.5 z-[2] text-tmo-blue">
                          <div className="relative capitalize font-semibold inline-block min-w-[18px]">{`All `}</div>
                        </div>
                        <div className="rounded-xl bg-white border-lightgray-200 border-[1px] border-solid flex flex-row items-start justify-start py-2 px-[11px] gap-1.5 z-[2]">
                          <div className="flex flex-col items-start justify-start pt-[3.4px] px-0 pb-0">
                            <div className="w-[10.2px] h-[10.2px] relative rounded-[50%] bg-forestgreen" />
                          </div>
                          <div className="relative capitalize font-semibold inline-block min-w-[70px]">
                            Registered
                          </div>
                        </div>
                        <div className="w-[93.2px] rounded-xl bg-white border-lightgray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-2 pl-3 pr-2.5 gap-1.5 z-[2]">
                          <div className="flex flex-col items-start justify-start pt-[3.4px] px-0 pb-0">
                            <div className="w-[10.2px] h-[10.2px] relative rounded-[50%] bg-goldenrod" />
                          </div>
                          <div className="relative capitalize font-semibold inline-block min-w-[53px]">
                            Pending
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2">
                        <button className="cursor-pointer border-lightgray-200 border-[1px] border-solid py-2 pl-3 pr-2.5 bg-white rounded-xl flex flex-row items-start justify-start gap-1.5 z-[2]">
                          <div className="flex flex-col items-start justify-start pt-[3.4px] px-0 pb-0">
                            <div className="w-[10.2px] h-[10.2px] relative rounded-[50%] bg-red-1" />
                          </div>
                          <div className="relative text-sm capitalize font-semibold font-questrial text-gray-400 text-left inline-block min-w-[77px]">
                            Abandoned
                          </div>
                        </button>
                        <button className="cursor-pointer border-lightgray-200 border-[1px] border-solid py-2 pl-3 pr-2.5 bg-white w-[84.2px] rounded-xl box-border flex flex-row items-start justify-start gap-1.5 z-[2]">
                          <div className="flex flex-col items-start justify-start pt-[3.4px] px-0 pb-0">
                            <div className="w-[10.2px] h-[10.2px] relative rounded-[50%] bg-tmo-blue" />
                          </div>
                          <div className="relative text-sm capitalize font-semibold font-questrial text-gray-400 text-left inline-block min-w-[44px]">
                            Others
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_4px_4px_rgba(231,_231,_231,_0.25),_0px_3.9px_10px_rgba(232,_232,_232,_0.25),_0px_4.3px_68px_rgba(198,_198,_198,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start p-5 gap-4 text-sm text-darkslategray">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-3">
                        <div className="w-[206px] flex flex-col items-start justify-center gap-1.5">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-2 gap-3">
                            <b className="relative capitalize inline-block text-black min-w-[50px]">
                              Owners
                            </b>
                            <div className="flex-1 relative capitalize font-medium inline-block min-w-[63px]">
                              Law Firms
                            </div>
                            <div className="flex-1 relative capitalize font-medium inline-block min-w-[61px]">
                              Attorneys
                            </div>
                          </div>
                          <div className="w-[49.4px] h-0.5 relative">
                            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-olive-black w-full h-full" />
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-gray-200 border-gray-500 border-[1px] border-solid flex flex-row items-center justify-start py-2.5 px-3.5 text-tmo-black">
                          <div className="flex flex-row items-center justify-start gap-2">
                            <img
                              className="h-[16.7px] w-[16.7px] relative min-h-[17px]"
                              alt=""
                              src="/owners-search-placeholder-icon.svg"
                            />
                            <div className="relative font-medium inline-block min-w-[98px]">
                              Search Owners
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-tmo-black">
                      <div className="h-[42.5px] w-1 relative bg-white" />
                      <div className="h-[132px] flex-1 relative">
                        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-3">
                          <div className="h-[132px] flex flex-col items-start justify-start gap-3">
                            <input
                              className="m-0 w-6 h-6 relative"
                              type="checkbox"
                            />
                            <input
                              className="m-0 w-[25px] h-[25px] relative rounded-md border-olive-black border-[1px] border-solid box-border"
                              type="checkbox"
                            />
                            <input
                              className="m-0 w-[25px] h-[25px] relative rounded-md border-olive-black border-[1px] border-solid box-border"
                              type="checkbox"
                            />
                            <input
                              className="m-0 w-[25px] h-[25px] relative rounded-md border-olive-black border-[1px] border-solid box-border"
                              type="checkbox"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                            <div className="flex flex-col items-start justify-start gap-[19px]">
                              <div className="relative font-semibold text-tmo-blue inline-block min-w-[63px]">
                                Tesla, Inc.
                              </div>
                              <div className="relative font-medium inline-block min-w-[128px] whitespace-nowrap">{`LEGALFORCE RAPC. `}</div>
                              <div className="relative font-medium inline-block min-w-[76px]">
                                SpaceX Inc.
                              </div>
                              <div className="relative font-medium inline-block min-w-[76px]">
                                SpaceX Inc.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[244px] rounded-3xs bg-gainsboro-300 w-2 h-[46.8px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_4px_4px_rgba(231,_231,_231,_0.25),_0px_3.9px_10px_rgba(232,_232,_232,_0.25),_0px_4.3px_68px_rgba(198,_198,_198,_0.25)] rounded-3xs bg-white flex flex-col items-start justify-start pt-5 pb-[22px] pl-5 pr-[21px] gap-3">
                  <b className="relative capitalize inline-block min-w-[56px]">
                    Display
                  </b>
                  <div className="self-stretch rounded-2xs bg-whitesmoke-100 flex flex-row items-center justify-between py-[7px] px-2 gap-[12.42px] text-sm font-dm-sans">
                    <div className="shadow-[0px_3px_2.98px_rgba(212,_212,_212,_0.08),_0px_3px_14.92px_rgba(198,_198,_198,_0.25)] rounded-lg bg-white flex flex-row items-center justify-start py-[9px] pl-8 pr-[25px] whitespace-nowrap">
                      <b className="relative inline-block min-w-[67px]">
                        Grid View
                      </b>
                    </div>
                    <b className="w-[101.6px] relative inline-block text-center shrink-0">
                      List View
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
