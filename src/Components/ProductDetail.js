import React from 'react'
import "./product_detail.css"

export default function ProductDetail() {
  return (
    <div>
      <div className="relative bg-white w-full h-[2284px] overflow-hidden text-left text-sm text-text-dark font-body-medium">
        <div className="absolute top-[322px] left-[calc(50%_-_448px)] w-[1156px] flex flex-col items-center justify-start gap-[48px] text-9xl">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-12 items-center justify-start border-b-[1px] border-solid border-border-grey">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch relative leading-[36px]">
                Reviews
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-base text-text-light">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[48px]">
                    <div className="flex-1 flex flex-col py-4 pr-8 pl-0 items-start justify-start gap-[12px] border-r-[1px] border-solid border-border-grey">
                      <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                        Total Reviews
                      </div>
                      <div className="flex flex-row py-0 px-2.5 items-center justify-start gap-[10px] text-26xl">
                        <div className="relative leading-[100%]">331</div>
                        <div className="rounded-2xl bg-light-green overflow-hidden flex flex-row py-2 px-3 items-center justify-start gap-[4px] text-sm text-black">
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            12%
                          </div>
                          <img
                            className="relative w-5 h-3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-sm tracking-[0.25px] leading-[20px] text-grey">
                        Growth in reviews on this month
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col py-4 pr-8 pl-0 items-start justify-start gap-[12px]">
                      <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                        Average Ratings
                      </div>
                      <div className="flex flex-row py-0 px-2.5 items-center justify-start gap-[10px] text-26xl">
                        <div className="relative leading-[100%]">4.0</div>
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/star.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/star.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/star.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/star.svg"
                          />
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-sm tracking-[0.25px] leading-[20px] text-grey">
                        Average ratings on this month
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[48px]">
                    <div className="flex-1 flex flex-col py-4 pr-8 pl-0 items-start justify-start gap-[12px] border-r-[1px] border-solid border-border-grey">
                      <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                        Rating Summary
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-text-dark">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="w-20 flex flex-row items-start justify-start">
                            <div className="relative tracking-[0.25px] leading-[20px]">
                              5 / 4 Star %
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative w-40 h-2">
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-40 h-2" />
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-rating-yellow w-[118.4px] h-2" />
                            </div>
                          </div>
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            74%
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="w-20 flex flex-row items-start justify-start">
                            <div className="relative tracking-[0.25px] leading-[20px]">
                              3 Star %
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative w-40 h-2">
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-40 h-2" />
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-rating-yellow w-[12.8px] h-2" />
                            </div>
                          </div>
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            8%
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="w-20 flex flex-row items-start justify-start">
                            <div className="relative tracking-[0.25px] leading-[20px]">
                              2 / 1 Star %
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative w-40 h-2">
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro w-40 h-2" />
                              <div className="absolute top-[0px] left-[0px] rounded-xl bg-rating-yellow w-[25.6px] h-2" />
                            </div>
                          </div>
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            16%
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="w-20 flex flex-row items-start justify-start">
                            <div className="relative tracking-[0.25px] leading-[20px]">
                              NPS
                            </div>
                          </div>
                          <div className="relative tracking-[0.25px] leading-[20px]">
                            57
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col py-4 px-0 items-start justify-start gap-[4px] text-sm">
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
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
                            src="/star2.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          179 Reviews
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star3.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star3.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star3.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star3.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border1.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          68 Reviews
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star4.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star4.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star4.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border1.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          28 Reviews
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star5.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star5.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border1.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          13 Reviews
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star6.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border2.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/star-border1.svg"
                          />
                        </div>
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          43 Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="relative w-[404px] h-[330px] object-cover"
                    alt=""
                    src=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col pt-0 px-0 pb-12 items-start justify-start gap-[24px] border-b-[1px] border-solid border-lighter-grey">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">Ratings</div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-grey">
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
                <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                    Daily
                  </div>
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt=""
                    src="/iconsarrow-drop-down-24px.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start gap-[8px] border-l-[1px] border-solid border-border-grey">
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
            <div className="relative w-[1160px] h-[449px] text-xs text-dimgray">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-end justify-start gap-[54px]">
                <div className="relative font-medium">100</div>
                <div className="relative font-medium">80</div>
                <div className="relative font-medium">60</div>
                <div className="relative font-medium">40</div>
                <div className="relative font-medium">20</div>
                <div className="relative font-medium">0</div>
              </div>
              <div className="absolute top-[283.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[214.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[145.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[76.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[376px] left-[47px] flex flex-row items-center justify-center gap-[16px] text-text-light">
                <div className="relative">03 May</div>
                <div className="relative">04 May</div>
                <div className="relative">05 May</div>
                <div className="relative">06 May</div>
                <div className="relative">07 May</div>
                <div className="relative">08 May</div>
                <div className="relative">09 May</div>
                <div className="relative">10 May</div>
                <div className="relative">11 May</div>
                <div className="relative">12 May</div>
                <div className="relative">13 May</div>
                <div className="relative">14 May</div>
                <div className="relative">15 May</div>
                <div className="relative">16 May</div>
                <div className="relative">17 May</div>
                <div className="relative">18 May</div>
                <div className="relative">19 May</div>
                <div className="relative">20 May</div>
                <div className="relative">21 May</div>
                <div className="flex flex-row py-2.5 px-0 items-start justify-start text-primary-blue border-b-[2px] border-solid border-primary-blue">
                  <div className="relative font-semibold">22 May</div>
                </div>
              </div>
              <div className="absolute top-[6px] left-[33px] box-border w-[1127px] h-[349px] flex flex-row pt-9 px-6 pb-0 items-end justify-start gap-[36px] border-b-[1px] border-solid border-light border-l-[1px]">
                <div className="relative w-5 h-[271px]">
                  <div className="absolute top-[179.77px] left-[0px] bg-star-red1 w-5 h-[91.22px]" />
                  <div className="absolute top-[140.95px] left-[0px] bg-star-red w-5 h-[37.83px]" />
                  <div className="absolute top-[113.25px] left-[0px] bg-star-yellow w-5 h-[26.7px]" />
                  <div className="absolute top-[56.63px] left-[0px] bg-star-green1 w-5 h-[55.63px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[55.63px]" />
                </div>
                <div className="relative w-5 h-[161.6px]">
                  <div className="absolute top-[107.76px] left-[0px] bg-star-red1 w-5 h-[53.85px]" />
                  <div className="absolute top-[84.43px] left-[0px] bg-star-red w-5 h-[22.33px]" />
                  <div className="absolute top-[67.67px] left-[0px] bg-star-yellow w-5 h-[15.76px]" />
                  <div className="absolute top-[33.83px] left-[0px] bg-star-green1 w-5 h-[32.83px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[32.83px]" />
                </div>
                <div className="relative w-5 h-[94.85px]">
                  <div className="absolute top-[63.81px] left-[0px] bg-star-red1 w-5 h-[31.04px]" />
                  <div className="absolute top-[49.94px] left-[0px] bg-star-red w-5 h-[12.87px]" />
                  <div className="absolute top-[39.86px] left-[0px] bg-star-yellow w-5 h-[9.09px]" />
                  <div className="absolute top-[19.93px] left-[0px] bg-star-green1 w-5 h-[18.93px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[18.93px]" />
                </div>
                <div className="relative w-5 h-[256.17px]">
                  <div className="absolute top-[170.01px] left-[0px] bg-star-red1 w-5 h-[86.16px]" />
                  <div className="absolute top-[133.29px] left-[0px] bg-star-red w-5 h-[35.72px]" />
                  <div className="absolute top-[107.07px] left-[0px] bg-star-yellow w-5 h-[25.22px]" />
                  <div className="absolute top-[53.53px] left-[0px] bg-star-green1 w-5 h-[52.53px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[52.53px]" />
                </div>
                <div className="relative w-5 h-[94.85px]">
                  <div className="absolute top-[63.81px] left-[0px] bg-star-red1 w-5 h-[31.04px]" />
                  <div className="absolute top-[49.94px] left-[0px] bg-star-red w-5 h-[12.87px]" />
                  <div className="absolute top-[39.86px] left-[0px] bg-star-yellow w-5 h-[9.09px]" />
                  <div className="absolute top-[19.93px] left-[0px] bg-star-green1 w-5 h-[18.93px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[18.93px]" />
                </div>
                <div className="relative w-5 h-[94.85px]">
                  <div className="absolute top-[63.81px] left-[0px] bg-star-red1 w-5 h-[31.04px]" />
                  <div className="absolute top-[49.94px] left-[0px] bg-star-red w-5 h-[12.87px]" />
                  <div className="absolute top-[39.86px] left-[0px] bg-star-yellow w-5 h-[9.09px]" />
                  <div className="absolute top-[19.93px] left-[0px] bg-star-green1 w-5 h-[18.93px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[18.93px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[302px]">
                  <div className="absolute top-[200.18px] left-[0px] bg-star-red1 w-5 h-[101.82px]" />
                  <div className="absolute top-[156.97px] left-[0px] bg-star-red w-5 h-[42.22px]" />
                  <div className="absolute top-[126.17px] left-[0px] bg-star-yellow w-5 h-[29.8px]" />
                  <div className="absolute top-[63.08px] left-[0px] bg-star-green1 w-5 h-[62.08px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[62.08px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[256.17px]">
                  <div className="absolute top-[170.01px] left-[0px] bg-star-red1 w-5 h-[86.16px]" />
                  <div className="absolute top-[133.29px] left-[0px] bg-star-red w-5 h-[35.72px]" />
                  <div className="absolute top-[107.07px] left-[0px] bg-star-yellow w-5 h-[25.22px]" />
                  <div className="absolute top-[53.53px] left-[0px] bg-star-green1 w-5 h-[52.53px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[52.53px]" />
                </div>
                <div className="relative w-5 h-[126.38px]">
                  <div className="absolute top-[84.56px] left-[0px] bg-star-red1 w-5 h-[41.81px]" />
                  <div className="absolute top-[66.23px] left-[0px] bg-star-red w-5 h-[17.34px]" />
                  <div className="absolute top-[52.99px] left-[0px] bg-star-yellow w-5 h-[12.24px]" />
                  <div className="absolute top-[26.49px] left-[0px] bg-star-green1 w-5 h-[25.49px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[25.49px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[256.17px]">
                  <div className="absolute top-[170.01px] left-[0px] bg-star-red1 w-5 h-[86.16px]" />
                  <div className="absolute top-[133.29px] left-[0px] bg-star-red w-5 h-[35.72px]" />
                  <div className="absolute top-[107.07px] left-[0px] bg-star-yellow w-5 h-[25.22px]" />
                  <div className="absolute top-[53.53px] left-[0px] bg-star-green1 w-5 h-[52.53px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[52.53px]" />
                </div>
                <div className="relative w-5 h-[126.38px]">
                  <div className="absolute top-[84.56px] left-[0px] bg-star-red1 w-5 h-[41.81px]" />
                  <div className="absolute top-[66.23px] left-[0px] bg-star-red w-5 h-[17.34px]" />
                  <div className="absolute top-[52.99px] left-[0px] bg-star-yellow w-5 h-[12.24px]" />
                  <div className="absolute top-[26.49px] left-[0px] bg-star-green1 w-5 h-[25.49px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[25.49px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[126.38px]">
                  <div className="absolute top-[84.56px] left-[0px] bg-star-red1 w-5 h-[41.81px]" />
                  <div className="absolute top-[66.23px] left-[0px] bg-star-red w-5 h-[17.34px]" />
                  <div className="absolute top-[52.99px] left-[0px] bg-star-yellow w-5 h-[12.24px]" />
                  <div className="absolute top-[26.49px] left-[0px] bg-star-green1 w-5 h-[25.49px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[25.49px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[256.17px]">
                  <div className="absolute top-[170.01px] left-[0px] bg-star-red1 w-5 h-[86.16px]" />
                  <div className="absolute top-[133.29px] left-[0px] bg-star-red w-5 h-[35.72px]" />
                  <div className="absolute top-[107.07px] left-[0px] bg-star-yellow w-5 h-[25.22px]" />
                  <div className="absolute top-[53.53px] left-[0px] bg-star-green1 w-5 h-[52.53px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[52.53px]" />
                </div>
                <div className="relative w-5 h-[202.4px]">
                  <div className="absolute top-[134.61px] left-[0px] bg-star-red1 w-5 h-[67.79px]" />
                  <div className="absolute top-[105.5px] left-[0px] bg-star-red w-5 h-[28.11px]" />
                  <div className="absolute top-[84.67px] left-[0px] bg-star-yellow w-5 h-[19.84px]" />
                  <div className="absolute top-[42.33px] left-[0px] bg-star-green1 w-5 h-[41.33px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[41.33px]" />
                </div>
                <div className="relative w-5 h-[256.17px]">
                  <div className="absolute top-[170.01px] left-[0px] bg-star-red1 w-5 h-[86.16px]" />
                  <div className="absolute top-[133.29px] left-[0px] bg-star-red w-5 h-[35.72px]" />
                  <div className="absolute top-[107.07px] left-[0px] bg-star-yellow w-5 h-[25.22px]" />
                  <div className="absolute top-[53.53px] left-[0px] bg-star-green1 w-5 h-[52.53px]" />
                  <div className="absolute top-[0px] left-[0px] bg-star-green w-5 h-[52.53px]" />
                </div>
              </div>
              <img
                className="absolute top-[54.41px] left-[33.67px] w-[1122.67px] h-[82.93px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[6px] left-[1128.33px] w-[5.33px] h-[353.67px]"
                alt=""
                src="/line-5.svg"
              />
              <div className="absolute top-[63px] left-[871.5px] flex flex-col items-start justify-start text-sm text-white">
                <div className="relative w-[258.23px] h-[264px]">
                  <div className="absolute top-[97px] left-[245.5px] bg-text-light w-[18px] h-[18px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[0px] left-[calc(50%_-_129.11px)] bg-text-light flex flex-col p-5 items-start justify-center gap-[12px]">
                    <div className="self-stretch flex flex-row pt-0 px-0 pb-2 items-center justify-start gap-[8px] text-base border-b-[1px] border-solid border-grey">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/iconstoday-24px.svg"
                      />
                      <div className="relative tracking-[0.1px] leading-[24px] font-medium flex items-center w-[120px] shrink-0">
                        22 May 2023
                      </div>
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] text-sm text-mediumseagreen">
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          12%
                        </div>
                        <img
                          className="relative w-5 h-3"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        5 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        25
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green1 w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        4 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        23
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        3 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        67
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        2 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        12
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red1 w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        1 Star
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        37
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-primary-blue w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        Average Ratings
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        3.2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[431px] left-[calc(50%_-_258.5px)] flex flex-row items-start justify-start gap-[20px] text-dark-secondary font-poppins">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-green w-3 h-3" />
                  <div className="relative">5 Stars</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-green1 w-3 h-3" />
                  <div className="relative">4 Stars</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                  <div className="relative">3 Stars</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-red w-3 h-3" />
                  <div className="relative">2 Stars</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-red1 w-3 h-3" />
                  <div className="relative">1 Star</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative bg-primary-blue w-3 h-[3px]" />
                  <div className="relative">Average Ratings</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col pt-0 px-0 pb-12 items-start justify-start gap-[24px] border-b-[1px] border-solid border-lighter-grey">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[36px]">Brand NPS</div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-grey">
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
                <div className="rounded-81xl overflow-hidden flex flex-row py-3 pr-5 pl-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                    Daily
                  </div>
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt=""
                    src="/iconsarrow-drop-down-24px.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-0 pl-5 items-start justify-start gap-[8px] border-l-[1px] border-solid border-border-grey">
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
            <div className="relative w-[1160px] h-[449px] text-xs text-text-light">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-end justify-start gap-[54px] text-dimgray">
                <div className="relative font-medium">100</div>
                <div className="relative font-medium">80</div>
                <div className="relative font-medium">60</div>
                <div className="relative font-medium">40</div>
                <div className="relative font-medium">20</div>
                <div className="relative font-medium">0</div>
              </div>
              <div className="absolute top-[283.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[214.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[145.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[76.5px] left-[32.5px] box-border w-[1124px] h-px border-t-[1px] border-solid border-border-grey" />
              <div className="absolute top-[376px] left-[47px] flex flex-row items-center justify-center gap-[16px]">
                <div className="relative">03 May</div>
                <div className="relative">04 May</div>
                <div className="relative">05 May</div>
                <div className="relative">06 May</div>
                <div className="relative">07 May</div>
                <div className="relative">08 May</div>
                <div className="relative">09 May</div>
                <div className="relative">10 May</div>
                <div className="relative">11 May</div>
                <div className="relative">12 May</div>
                <div className="relative">13 May</div>
                <div className="relative">14 May</div>
                <div className="relative">15 May</div>
                <div className="relative">16 May</div>
                <div className="relative">17 May</div>
                <div className="relative">18 May</div>
                <div className="relative">19 May</div>
                <div className="relative">20 May</div>
                <div className="relative">21 May</div>
                <div className="flex flex-row py-2.5 px-0 items-start justify-start text-primary-blue border-b-[2px] border-solid border-primary-blue">
                  <div className="relative font-semibold">22 May</div>
                </div>
              </div>
              <div className="absolute top-[6px] left-[33px] box-border w-[1127px] h-[349px] flex flex-row pt-9 px-6 pb-0 items-end justify-start gap-[36px] border-b-[1px] border-solid border-light border-l-[1px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[231px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[272px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[251px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[237px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[218px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[259px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[285px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[299px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[307px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[290px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[272px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[251px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[237px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[237px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[259px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[272px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[277px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[259px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
                <div className="h-[237px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex-1 relative bg-star-green w-5" />
                  <div className="flex-1 relative bg-star-yellow w-5" />
                  <div className="flex-1 relative bg-star-red w-5" />
                </div>
              </div>
              <img
                className="absolute top-[54.41px] left-[33.67px] w-[1122.67px] h-[82.93px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[6px] left-[1128.33px] w-[5.33px] h-[353.67px]"
                alt=""
                src="/line-5.svg"
              />
              <div className="absolute top-[63px] left-[871.5px] hidden flex-col items-start justify-start text-sm text-white">
                <div className="relative w-[258.23px] h-[264px]">
                  <div className="absolute top-[97px] left-[245.5px] bg-text-light w-[18px] h-[18px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[0px] left-[calc(50%_-_129.11px)] bg-text-light flex flex-col p-5 items-start justify-center gap-[12px]">
                    <div className="self-stretch flex flex-row pt-0 px-0 pb-2 items-center justify-start gap-[8px] text-base border-b-[1px] border-solid border-grey">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/iconstoday-24px1.svg"
                      />
                      <div className="relative tracking-[0.1px] leading-[24px] font-medium flex items-center w-[120px] shrink-0">
                        22 May 2023
                      </div>
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] text-sm text-mediumseagreen">
                        <div className="relative tracking-[0.25px] leading-[20px]">
                          12%
                        </div>
                        <img
                          className="relative w-5 h-3"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        5 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        25
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-green1 w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        4 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        23
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        3 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        67
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        2 Stars
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        12
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-star-red1 w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        1 Star
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        37
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-primary-blue w-3 h-3" />
                      <div className="relative tracking-[0.25px] leading-[20px] flex items-center w-[130px] shrink-0">
                        Average Ratings
                      </div>
                      <div className="relative tracking-[0.25px] leading-[20px]">
                        3.2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[431px] left-[calc(50%_-_170px)] flex flex-row items-start justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-green w-3 h-3" />
                  <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                    5 / 4 Star %
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-yellow w-3 h-3" />
                  <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                    3 Star %
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-star-red w-3 h-3" />
                  <div className="relative tracking-[0.5px] leading-[16px] font-medium">
                    2/1 Star %
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-dark-secondary font-poppins">
                  <div className="relative bg-primary-blue w-3 h-[3px]" />
                  <div className="relative">NPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[202px] left-[260px] bg-white box-border w-[1252px] flex flex-row py-0 px-5 items-start justify-start text-grey border-b-[1px] border-solid border-border-grey">
          <div className="flex flex-row p-6 items-start justify-center gap-[8px] text-true-blue border-b-[2px] border-solid border-true-blue">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chat.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Overview
            </div>
          </div>
          <div className="flex flex-row p-6 items-start justify-center gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/stars.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Ratings
            </div>
          </div>
          <div className="flex flex-row p-6 items-center justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/assessment.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Brand NPS
            </div>
          </div>
          <div className="flex flex-row p-6 items-start justify-center gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/storefront.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Market Places
            </div>
          </div>
          <div className="flex flex-row p-6 items-start justify-center gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/workspace-premium.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Global Ranking
            </div>
          </div>
          <div className="flex flex-row p-6 items-start justify-center gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/people-alt.svg"
            />
            <div className="relative tracking-[0.1px] leading-[24px] uppercase font-medium">
              Competitors
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1512px] h-[206px] text-light-grey">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
            <div className="bg-true-blue w-[1512px] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-hover-blue">
                  <div className="flex flex-row p-6 items-start justify-start gap-[10px]">
                    <img
                      className="relative w-[30px] h-[30px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/menu-open.svg"
                    />
                    <img
                      className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                      alt=""
                      src="/menu-open1.svg"
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
                  <div className="relative rounded-lg bg-salmon w-3 h-3 ml-[-12px]" />
                </div>
                <div className="flex flex-row p-6 items-start justify-start">
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[78px] left-[0px] bg-white box-border w-[1512px] flex flex-row py-8 px-12 items-center justify-between text-9xl text-text-dark border-b-[1px] border-solid border-border-grey">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconsarrow-back-24px.svg"
                />
                <div className="relative w-[410px] h-9">
                  <div className="absolute top-[0px] left-[0px] leading-[36px]">
                    Skillmatics Educational Game
                  </div>
                  <img
                    className="absolute top-[6px] left-[386px] w-6 h-6"
                    alt=""
                    src="/iconsarrow-drop-down-24px1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row py-0 pr-0 pl-10 items-start justify-start text-sm text-text-light">
                <div className="relative tracking-[0.25px] leading-[20px]">
                  I Can Write, Reusable Activity Mats with 2 Dry Erase Markers,
                  Gifts for Ages 3 to 6
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-center text-sm text-true-blue">
              <div className="rounded-81xl overflow-hidden flex flex-row py-2.5 px-6 items-center justify-center gap-[8px] text-text-light border-[1px] border-solid border-light-grey">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/iconstoday-24px2.svg"
                />
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Apr 2023 - May 2023
                </div>
              </div>
              <div className="rounded-81xl overflow-hidden flex flex-row py-2.5 px-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/iconsshare-24px.svg"
                />
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Share
                </div>
              </div>
              <div className="rounded-81xl overflow-hidden flex flex-row py-2.5 px-6 items-center justify-center gap-[8px] border-[1px] border-solid border-light-grey">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconsfile-download1.svg"
                />
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Export
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[206px] left-[0px] bg-whitesmoke box-border w-[260px] h-[2454px] flex flex-row p-6 items-start justify-start text-text-light border-r-[1px] border-solid border-border-grey">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Select Variants
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] font-medium text-grey text-right">
                  09
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-text-dark">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">{`Search & Find`}</div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      I Can Write
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/trailingicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium flex items-center overflow-hidden text-ellipsis whitespace-nowrap w-[124px] h-5 shrink-0">{`Search & Find Me..`}</div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">{`Search & Find`}</div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      I Can Write Unicorn
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-21@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      Preschool Champ..
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end text-true-blue">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  See More
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                  Market Places
                </div>
                <div className="relative tracking-[0.1px] leading-[20px] font-medium text-grey text-right">
                  04
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-text-dark">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      Amazon - US
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/trailingicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      Amazon - UK
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/trailingicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      Amazon - AE
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/trailingicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-white box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[10px] left-[8px] w-6 h-[19px] object-cover"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium">
                      Amazon - IN
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/trailingicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-khaki box-border w-10 h-10 overflow-hidden border-[1px] border-solid border-light-grey">
                        <img
                          className="absolute top-[0px] left-[0px] w-11 h-[47px] object-cover"
                          alt=""
                          src="/image-3@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center">
                      Flipkart
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-center">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                    <div className="self-stretch relative w-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] rounded-81xl bg-khaki w-10 h-10 overflow-hidden">
                        <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_20px)] tracking-[0.1px] leading-[20px] font-medium [background:linear-gradient(rgba(208,_188,_255,_0.11),_rgba(208,_188,_255,_0.11)),_#1c1b1f] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-10 h-10">
                          C
                        </div>
                      </div>
                      <div className="absolute top-[calc(50%_-_20px)] left-[0px] w-10 h-10 hidden" />
                    </div>
                    <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium text-left flex items-center">
                      Careem
                    </div>
                    <div className="overflow-hidden flex flex-row py-3 px-0 items-center justify-end">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/iconscheck-box.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-4px] left-[0px] flex flex-col items-start justify-start text-9xl text-white font-inter">
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
