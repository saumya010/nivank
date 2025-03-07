import React from "react";
import Logo from "../assets/images/logo.webp";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="absolute left-0 top-0 z-50 w-full lg:top-8 code-section"
      id="smn8mhl"
    >
      <nav className="ml-auto py-14 pl-5 pr-5 sm:py-8 lg:py-6 lg:pl-[calc(41vw_-_385px)] lg:pr-2.5 xl:pl-[calc(41vw_-_480px)] xl:pr-8 2xl:pl-[calc(41vw_-_575px)] 2xl:pr-0">
        <div className="relative flex items-center lg:justify-between">
          <button
            id="mobile-menu-button"
            data-collapse-toggle="navigation-menu"
            type="button"
            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#101010] lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <i
              className="fa-solid fa-bars-sort text-xl text-white"
              aria-hidden="true"
            ></i>
          </button>
          <div className="flex flex-1 items-center justify-center lg:block lg:flex-none">
            <a href="/" className="inline-block">
              <Image
                src={Logo}
                alt="Nivank"
                className="h-24 w-auto object-contain dont-replace"
              />
            </a>
          </div>
          <div
            id="navigation-menu"
            className="absolute left-0 top-full z-50 mt-4 hidden w-full flex-1 bg-[#FFFFFF] pb-4 lg:static lg:mt-0 lg:flex lg:items-center lg:justify-between lg:bg-transparent lg:pb-0 lg:pr-6 xl:pr-12 2xl:pr-36"
          >
            <ul className="flex flex-1 flex-col lg:flex-row lg:items-center lg:justify-center xl:space-x-6">
              <li className="flex items-center border-t border-[var(--light-border-color)] px-2 py-4 lg:border-t-transparent lg:p-0">
                <a
                  href="/about"
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center border-t border-[var(--light-border-color)] px-2 py-4 lg:border-t-transparent lg:p-0">
                <div className="group relative w-full">
                  <button
                    className="flex w-full cursor-pointer items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm lg:justify-center"
                    type="button"
                  >
                    <span>Our Offerings</span>
                    <i
                      className="fa-solid fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <a
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/products"
                      >
                        Products
                      </a>
                      <a
                        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/services/custom-design"
                      >
                        Custom Design Services
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-t border-[var(--light-border-color)] px-2 py-4 lg:border-t-transparent lg:p-0">
                <a
                  href="/gallery"
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm"
                >
                  Gallery
                </a>
              </li>
              <li className="flex items-center border-t border-[var(--light-border-color)] px-2 py-4 lg:border-t-transparent lg:p-0">
                <div className="group relative w-full">
                  <button
                    className="flex w-full cursor-pointer items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm lg:justify-center"
                    type="button"
                  >
                    <span className="">Customer Insights</span>
                    <i
                      className="fa-solid fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <a
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/testimonials"
                      >
                        Client Testimonials
                      </a>
                      <a
                        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/faq"
                      >
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-t border-[var(--light-border-color)] px-2 py-4 lg:border-t-transparent lg:p-0">
                <a
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-col items-center space-y-4 lg:mt-0 lg:flex-row lg:space-x-4 lg:space-y-0">
              <a
                href="/request-quote"
                className="flex items-center justify-between gap-1 rounded-full bg-[#FFFFFF] py-[var(--button-padding-y)] pl-3.5 text-sm font-medium text-black xl:gap-6 xl:px-[var(--button-padding-x)] xl:text-lg"
              >
                <span>Request a Quote</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-color)]">
                  <i
                    className="fa-solid fa-arrow-up rotate-45 text-lg text-[var(--light-text-color)]"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
