"use client";

import Image from "next/image";
import gpsTrackerImage from "@/src/tow hero.jpg";

const PHONE_NUMBER = "077 983 3747";
const PHONE_LINK = "tel:+94779833747";

const features = [
  "Real-time location monitoring across Sri Lanka",
  "Instant alerts for speed, geofence breaches, and unauthorized movement",
  "Detailed trip history and driver behaviour insights",
  "Compact hardware with quick, professional installation",
];

export default function GpsTracker() {
  const midIndex = Math.ceil(features.length / 2);
  const featureColumns = [features.slice(0, midIndex), features.slice(midIndex)];

  const CheckIcon = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      className="mt-1 h-4 w-4 flex-shrink-0 text-amber-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );

  return (
    <section
      id="gps-tracker"
      className="bg-[#131313] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[6rem] text-white"
      aria-labelledby="gps-tracker-heading"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center lg:items-stretch">
        <div className="order-1 space-y-6 lg:order-2">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/70 border border-blue-500 text-xs sm:text-sm uppercase tracking-[0.2em]">
            Fleet & Personal Vehicle Protection
          </p>
          <h2
            id="gps-tracker-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Stay Connected With Our Smart GPS Tracking Device
          </h2>
          <div className="space-y-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-xl">
            <p>
              Track every vehicle in your fleet or family in real time. Our GPS
              device delivers instant insights, reliable coverage, and effortless
              control through a secure mobile dashboard.
            </p>
            <p>
              Built-in 4G connectivity, backup battery, and tamper alert sensors
              keep your vehicles protected even when the ignition is off.
            </p>
            <div className="rounded-2xl border border-amber-400/60 bg-amber-400/10 px-5 py-4 text-sm sm:text-base text-amber-100 shadow-lg shadow-amber-500/10">
              <p className="font-semibold text-amber-200">
                Monthly plans start from{" "}
                <span className="text-white">Rs. 3,500</span>
              </p>
              <p className="mt-1 text-amber-100/90">
                Includes device, professional installation, and ongoing support.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 sm:gap-6">
            {featureColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-3 sm:space-y-4">
                {column.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 px-1 py-1 text-sm sm:text-base text-blue-100"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={PHONE_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-base sm:text-lg font-semibold text-blue-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              aria-label={`Call ${PHONE_NUMBER} to order the GPS tracker`}
            >
              Call {PHONE_NUMBER}
            </a>
            <a
              href="#partner-form"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-base sm:text-lg font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Demo
            </a>
          </div>
        </div>
        <div className="relative order-2 lg:order-1 h-full w-full">
          <div className="relative h-[260px] sm:h-[320px] lg:h-full lg:min-h-[520px] overflow-hidden rounded-3xl border border-white/20 bg-white/10">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative h-full w-full">
              <Image
                src={gpsTrackerImage}
                alt="Driver monitoring GPS tracking dashboard on a tablet inside a vehicle"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
