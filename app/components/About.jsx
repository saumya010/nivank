import React from "react";
import Image from "next/image";
import Slide1 from "../assets/images/lehnga.webp";
import Slide2 from "../assets/images/saree.webp";
import Slide3 from "../assets/images/kurti.webp";
import Slide4 from "../assets/images/everyday.webp";
import Slide5 from "../assets/images/traditional.webp";
import Slide6 from "../assets/images/custom.webp";
import Dots from "../assets/images/dots.webp";

const About = () => {
  return (
    <section className="relative py-[60px] lg:pb-[150px] lg:pt-[124px]">
      <div className="mx-auto max-w-[1570px] px-5 lg:px-10 2xl:px-5">
        <div className="flex flex-col gap-2.5 lg:flex-row xl:gap-[54px]">
          <div className="mb-5 w-full text-center lg:mb-0 lg:w-1/3 xl:text-left">
            <div className="inline-flex items-center justify-center gap-[11px] rounded-[60px] border border-[var(--dark-border-color)] bg-[#FFFFFF] px-5 text-lg font-medium text-[var(--dark-text-color)] sm:py-1.5 sm:text-base xl:py-2.5 xl:text-lg">
              About Us
            </div>
            <h2 className="mx-auto mb-2.5 mt-5 max-w-[410px] text-center text-[35px] font-medium leading-[45px] text-[var(--dark-text-color)] sm:text-[28px] sm:leading-8 lg:mx-0 lg:text-left xl:text-[42px] xl:leading-[52px] 2xl:text-[42px] 2xl:leading-[60px]">
              Immerse Yourself in the Elegance of
              <span className="text-[var(--primary-color)]">
                Nivank's Custom-Made Indian Attire.
              </span>
            </h2>
            <p className="mb-[30px] text-center text-lg font-normal leading-[30px] text-[var(--dark-text-color)] sm:text-base sm:leading-6 lg:text-left xl:text-lg xl:leading-[30px]">
              Nivank is led by a qualified fashion designer with a passion for
              creating exquisite, custom-made traditional Indian clothing for
              women and girls. Our boutique brings your vision to life with
              premium fabrics, expert craftsmanship, and personalized designs
              tailored to your unique style and occasion.
            </p>
            <a
              href="/custom-design"
              className="mx-auto inline-flex h-[50px] items-center justify-start gap-3 rounded-full bg-[var(--primary-color)] p-[5px] pl-6 text-lg font-medium text-[var(--primary-button-text-color)] md:mx-0"
            >
              Transform Your Wardrobe
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF]">
                <i
                  className="fa-solid fa-arrow-up rotate-45 text-lg text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
              </span>
            </a>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="relative h-full overflow-hidden">
              <div
                className="relative flex h-full gap-2 transition-transform duration-500 ease-in-out"
                data-landingsite-carousel=""
              >
                <div
                  className="relative grid w-full flex-shrink-0 grid-cols-1 gap-10 sm:grid-cols-2"
                  data-landingsite-carousel-item=""
                >
                  <div className="relative">
                    <Image
                      src={Slide1}
                      alt="Traditional Wedding Lehenga Saree"
                      className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                    />
                    <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-[30px]">
                      <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-5 py-1 text-lg font-normal text-[var(--light-text-color)] sm:px-8 sm:py-2">
                        Exquisite Wedding Lehenga
                      </span>
                      <div className="absolute bottom-5 left-1/2 mx-auto w-[92%] -translate-x-1/2 rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                        <h6 className="mb-2 text-2xl font-semibold leading-6 text-[var(--light-text-color)]">
                          Custom Designs
                        </h6>
                        <p className="font-normal leading-[22px] text-[var(--light-text-color)] sm:text-sm sm:leading-5 xl:text-lg xl:leading-[30px]">
                          Tailored to your unique style and occasion.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col">
                    <div className="relative flex-grow">
                      <Image
                        src={Slide2}
                        alt="Sabyasachi-style Saree"
                        className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                      />
                      <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-4 xl:pt-[30px]">
                        <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-8 py-2 text-lg font-normal text-[var(--light-text-color)]">
                          Elegant Sarees
                        </span>
                        <div className="w-full rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                          <h6 className="mb-2 text-xl font-semibold leading-6 text-[var(--light-text-color)] xl:text-2xl">
                            Luxurious Saree Collection
                          </h6>
                          <p className="text-sm font-normal leading-5 text-[var(--light-text-color)] xl:text-lg xl:leading-[30px]">
                            Exquisite craftsmanship and timeless elegance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="my-6 flex flex-col justify-between gap-5 pr-[130px] xl:mt-5 xl:flex-row xl:items-center xl:gap-10">
                      <p className="text-base font-normal leading-5 text-[var(--dark-text-color)] xl:leading-[30px] 2xl:text-lg">
                        Express your individuality with our bespoke designs and
                        curated fabric selections.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="relative grid w-full flex-shrink-0 grid-cols-1 gap-10 sm:grid-cols-2"
                  data-landingsite-carousel-item=""
                >
                  <div className="relative">
                    <Image
                      src={Slide3}
                      alt=""
                      className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                    />
                    <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-[30px]">
                      <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-5 py-1 text-lg font-normal text-[var(--light-text-color)] sm:px-8 sm:py-2">
                        Chic Kurtis
                      </span>
                      <div className="absolute bottom-5 left-1/2 mx-auto w-[92%] -translate-x-1/2 rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                        <h6 className="mb-2 text-2xl font-semibold leading-6 text-[var(--light-text-color)]">
                          Sophisticated Office Wear
                        </h6>
                        <p className="font-normal leading-[22px] text-[var(--light-text-color)] sm:text-sm sm:leading-5 xl:text-lg xl:leading-[30px]">
                          Fusion styles for the modern professional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col">
                    <div className="relative flex-grow">
                      <Image
                        src={Slide4}
                        alt=""
                        className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                      />
                      <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-4 xl:pt-[30px]">
                        <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-8 py-2 text-lg font-normal text-[var(--light-text-color)]">
                          Casual Elegance
                        </span>
                        <div className="w-full rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                          <h6 className="mb-2 text-xl font-semibold leading-6 text-[var(--light-text-color)] xl:text-2xl">
                            Everyday Wear
                          </h6>
                          <p className="text-sm font-normal leading-5 text-[var(--light-text-color)] xl:text-lg xl:leading-[30px]">
                            Effortless style for any occasion.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="my-6 flex flex-col justify-between gap-5 pr-[130px] xl:mt-5 xl:flex-row xl:items-center xl:gap-10">
                      <p className="text-base font-normal leading-5 text-[var(--dark-text-color)] xl:leading-[30px] 2xl:text-lg">
                        Discover the epitome of luxury with our meticulously
                        crafted Sabyasachi-inspired sarees.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="relative grid w-full flex-shrink-0 grid-cols-1 gap-10 sm:grid-cols-2"
                  data-landingsite-carousel-item=""
                >
                  <div className="relative">
                    <Image
                      src={Slide5}
                      alt=""
                      className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                    />
                    <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-[30px]">
                      <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-5 py-1 text-lg font-normal text-[var(--light-text-color)] sm:px-8 sm:py-2">
                        Traditional Styles
                      </span>
                      <div className="absolute bottom-5 left-1/2 mx-auto w-[92%] -translate-x-1/2 rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                        <h6 className="mb-2 text-2xl font-semibold leading-6 text-[var(--light-text-color)]">
                          Timeless Craftsmanship
                        </h6>
                        <p className="font-normal leading-[22px] text-[var(--light-text-color)] sm:text-sm sm:leading-5 xl:text-lg xl:leading-[30px]">
                          Celebrating culture with every stitch.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col">
                    <div className="relative flex-grow">
                      <Image
                        src={Slide6}
                        alt=""
                        className="h-full w-full rounded-[20px] object-cover sm:rounded-[30px]"
                      />
                      <div className="absolute top-0 flex h-full w-full flex-col justify-between px-4 pb-4 pt-4 xl:pt-[30px]">
                        <span className="inline-block w-fit rounded-[60px] border border-[var(--light-border-color)] px-8 py-2 text-lg font-normal text-[var(--light-text-color)]">
                          Custom Experiences
                        </span>
                        <div className="w-full rounded-[20px] bg-[#999999] bg-opacity-30 p-4 backdrop-blur-[5px] 2xl:px-6 2xl:py-[29px]">
                          <h6 className="mb-2 text-xl font-semibold leading-6 text-[var(--light-text-color)] xl:text-2xl">
                            Personal Style Realized
                          </h6>
                          <p className="text-sm font-normal leading-5 text-[var(--light-text-color)] xl:text-lg xl:leading-[30px]">
                            Explore the luxury of bespoke fashion.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="my-6 flex flex-col justify-between gap-5 pr-[130px] xl:mt-5 xl:flex-row xl:items-center xl:gap-10">
                      <p className="text-base font-normal leading-5 text-[var(--dark-text-color)] xl:leading-[30px] 2xl:text-lg">
                        Experience how our clothing empowers your style and
                        grace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="absolute bottom-[18px] right-0 hidden items-center gap-5 sm:flex">
                <li className="">
                  <button
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--primary-color)] bg-[#FFFFFF] outline-none"
                    data-landingsite-carousel-controls-left=""
                  >
                    <i
                      className="fa-solid fa-arrow-left text-lg text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
                <li>
                  <button
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)] outline-none"
                    data-landingsite-carousel-controls-right=""
                  >
                    <i
                      className="fa-solid fa-arrow-right text-lg text-[var(--primary-button-text-color)]"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[194px] hidden sm:block">
        <Image src={Dots} alt="" />
      </div>
    </section>
  );
};

export default About;
