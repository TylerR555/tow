"use client";

import { PHONE_NUMBER, PHONE_LINK } from "@/lib/constants";

export default function PhoneCTA() {
  return (
    <section className="bg-primary py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Need Emergency Roadside Assistance?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">
          Call us now for immediate help
        </p>
        <a
          href={PHONE_LINK}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] xl:text-[7rem] font-bold text-white block break-all sm:break-normal"
          aria-label={`Call ${PHONE_NUMBER}`}
        >
          {PHONE_NUMBER}
        </a>
      </div>
    </section>
  );
}
