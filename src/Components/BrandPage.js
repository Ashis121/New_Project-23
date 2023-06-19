import React from "react";
import "./BrandPage.css";

export default function BrandPage() {
  return (
    <div className="relative bg-white w-full h-[5015px] overflow-hidden text-left text-xl text-skyblue font-body-medium">
      <img
        className="bg-red-700 absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="https://media.istockphoto.com/id/1405200010/photo/hand-holding-and-glowing-light-bulb.jpg?s=2048x2048&w=is&k=20&c=eng-LROM3WIJO7ijKcw29tOYUtrYyU5wvWrRPBDrLYw="
      />
      <div className="absolute top-[827.38px] left-[1173.29px] w-56 h-10 text-[34px] text-white">
        <div className="absolute top-[0px] left-[0px] font-medium">
          Travel Website
        </div>
      </div>
      <div className="absolute top-[7px] left-[0px] bg-white overflow-hidden flex flex-col items-center justify-start gap-[32px] text-9xl text-light-grey">
        <div className="flex flex-col items-start justify-start text-sm">
          <div className="flex flex-col items-start justify-start">
            <div className="bg-true-blue w-[1512px] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-hover-blue">
                  <div className="flex flex-row p-6 items-start justify-start gap-[10px]">
                    <img
                      className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src=""
                    />
                    <img
                      className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                      alt=""
                      src=""
                    />
                  </div>
                </div>
                <div className="flex flex-row py-4 px-5 items-start justify-start">
                  <div className="relative w-[46px] h-[46px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] w-[47.64px] h-[46px] object-cover"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[78px] hidden flex-col py-4 px-6 box-border items-start justify-start">
                <div className="flex-1 rounded bg-hover-blue box-border w-[420px] flex flex-row py-2 px-5 items-center justify-between border-[1px] border-solid border-primary-blue">
                  <div className="relative tracking-[0.5px] leading-[24px] flex items-center w-[325px] shrink-0">
                    Enter keyword to search...
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/search.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="hidden flex-row p-6 items-start justify-start">
                  <img
                    className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                    alt=""
                    src="/notifications.svg"
                  />
                  <div className="relative rounded-lg bg-salmon-100 w-3 h-3 ml-[-12px]" />
                </div>
                <div className="flex flex-row p-6 items-start justify-start">
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-[1512px] h-80 flex flex-row py-8 px-12 box-border items-center justify-between bg-cover bg-no-repeat bg-[top]">
            <img
              className="relative w-[1486px] h-[495px] object-cover hidden bg-slate-700"
              alt=""
              src=""
            />
          </div> */}
          <div className="w-[1512px] h-80 flex flex-row py-8 px-12 box-border items-center justify-between bg-cover bg-no-repeat bg-[top]">
            <img className="relative w-[1486px] h-[495px] object-cover" src="https://media.istockphoto.com/id/1434700000/photo/handshake-in-logistics-shipping-partnership-and-industrial-networking-deal-agreement-and-team.jpg?s=2048x2048&w=is&k=20&c=7R7P02itLunemqxCRQgzGoaP8NvUCi-wT7dQrxU_1Ys=" />
          </div>
        </div>
        <div className="w-[1280px] flex flex-col items-start justify-start gap-[60px] text-text-dark">
          <div className="rounded-81xl bg-white box-border w-[1280px] flex flex-row py-6 px-12 items-start justify-start gap-[40px] text-xl text-text-light border-[1px] border-solid border-true-blue">
            <div className="flex flex-row py-0 pr-9 pl-0 items-start justify-start gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row p-3 items-start justify-start border-[1px] border-solid border-light-grey">
                <img className="relative w-5 h-5" alt="" src="" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <div className="relative leading-[100%] font-medium">
                  60,000
                </div>
                <div className="relative text-sm tracking-[0.25px] leading-[20px] text-state-grey">
                  Reviews
                </div>
              </div>
            </div>
            <div className="flex flex-row py-0 pr-9 pl-0 items-start justify-start gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row p-3 items-start justify-start border-[1px] border-solid border-light-grey">
                <img className="relative w-5 h-5" alt="" src="/vector.svg" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="relative leading-[100%] font-medium">4.0</div>
                  <div className="flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star-half.svg"
                    />
                  </div>
                </div>
                <div className="relative text-sm tracking-[0.25px] leading-[20px] text-state-grey">
                  Average ratings
                </div>
              </div>
            </div>
            <div className="flex flex-row py-0 pr-9 pl-0 items-start justify-start gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row p-3 items-start justify-start border-[1px] border-solid border-light-grey">
                <img className="relative w-5 h-5" alt="" src="/vector.svg" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <div className="relative leading-[100%] font-medium">43.3</div>
                <div className="relative text-sm tracking-[0.25px] leading-[20px] text-state-grey">
                  Overall Brand NPS
                </div>
              </div>
            </div>
            <div className="flex flex-row py-0 pr-9 pl-0 items-start justify-start gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row p-3 items-start justify-start border-[1px] border-solid border-light-grey">
                <img className="relative w-5 h-5" alt="" src="/vector.svg" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <div className="relative leading-[100%] font-medium">12</div>
                <div className="relative text-sm tracking-[0.25px] leading-[20px] text-state-grey">
                  Available Markets
                </div>
              </div>
            </div>
            <div className="flex flex-row py-0 pr-9 pl-0 items-start justify-start gap-[12px]">
              <div className="rounded-81xl overflow-hidden flex flex-row p-3 items-start justify-start border-[1px] border-solid border-light-grey">
                <img className="relative w-5 h-5" alt="" src="/vector.svg" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[4px]">
                <div className="relative leading-[100%] font-medium">45</div>
                <div className="relative text-sm tracking-[0.25px] leading-[20px] text-state-grey">
                  Total Products
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[1280px] flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">
                  What customer says
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-state-grey">
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Reviews / Ratings / NPS Score
                  </div>
                  <div className="overflow-hidden hidden flex-row items-center justify-start gap-[4px] text-mediumseagreen">
                    <div className="relative tracking-[0.25px] leading-[20px]">
                      12%
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end gap-[20px] text-center text-sm text-text-light">
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      Last 7 days
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start border-l-[1px] border-solid border-border-grey1">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfile-download.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-sm text-text-light">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-center gap-[16px]">
                  <div className="w-[956px] flex flex-row items-start justify-start">
                    <div className="relative w-[324px] h-6">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-star-green w-[324px] h-6" />
                      <div className="absolute top-[2px] left-[6.45px] tracking-[0.25px] leading-[20px] flex items-center w-[38.79px]">
                        38%
                      </div>
                    </div>
                    <div className="relative w-[215px] h-6">
                      <div className="absolute top-[0px] left-[0px] bg-star-green1 w-[215px] h-6" />
                      <div className="absolute top-[2px] left-[9.42px] tracking-[0.25px] leading-[20px]">
                        24%
                      </div>
                    </div>
                    <div className="relative w-[148px] h-6">
                      <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[148px] h-6" />
                      <div className="absolute top-[2px] left-[12px] tracking-[0.25px] leading-[20px]">
                        12%
                      </div>
                    </div>
                    <div className="relative w-[83px] h-6">
                      <div className="absolute top-[0px] left-[0px] bg-star-red w-[83px] h-6" />
                      <div className="absolute top-[2px] left-[12px] tracking-[0.25px] leading-[20px]">
                        08%
                      </div>
                    </div>
                    <div className="flex-1 relative h-6">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-star-red w-[186px] h-6" />
                      <div className="absolute top-[2px] left-[13.62px] tracking-[0.25px] leading-[20px] flex items-center w-[30.62px]">
                        18%
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[36px] text-xs">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        5 star - 1738
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green1 w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        4 star - 259
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        3 star - 112
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        2 star - 98
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        1 star - 186
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-base">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="rounded box-border w-[308px] flex flex-col p-5 items-start justify-start gap-[16px] border-[1px] border-solid border-light-grey">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[131px] h-5">
                          <div className="absolute top-[2px] left-[0px] leading-[100%] font-medium">
                            4.0
                          </div>
                          <div className="absolute top-[0px] left-[31px] flex flex-row items-start justify-start">
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star1.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star1.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star1.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star1.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star-border.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-xs tracking-[0.5px] leading-[16px] font-medium">
                          2 days ago
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.1px] leading-[24px] font-medium inline-block w-[274px]">
                          Best on the market
                        </div>
                        <div className="relative text-sm tracking-[0.25px] leading-[20px] inline-block w-[274px]">
                          Amazing product. I highly recommend this to people you
                          are daibetics
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-light-grey" />
                      <div className="self-stretch flex flex-row items-center justify-between text-sm text-text-dark">
                        <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                          Ramankartik
                        </div>
                        <div className="relative w-8 h-8 overflow-hidden shrink-0">
                          <div className="absolute top-[calc(50%_-_16px)] left-[0px] rounded-81xl bg-white box-border w-8 h-8 overflow-hidden border-[1px] border-solid border-light-grey">
                            <img
                              className="absolute top-[8px] left-[6px] w-5 h-[15.83px] object-cover"
                              alt=""
                              src="/image-2@2x.png"
                            />
                          </div>
                          <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border w-[308px] flex flex-col p-5 items-start justify-start gap-[16px] border-[1px] border-solid border-light-grey">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[131px] h-5">
                          <div className="absolute top-[2px] left-[0px] leading-[100%] font-medium">
                            4.5
                          </div>
                          <div className="absolute top-[0px] left-[31px] flex flex-row items-start justify-start">
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star-half.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-xs tracking-[0.5px] leading-[16px] font-medium">
                          3 days ago
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.1px] leading-[24px] font-medium inline-block w-[274px]">
                          Excelent product, very beneficial
                        </div>
                        <div className="relative text-sm tracking-[0.25px] leading-[20px] inline-block w-[274px]">
                          I never believed initially, seeing the rating I
                          thought to try with 1 bottle
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-light-grey" />
                      <div className="self-stretch flex flex-row items-center justify-between text-sm text-text-dark">
                        <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                          Ramankartik
                        </div>
                        <div className="relative w-8 h-8 overflow-hidden shrink-0">
                          <div className="absolute top-[calc(50%_-_16px)] left-[0px] rounded-81xl bg-white box-border w-8 h-8 overflow-hidden border-[1px] border-solid border-light-grey">
                            <img
                              className="absolute top-[8px] left-[6px] w-5 h-[15.83px] object-cover"
                              alt=""
                              src="/image-2@2x.png"
                            />
                          </div>
                          <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded box-border w-[308px] flex flex-col p-5 items-start justify-start gap-[16px] border-[1px] border-solid border-light-grey">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[131px] h-5">
                          <div className="absolute top-[2px] left-[0px] leading-[100%] font-medium">
                            2.0
                          </div>
                          <div className="absolute top-[0px] left-[31px] flex flex-row items-start justify-start">
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star2.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star2.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star-border.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star-border.svg"
                            />
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/star-border.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-xs tracking-[0.5px] leading-[16px] font-medium">
                          5 days ago
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.1px] leading-[24px] font-medium inline-block w-[274px]">
                          Good but poor packaging
                        </div>
                        <div className="relative text-sm tracking-[0.25px] leading-[20px] inline-block w-[274px]">
                          Earlier boxes used to arrive in plastic coated box
                          packaging
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-light-grey" />
                      <div className="self-stretch flex flex-row items-center justify-between text-sm text-text-dark">
                        <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                          Ramankartik
                        </div>
                        <div className="relative w-8 h-8 overflow-hidden shrink-0">
                          <div className="absolute top-[calc(50%_-_16px)] left-[0px] rounded-81xl bg-white box-border w-8 h-8 overflow-hidden border-[1px] border-solid border-light-grey">
                            <img
                              className="absolute top-[8px] left-[6px] w-5 h-[15.83px] object-cover"
                              alt=""
                              src="/image-2@2x.png"
                            />
                          </div>
                          <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[956px] flex flex-row items-start justify-center gap-[4px]">
                    <div className="relative rounded-[50%] bg-primary-blue w-3 h-3" />
                    <div className="relative rounded-[50%] bg-white box-border w-3 h-3 border-[1px] border-solid border-cool-grey" />
                    <div className="relative rounded-[50%] bg-white box-border w-3 h-3 border-[1px] border-solid border-cool-grey" />
                    <div className="relative rounded-[50%] bg-white box-border w-3 h-3 border-[1px] border-solid border-cool-grey" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded bg-whitesmoke-200 w-[300px] flex flex-col p-5 box-border items-center justify-start gap-[28px] text-xs text-star-green">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col py-2 px-0 items-center justify-start gap-[4px] border-r-[1px] border-solid border-border-grey1">
                    <div className="rounded-6xl flex flex-row py-2 px-3 items-center justify-start text-xl">
                      <div className="relative leading-[100%] font-medium">
                        108
                      </div>
                    </div>
                    <div className="relative tracking-[0.05em] leading-[14px] uppercase font-medium text-state-grey">
                      Positive
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-text-light">
                      <div className="relative leading-[16px] font-medium">
                        +18.34%
                      </div>
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/arrow-upward.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col py-2 px-0 items-center justify-start gap-[4px] text-star-red">
                    <div className="rounded-6xl flex flex-row py-2 px-3 items-center justify-start text-xl">
                      <div className="relative leading-[100%] font-medium">
                        46
                      </div>
                    </div>
                    <div className="relative tracking-[0.05em] leading-[14px] uppercase font-medium text-state-grey">
                      Negative
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-text-light">
                      <div className="relative leading-[16px] font-medium">
                        -12.25%
                      </div>
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/arrow-upward1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-[153px] h-40 text-xl text-text-dark">
                  <div className="absolute top-[0px] left-[16.5px] w-[120px] h-[120px]">
                    <img
                      className="absolute top-[-6px] left-[-6px] w-[132px] h-[132px]"
                      alt=""
                      src="/ellipse-8.svg"
                    />
                    <img
                      className="absolute top-[11.98px] left-[97.05px] w-[28.95px] h-[48.02px]"
                      alt=""
                      src="/ellipse-7.svg"
                    />
                    <img
                      className="absolute top-[-6px] left-[-6px] w-[111.28px] h-[132px]"
                      alt=""
                      src="/ellipse-6.svg"
                    />
                    <div className="absolute top-[38px] left-[26px] flex flex-col items-center justify-start gap-[4px]">
                      <div className="rounded-6xl flex flex-row py-2 px-3 items-center justify-start">
                        <div className="relative leading-[100%] font-medium">
                          108
                        </div>
                      </div>
                      <div className="relative text-xs tracking-[0.05em] leading-[14px] uppercase font-medium text-state-grey">
                        NPS Score
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[144px] left-[0px] flex flex-row items-start justify-start gap-[24px] text-xs text-state-grey">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        56
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        32
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red w-3 h-3" />
                      <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1280px] flex flex-row items-start justify-start gap-[8px] text-base text-text-light">
            <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-center justify-start">
              <div className="flex flex-col py-4 px-0 items-center justify-start gap-[12px] text-center text-5xl border-b-[1px] border-solid border-light-grey">
                <img
                  className="relative w-12 h-12 overflow-hidden shrink-0"
                  alt=""
                  src="/workspace-premium.svg"
                />
                <div className="relative leading-[32px] inline-block w-[258px]">
                  <p className="m-0">Top 5</p>
                  <p className="m-0">Revenue Drivers in Market</p>
                </div>
              </div>
              <div className="self-stretch h-16 flex flex-row py-4 px-3 box-border items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Top Selling Market
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey h-[60px] flex flex-row p-3 box-border items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Overall Ratings
                </div>
              </div>
              <div className="self-stretch bg-white h-[60px] flex flex-row p-3 box-border items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Overall Reviews
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey h-[60px] flex flex-row p-3 box-border items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Overall NPS Score
                </div>
              </div>
              <div className="self-stretch bg-white h-[60px] flex flex-row p-3 box-border items-center justify-center">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Emotions
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-dark-secondary">
              <div className="flex-1 rounded-lg bg-white flex flex-col py-1 px-px items-start justify-center border-[1px] border-solid border-light-grey">
                <div className="self-stretch flex flex-row py-3 px-1 items-center justify-center border-b-[1px] border-solid border-light-grey">
                  <img
                    className="relative w-40 h-40 object-cover"
                    alt=""
                    src="/image-6@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[12px] text-sm text-text-dark">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                      <img
                        className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                        alt=""
                        src="/image-21@2x.png"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                  </div>
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Amazon.in
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative font-medium">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star3.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star3.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star3.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star3.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      331
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      98
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-6xl h-[60px] flex flex-col p-3 box-border items-start justify-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="rounded-6xl bg-darkkhaki flex flex-row py-1.5 px-3 items-center justify-start gap-[4px] border-[1px] border-solid border-star-green">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/sentiment-satisfied.svg"
                      />
                      <div className="relative">23</div>
                    </div>
                    <div className="rounded-6xl bg-salmon-200 flex flex-col py-1.5 px-3 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/sentiment-dissatisfied.svg"
                        />
                        <div className="relative">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-col py-1 px-px items-start justify-center border-[1px] border-solid border-light-grey">
                <div className="self-stretch flex flex-row py-3 px-1 items-center justify-center border-b-[1px] border-solid border-light-grey">
                  <img
                    className="relative w-40 h-40 object-cover"
                    alt=""
                    src="/image-61@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[12px] text-sm text-text-dark">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                      <img
                        className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                        alt=""
                        src="/image-22@2x.png"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                  </div>
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Amazon.us
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative font-medium">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star4.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star4.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star4.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star4.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      331
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      98
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-6xl h-[60px] flex flex-col p-3 box-border items-start justify-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="rounded-6xl bg-darkkhaki flex flex-row py-1.5 px-3 items-center justify-start gap-[4px] border-[1px] border-solid border-star-green">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/sentiment-satisfied1.svg"
                      />
                      <div className="relative">23</div>
                    </div>
                    <div className="rounded-6xl bg-salmon-200 flex flex-col py-1.5 px-3 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/sentiment-dissatisfied1.svg"
                        />
                        <div className="relative">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-col py-1 px-px items-start justify-center border-[1px] border-solid border-light-grey">
                <div className="self-stretch flex flex-row py-3 px-1 items-center justify-center border-b-[1px] border-solid border-light-grey">
                  <img
                    className="relative w-40 h-40 object-cover"
                    alt=""
                    src="/image-62@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[12px] text-sm text-text-dark">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                      <img
                        className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                        alt=""
                        src="/image-23@2x.png"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                  </div>
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Amazon.in
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative font-medium">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star5.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star5.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star5.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star5.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      331
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      98
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-6xl h-[60px] flex flex-col p-3 box-border items-start justify-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="rounded-6xl bg-darkkhaki flex flex-row py-1.5 px-3 items-center justify-start gap-[4px] border-[1px] border-solid border-star-green">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/sentiment-satisfied2.svg"
                      />
                      <div className="relative">23</div>
                    </div>
                    <div className="rounded-6xl bg-salmon-200 flex flex-col py-1.5 px-3 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/sentiment-dissatisfied2.svg"
                        />
                        <div className="relative">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-col py-1 px-px items-start justify-center border-[1px] border-solid border-light-grey">
                <div className="self-stretch flex flex-row py-3 px-1 items-center justify-center border-b-[1px] border-solid border-light-grey">
                  <img
                    className="relative w-40 h-40 object-cover"
                    alt=""
                    src="/image-63@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[12px] text-sm text-text-dark">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                      <img
                        className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                        alt=""
                        src="/image-24@2x.png"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                  </div>
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Amazon.in
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative font-medium">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star6.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star6.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star6.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star6.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      331
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      98
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-6xl h-[60px] flex flex-col p-3 box-border items-start justify-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="rounded-6xl bg-darkkhaki flex flex-row py-1.5 px-3 items-center justify-start gap-[4px] border-[1px] border-solid border-star-green">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/sentiment-satisfied3.svg"
                      />
                      <div className="relative">23</div>
                    </div>
                    <div className="rounded-6xl bg-salmon-200 flex flex-col py-1.5 px-3 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/sentiment-dissatisfied3.svg"
                        />
                        <div className="relative">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-col py-1 px-px items-start justify-center border-[1px] border-solid border-light-grey">
                <div className="self-stretch flex flex-row py-3 px-1 items-center justify-center border-b-[1px] border-solid border-light-grey">
                  <img
                    className="relative w-40 h-40 object-cover"
                    alt=""
                    src="/image-64@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[12px] text-sm text-text-dark">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                      <img
                        className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                        alt=""
                        src="/image-25@2x.png"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                  </div>
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Amazon.in
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="relative font-medium">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star7.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star7.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star7.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star7.svg"
                      />
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      331
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector6.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-lighter-grey h-[60px] flex flex-col py-4 px-6 box-border items-start justify-center text-text-light">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                      98
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector6.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-6xl h-[60px] flex flex-col p-3 box-border items-start justify-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="rounded-6xl bg-darkkhaki flex flex-row py-1.5 px-3 items-center justify-start gap-[4px] border-[1px] border-solid border-star-green">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/sentiment-satisfied4.svg"
                      />
                      <div className="relative">23</div>
                    </div>
                    <div className="rounded-6xl bg-salmon-200 flex flex-col py-1.5 px-3 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/sentiment-dissatisfied4.svg"
                        />
                        <div className="relative">12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">
                  NPS Score/Ratings/Reviews
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-state-grey">
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    NPS | # of ratings: Parent + Variants + Marketplaces
                  </div>
                  <div className="overflow-hidden hidden flex-row items-center justify-start gap-[4px] text-mediumseagreen">
                    <div className="relative tracking-[0.25px] leading-[20px]">
                      12%
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end gap-[20px] text-center text-sm text-white">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-primary-blue overflow-hidden flex flex-row py-3 px-5 items-center justify-center">
                      <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                        Ratings
                      </div>
                    </div>
                    <div className="rounded-tl-none rounded-tr-81xl rounded-br-81xl rounded-bl-none overflow-hidden flex flex-row py-3 px-5 items-center justify-center ml-[-1px] text-text-light border-t-[1px] border-solid border-primary-blue border-r-[1px] border-b-[1px]">
                      <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                        Reviews
                      </div>
                    </div>
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] text-text-light border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      Monthly
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start gap-[8px] border-l-[1px] border-solid border-border-grey1">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/filter-alt.svg"
                    />
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfile-download.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border h-[776px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-base text-text-light border-[1px] border-solid border-light-grey">
              <div className="self-stretch bg-lighter-grey flex flex-row pt-3 px-5 pb-4 items-center justify-start gap-[12px] text-sm text-state-grey border-b-[1px] border-solid border-border-grey">
                <div className="flex-1 relative tracking-[0.25px] leading-[20px]">
                  Product Name
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Dec 2022
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Jan 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Feb 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Mar 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Apr 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  May 2023
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  BP care juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Amazon.in
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  13 | 876
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  11 | 889
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35 | 789
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  13 | 876
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  11 | 889
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35 | 789
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-6 h-6 object-cover"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Careem.com
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20 | 987
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  08 | 687
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20 | 987
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20 | 987
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  08 | 687
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20 | 987
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Amazon.uk
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  10 | 678
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  14 | 984
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  30 | 869
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  10 | 678
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  14 | 984
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  30 | 869
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right1.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Get Slim Juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Thar aloe vera
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kapiva Wild amla juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Dia free juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Shilajit gold resin
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Skin foods glow mix
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kapiva karela jamun juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Pure Aloe vera skin gel
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi anti hair fall oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  43 | 2323
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  32 | 2321
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  85 | 2356
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right2.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Bhringraj Hair oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right1.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi hair growth serum
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right1.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  A2 cow desi ghee
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right1.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Get slim mix
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right1.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Himalayan shilajit resin
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right3.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Hair care juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right3.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kumkumadi glow face oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right3.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Ashwagandha Gold Capsule
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right3.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi Anti-Acne Serum
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-sm text-state-grey">
              <div className="relative tracking-[0.25px] leading-[20px]">
                Showing 1-10 out of 15
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-text-light">
                <div className="rounded-81xl bg-white overflow-hidden flex flex-col p-2 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-left.svg"
                  />
                </div>
                <div className="bg-white overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0] text-true-blue border-b-[2px] border-solid border-true-blue">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    1
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    2
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    3
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col p-2 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-left1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-xl text-text-light font-inter">
            <div className="self-stretch flex-1 rounded-lg flex flex-col p-6 items-start justify-start gap-[16px] border-[1px] border-solid border-border-grey">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative font-semibold">
                  Top Revenue Drivers
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-state-grey">
                  <div className="relative font-medium">Last 3 Months</div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrow-drop-down.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm text-dark-secondary">
                <div className="self-stretch flex flex-row py-3 px-0 items-center justify-start gap-[12px] text-state-grey border-b-[1px] border-solid border-border-grey">
                  <div className="flex-1 relative leading-[14px]">Product</div>
                  <div className="relative leading-[100%] inline-block w-20 shrink-0">
                    NPS Score
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[21px]">
                    <div className="flex-1 relative leading-[14px]">
                      Tulsi hair growth serum
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      95.6
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-green1 w-[349.26px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Tulsi Anti-Acne Serum
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      90.9
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-green1 w-[331.79px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="relative leading-[14px]">
                      Ashwagandha Anti Aging face oil
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      89.4
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-green1 w-[326.31px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Bhringraj Hair oil
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      84
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-green1 w-[306.6px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Kapiva karela jamun juice
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      74
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[270.1px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Kapiva Wild amla juice
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      72.9
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[266.08px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Dia free juice
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      70.06
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[255.72px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Dia free juice
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      70.06
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[255.72px] h-1" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col pt-4 px-0 pb-px items-start justify-start gap-[16px] border-b-[1px] border-solid border-border-grey">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[88px]">
                    <div className="flex-1 relative leading-[14px]">
                      Dia free juice
                    </div>
                    <div className="relative leading-[14px] inline-block w-20 shrink-0">
                      70.06
                    </div>
                  </div>
                  <div className="relative w-[365.33px] h-1">
                    <div className="absolute top-[0px] left-[0px] bg-lighter-grey w-[365.33px] h-1" />
                    <div className="absolute top-[0px] left-[0px] bg-star-yellow w-[255.72px] h-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-lg flex flex-col p-6 items-start justify-start gap-[16px] border-[1px] border-solid border-border-grey">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative font-semibold">New Launches</div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-state-grey">
                  <div className="relative font-medium">{`<6 Months`}</div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrow-drop-down1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm text-dark-secondary">
                <div className="self-stretch flex flex-row py-3 px-0 items-center justify-start gap-[12px] text-state-grey border-b-[1px] border-solid border-border-grey">
                  <div className="flex-1 relative leading-[14px]">Product</div>
                  <div className="relative leading-[100%] inline-block w-20 shrink-0">
                    NPS Score
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(192,_210,_136,_0.2),_rgba(192,_210,_136,_0.2)_70.22%,_#fff_70.22%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Tulsi hair growth serum
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    95.6
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(192,_210,_136,_0.2),_rgba(192,_210,_136,_0.2)_66.67%,_#fff_66.94%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Tulsi Anti-Acne Serum
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    90.9
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(192,_210,_136,_0.2),_rgba(192,_210,_136,_0.2)_65.16%,_#fff_65.3%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Ashwagandha Anti Aging face oil
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    89.4
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(192,_210,_136,_0.2),_rgba(192,_210,_136,_0.2)_61.89%,_#fff_62.02%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Bhringraj Hair oil
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    84
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(255,_210,_118,_0.2),_rgba(255,_210,_118,_0.2)_57.1%,_#fff_57.24%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Kapiva karela jamun juice
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    74
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(255,_210,_118,_0.2),_rgba(255,_210,_118,_0.2)_54.51%,_#fff_54.64%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Kapiva Wild amla juice
                  </div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    72.9
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(255,_210,_118,_0.2),_rgba(255,_210,_118,_0.2)_52.6%,_#fff_52.73%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    70.06
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(255,_210,_118,_0.2),_rgba(255,_210,_118,_0.2)_52.6%,_#fff_52.87%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    70.06
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(90deg,_rgba(255,_116,_123,_0.2),_rgba(255,_116,_123,_0.2)_37.7%,_#fff_37.7%)] flex flex-row py-[18px] pr-0 pl-3 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="relative leading-[14px] inline-block w-20 shrink-0">
                    35.5
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-lg flex flex-col p-6 items-start justify-start gap-[16px] border-[1px] border-solid border-border-grey">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative font-semibold">Top Rated Products</div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-state-grey">
                  <div className="relative font-medium">Last 3 Months</div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrow-drop-down2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm text-dark-secondary">
                <div className="self-stretch flex flex-row py-3 px-0 items-center justify-start gap-[12px] text-state-grey border-b-[1px] border-solid border-border-grey">
                  <div className="flex-1 relative leading-[14px]">Product</div>
                  <div className="relative leading-[100%] inline-block w-[130px] shrink-0">
                    Ratings Based NPS
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                  <div className="flex-1 relative leading-[100%]">
                    Tulsi hair growth serum
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Tulsi Anti-Acne Serum
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Ashwagandha Anti Aging face oil
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Bhringraj Hair oil
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Kapiva karela jamun juice
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">
                    Kapiva Wild amla juice
                  </div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px]">Dia free juice</div>
                  <div className="w-[130px] flex flex-row items-center justify-start gap-[4px] font-body-medium">
                    <div className="relative leading-[100%]">4.0</div>
                    <div className="flex flex-row items-start justify-start gap-[2px]">
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star8.svg"
                      />
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/star-border6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">Brand NPS Score</div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-state-grey">
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Growth in ratings on May 2023
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] text-mediumseagreen">
                    <div className="relative tracking-[0.25px] leading-[20px]">
                      12%
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end gap-[20px] text-center text-sm text-text-light">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      Top Revenue Drivers
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      Last 6 Months
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start gap-[8px] border-l-[1px] border-solid border-border-grey1">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/filter-alt.svg"
                    />
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfile-download.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border h-[776px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-base text-dark-secondary border-[1px] border-solid border-light-grey">
              <div className="self-stretch bg-lighter-grey flex flex-row pt-3 px-5 pb-4 items-center justify-start gap-[12px] text-sm text-state-grey border-b-[1px] border-solid border-border-grey">
                <div className="flex-1 relative tracking-[0.25px] leading-[20px]">
                  Product
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Dec 2022
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Jan 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Feb 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Mar 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  Apr 2023
                </div>
                <div className="relative tracking-[0.25px] leading-[20px] inline-block w-[120px] shrink-0">
                  May 2023
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right4.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  BP care juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Amazon.in
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  30
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  25
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -10
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-6 h-6 object-cover"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Careem.com
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  30
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  25
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -10
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
              </div>
              <div className="self-stretch bg-lighter-grey flex flex-row py-4 pr-5 pl-[52px] items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <div className="relative w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_12px)] left-[0px] rounded-81xl bg-white box-border w-6 h-6 overflow-hidden border-[1px] border-solid border-light-grey">
                    <img
                      className="absolute top-[2px] left-[0px] w-6 h-[19px] object-cover"
                      alt=""
                      src="/image-26@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                </div>
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Amazon.uk
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  20
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  30
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  25
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -10
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  35
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Get Slim Juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Thar aloe vera
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kapiva Wild amla juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Dia free juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Shilajit gold resin
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Skin foods glow mix
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kapiva karela jamun juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Pure Aloe vera skin gel
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi anti hair fall oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Bhringraj Hair oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi hair growth serum
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  A2 cow desi ghee
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Get slim mix
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right5.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Himalayan shilajit resin
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right6.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Hair care juice
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right6.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Kumkumadi glow face oil
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right6.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Ashwagandha Gold Capsule
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
              <div className="self-stretch flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-b-[1px] border-solid border-border-grey">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-right6.svg"
                />
                <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                  Tulsi Anti-Acne Serum
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] text-star-red inline-block w-[120px] shrink-0">
                  -50
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] inline-block w-[120px] shrink-0">
                  100
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-sm text-state-grey">
              <div className="relative tracking-[0.25px] leading-[20px]">
                Showing 1-10 out of 15
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-text-light">
                <div className="rounded-81xl bg-white overflow-hidden flex flex-col p-2 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-left.svg"
                  />
                </div>
                <div className="bg-white overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0] text-true-blue border-b-[2px] border-solid border-true-blue">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    1
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    2
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col py-2 px-3.5 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <div className="relative tracking-[0.25px] leading-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                    3
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col p-2 items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-left1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">
                  PS (based on weekly reviews)
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-state-grey">
                  <div className="relative tracking-[0.25px] leading-[20px]">
                    Growth in ratings on May 2023
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] text-mediumseagreen">
                    <div className="relative tracking-[0.25px] leading-[20px]">
                      12%
                    </div>
                    <img
                      className="relative w-5 h-3"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end gap-[20px] text-center text-sm text-text-light">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      All Markets
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                      Last 4 Weeks
                    </div>
                    <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src="/iconsarrow-drop-down-24px.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start gap-[8px] border-l-[1px] border-solid border-border-grey1">
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/filter-alt.svg"
                    />
                  </div>
                  <div className="rounded-81xl overflow-hidden flex flex-row py-3 px-4 items-center justify-center border-[1px] border-solid border-light-grey">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/iconsfile-download.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg overflow-hidden flex flex-col py-6 px-0 items-start justify-center gap-[24px] text-xs text-text-light">
              <div className="relative w-[1286px] h-[509px]">
                <div className="absolute top-[72px] left-[19px] h-[360px] flex flex-col items-end justify-start gap-[54px] text-dimgray">
                  <div className="relative font-medium">100</div>
                  <div className="relative font-medium">80</div>
                  <div className="relative font-medium">60</div>
                  <div className="relative font-medium">40</div>
                  <div className="relative font-medium">20</div>
                  <div className="relative font-medium">0</div>
                </div>
                <div className="absolute top-[72px] left-[0px] h-[356px] flex flex-col items-end justify-start text-center text-state-grey">
                  <div className="relative font-medium inline-block w-[356px] h-[15px] shrink-0 [transform:_rotate(-90deg)] [transform-origin:0_0]">
                    NPS Score
                  </div>
                </div>
                <div className="absolute top-[355.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-solid border-border-grey1" />
                <div className="absolute top-[286.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-solid border-border-grey1" />
                <div className="absolute top-[217.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-solid border-border-grey1" />
                <div className="absolute top-[148.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-solid border-border-grey1" />
                <div className="absolute top-[86.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-solid border-border-grey1" />
                <div className="absolute top-[45.5px] left-[53.5px] box-border w-[1205px] h-px border-t-[1px] border-dashed border-light-grey" />
                <div className="absolute top-[439px] left-[54px] h-[26px] flex flex-row py-0 pr-0 pl-3 box-border items-center justify-start gap-[8px] text-center text-2xs">
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Bhringraj Hair oil
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Kumkumadi glow face oil
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    BP care juice
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Shilajit gold resin
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Skin foods glow mix
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Pure Aloe vera skin gel
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Kapiva karela jamun juice
                  </div>
                  <div className="relative flex items-center justify-center w-36 h-[26px] shrink-0">
                    Thar aloe vera
                  </div>
                </div>
                <div className="absolute top-[0px] left-[54px] box-border h-[428px] flex flex-row py-0 px-3 items-end justify-start gap-[8px] text-2xs text-dark-secondary border-b-[1px] border-solid border-light border-l-[1px]">
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative">No effectiveness</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between text-center border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-center border-[1px] border-solid border-star-red">
                      <div className="relative">Not effective</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] h-[29px] overflow-hidden shrink-0 flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:10] [-webkit-box-orient:vertical]">
                        misrepresentation
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between text-center border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative">Poor taste</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:10] [-webkit-box-orient:vertical]">
                        No value for money
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative">No effectiveness</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between text-center border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative">Taste</div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 px-3 items-center justify-between border-r-[1px] border-dashed border-cool-grey border-l-[1px]">
                    <div className="rounded-31xl bg-lavenderblush box-border w-[120px] flex flex-row py-2 px-4 items-start justify-start border-[1px] border-solid border-star-red">
                      <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:10] [-webkit-box-orient:vertical]">
                        not matching expectation
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[2px]">
                      <div className="flex-1 relative bg-star-red h-[350px]" />
                      <div className="flex-1 relative bg-seconday-blue h-[317px]" />
                      <div className="flex-1 relative bg-primary-blue h-[116px]" />
                      <div className="flex-1 relative bg-star-green h-[277px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[165px] left-[105.58px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[232px] hidden flex-col items-start justify-start text-sm">
                  <div className="relative w-[258.23px] h-[232px]">
                    <div className="absolute top-[97px] left-[245.5px] bg-border-grey w-[18px] h-[18px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[0px] left-[calc(50%_-_129.11px)] bg-white flex flex-col p-5 items-start justify-center gap-[12px] border-[1px] border-solid border-border-grey">
                      <div className="self-stretch flex flex-row pt-0 px-0 pb-2 items-center justify-start gap-[8px] text-base border-b-[1px] border-solid border-state-grey">
                        <img
                          className="relative w-5 h-5"
                          alt=""
                          src="/iconstoday-24px.svg"
                        />
                        <div className="relative tracking-[0.1px] leading-[24px] font-medium flex items-center w-[120px] shrink-0">
                          May 2023
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] text-sm text-mediumseagreen">
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            12%
                          </div>
                          <img
                            className="relative w-5 h-3"
                            alt=""
                            src="/vector7.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative rounded-lg bg-darksalmon w-3 h-3" />
                        <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                          Suspect
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          $63k
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative rounded-lg bg-palevioletred w-3 h-3" />
                        <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                          Scout
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          $76K
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative rounded-lg bg-purple w-3 h-3" />
                        <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                          Portfolio 1
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          $45k
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative rounded-lg bg-indigo w-3 h-3" />
                        <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                          Portfolio 2
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          $68K
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative rounded-lg bg-midnightblue w-3 h-3" />
                        <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                          Portfolio 3
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          $56K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[493px] left-[calc(50%_-_170px)] h-4 flex flex-row items-start justify-end gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-star-red w-3 h-3" />
                    <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                      Week 1
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-seconday-blue w-3 h-3" />
                    <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                      Week 2
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-primary-blue w-3 h-3" />
                    <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                      Week 3
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-star-green w-3 h-3" />
                    <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                      Week 4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-start text-base text-dark-secondary font-inter">
                <div className="self-stretch flex flex-row py-3 px-0 items-center justify-between text-sm text-state-grey border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px] inline-block w-[140px] shrink-0">
                    Stages
                  </div>
                  <div className="relative leading-[14px] inline-block w-[100px] shrink-0">
                    Stage
                  </div>
                  <div className="relative leading-[100%] text-right inline-block w-[100px] shrink-0">
                    Value
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px] inline-block w-[140px] shrink-0">
                    Suspect
                  </div>
                  <div className="self-stretch w-[100px] flex flex-row items-center justify-start">
                    <div className="relative w-[100px] h-1">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-[100px] h-1" />
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-orange w-[75px] h-1" />
                    </div>
                  </div>
                  <div className="relative leading-[100%] font-semibold text-text-light text-right inline-block w-[100px] shrink-0">
                    $2,547
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px] inline-block w-[140px] shrink-0">
                    Account 16
                  </div>
                  <div className="self-stretch w-[100px] flex flex-row items-center justify-start">
                    <div className="relative w-[100px] h-1">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-[100px] h-1" />
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-orange w-[60px] h-1" />
                    </div>
                  </div>
                  <div className="relative leading-[100%] font-semibold text-text-light text-right inline-block w-[100px] shrink-0">
                    $2,547
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px] inline-block w-[140px] shrink-0">
                    Account 15
                  </div>
                  <div className="self-stretch w-[100px] flex flex-row items-center justify-start">
                    <div className="relative w-[100px] h-1">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-[100px] h-1" />
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-orange w-[50px] h-1" />
                    </div>
                  </div>
                  <div className="relative leading-[100%] font-semibold text-text-light text-right inline-block w-[100px] shrink-0">
                    $2,547
                  </div>
                </div>
                <div className="self-stretch flex flex-row py-4 px-0 items-center justify-between border-b-[1px] border-solid border-border-grey">
                  <div className="relative leading-[14px] inline-block w-[140px] shrink-0">
                    Account 02
                  </div>
                  <div className="self-stretch w-[100px] flex flex-row items-center justify-start">
                    <div className="relative w-[100px] h-1">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-[100px] h-1" />
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-orange w-[35px] h-1" />
                    </div>
                  </div>
                  <div className="relative leading-[100%] font-semibold text-text-light text-right inline-block w-[100px] shrink-0">
                    $2,547
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-white font-inter">
          <div className="bg-text-dark box-border w-[1512px] flex flex-row py-6 px-9 items-center justify-between border-b-[1px] border-solid border-text-light">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row py-4 px-5 items-center justify-start gap-[12px]">
                <div className="relative w-9 h-9 overflow-hidden shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-[37.28px] h-9 object-cover"
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
                <div className="relative tracking-[0.5px] leading-[24px] font-semibold">
                  AskECHO
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start text-center text-sm font-body-medium">
              <div className="rounded-81xl bg-seconday-blue shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.15),_0px_1px_3px_rgba(0,_0,_0,_0.3)] flex flex-row py-3 px-5 items-center justify-start gap-[8px]">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Go to Top
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/expand-circle-down.svg"
                />
              </div>
            </div>
          </div>
          <div className="bg-text-dark w-[1512px] flex flex-row py-1 px-9 box-border items-center justify-between text-sm font-body-medium">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row py-4 px-5 items-center justify-start">
                <div className="relative tracking-[0.25px] leading-[20px]">
                  Copyright © 2023 www.askecho.io All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
