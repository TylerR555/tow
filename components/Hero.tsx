"use client";

import Image from "next/image";
import towHero from "@/src/tow hero.jpg";

const PHONE_NUMBER = "077 983 3747";
const PHONE_LINK = "tel:+94779833747";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white pt-24 sm:pt-28 md:pt-[9rem] pb-12 md:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Red vertical line on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-600 z-10 hidden sm:block"></div>

      <div className="w-full relative z-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              24/7 Emergency
              <br />
              <span className="text-amber-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
                Roadside Assistance
              </span>
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="text-center md:text-right flex items-center md:justify-end justify-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md">
              Fast, reliable towing and emergency services across Sri Lanka.
              We're here when you need us most.
            </p>
          </div>
        </div>

        {/* Middle Section - Phone Number */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <a
            href={PHONE_LINK}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] font-bold text-amber-500 hover:text-amber-600 transition-colors duration-200 block break-all sm:break-normal"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <span className="selectable-phone">{PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Bottom Section - Image */}
        <div className="relative w-full">
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-blue-300 overflow-hidden">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-gray-200">
              <Image
                src={towHero}
                alt="Professional towing service - truck being towed on flatbed trailer"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
