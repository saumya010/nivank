import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="p-[18px]">
        <div
          className="relative m-0 overflow-hidden bg-cover bg-center bg-no-repeat pt-[180px] sm:pt-[130px] lg:rounded-[35px] lg:pt-16 xl:pt-[130px] 2xl:pt-[110px] hero-bg"
          data-media='{"id":"2157737025","src":"iStock","type":"image"}'
        >
          <div className="absolute left-2.5 top-[90px] flex hidden h-[209px] w-[209px] items-center justify-center rounded-full bg-[var(--light-background-color)] bg-opacity-10 xl:top-[232px] xl:block"></div>
          <div className="absolute right-[22vw] top-[-75px] hidden h-[730px] w-[230px] rotate-[-18.74deg] bg-[#30302B] opacity-[0.03] xl:top-[-102px] xl:block xl:h-[1276px] xl:w-[326px]"></div>
          <span className="absolute left-[15%] top-[10%] flex h-[270px] w-[270px] items-center justify-center rounded-full bg-[var(--primary-color)] opacity-30 blur-[80px] sm:left-[32%] sm:h-[315px] sm:w-[315px] lg:top-[25%]"></span>
          <div className="ml-auto pl-0 lg:pl-[calc(41vw_-_405px)] xl:pl-[calc(41vw_-_505px)] 2xl:pl-[calc(41vw_-_605px)]">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="relative w-full px-5 text-center lg:w-[40%] lg:p-0 lg:pr-6 lg:text-left">
                <h1 className="mb-5 mt-2.5 text-center text-4xl font-semibold leading-[42px] text-black sm:mb-2.5 sm:leading-[52px] lg:text-left lg:text-5xl xl:mb-5 xl:mt-[18px] xl:text-[60px] xl:leading-[85px]">
                  <span className="">Creating </span>
                  <span className="text-[var(--primary-color)]">
                    Exquisite{" "}
                  </span>
                  <span className="">Indian Fashion</span>
                </h1>
                <p className="mb-10 max-w-full text-center text-lg font-normal leading-[30px] text-black sm:mb-5 lg:max-w-[400px] lg:text-left lg:text-sm lg:leading-5 xl:mb-9 xl:max-w-[620px] xl:leading-[30px] 2xl:text-lg">
                  Discover the allure of custom-made traditional Indian clothing
                  designed exclusively for you. Nivank transforms your fashion
                  aspirations into reality with luxurious fabrics and exquisite
                  craftsmanship. Our expert designer skillfully create unique
                  pieces, from stunning lehengas and elegant sarees to chic
                  Indo-Western outfits that blend tradition with contemporary
                  flair.
                </p>
                <a
                  href="/contact"
                  className="mx-auto inline-flex h-[60px] items-center justify-center rounded-full bg-[var(--primary-color)] pl-5 pr-2.5 text-lg font-medium text-[var(--primary-button-text-color)] sm:mx-0"
                >
                  <i
                    className="fa-solid fa-phone text-[var(--primary-button-text-color)]"
                    aria-hidden="true"
                  ></i>
                  <span className="ml-2 mr-[18px] block text-[var(--primary-button-text-color)]">
                    {" "}
                    Connect with Us Today
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-button-text-color)]">
                    <i
                      className="fa-solid fa-arrow-up rotate-45 text-lg text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
              <div className="w-full lg:w-[60%]">
                <div className="relative mt-4">
                  <img
                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e7a2543f-119c-40ca-ad32-9dad1cb1cc00/public"
                    className="w-full object-cover lg:h-[800px] rounded-[35px]"
                    alt=""
                    data-landingsite-gallery-type="image"
                    data-seo-image=""
                    data-media='{"id":"520137102","src":"iStock","type":"image"}'
                  />
                  <div className="absolute bottom-[2%] right-10 hidden lg:block">
                    <div className="mb-5 ml-auto max-w-[350px] rounded-[20px] border border-white border-opacity-50 bg-[#A0A0A0] bg-opacity-30 p-4 backdrop-blur-[2.5px] xl:max-w-[420px] xl:pb-4 xl:pl-5 xl:pr-8 xl:pt-4">
                      <h4 className="text-2xl font-medium text-[#FFFFFF]">
                        Check Out Our Collection
                      </h4>
                      <p className="text-base font-normal leading-5 text-[#FFFFFF] xl:text-lg xl:leading-[30px]">
                        From weddings to everyday elegance, our tailored attire
                        guarantees a perfect fit, timeless beauty, and a style
                        that stands out.
                      </p>
                      <div className="mt-2.5 flex items-center justify-end xl:mt-5">
                        <a
                          href="/products"
                          className="flex h-[50px] items-center justify-center gap-2.5 rounded-full bg-[var(--primary-color)] text-base font-medium text-[var(--primary-button-text-color)] xl:gap-[18px] xl:text-lg"
                        >
                          <span className="whitespace-nowrap pl-4">
                            View Collection
                          </span>
                          <span className="mr-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF]">
                            <i
                              className="fa-solid fa-arrow-up rotate-45 text-lg text-[var(--primary-color)]"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
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

export default Hero;
