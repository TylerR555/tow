"use client";

const PHONE_NUMBER = "077 983 3747";
const PHONE_LINK = "tel:+94779833747";

const features = [
  "Real-time location monitoring across Sri Lanka",
  "Instant alerts for speed, geofence breaches, and unauthorized movement",
  "Detailed trip history and driver behaviour insights",
  "Compact hardware with quick, professional installation",
];

export default function GpsTracker() {
  return (
    <section
      id="gps-tracker"
      className="bg-blue-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[6rem] text-white"
      aria-labelledby="gps-tracker-heading"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/70 border border-blue-500 text-xs sm:text-sm uppercase tracking-[0.2em]">
            Fleet & Personal Vehicle Protection
          </p>
          <h2
            id="gps-tracker-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Stay Connected With Our Smart GPS Tracking Device
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-xl">
            Track every vehicle in your fleet or family in real time. Our GPS
            device delivers instant insights, reliable coverage, and effortless
            control through a secure mobile dashboard.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm"
              >
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-400"></span>
                <span className="text-sm sm:text-base text-blue-100">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
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
        <div className="relative">
          <div className="relative rounded-3xl border border-blue-200/40 bg-blue-950/30 p-6 sm:p-8 md:p-10">
            <div className="absolute inset-6 -z-10 rounded-3xl bg-amber-400/20 blur-2xl opacity-80"></div>
            <div className="relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 p-6 text-blue-100">
              <div>
                <p className="inline-flex rounded-full bg-amber-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                  Smart GPS Device
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Precision Tracking Hardware
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/90">
                  Built-in 4G connectivity, backup battery, and tamper alert
                  sensors keep your vehicles protected even when the ignition is
                  off.
                </p>
              </div>
              <div className="grid gap-3 text-sm">
                <p className="flex items-center justify-between rounded-xl bg-blue-900/60 px-4 py-3">
                  <span className="font-semibold text-white">
                    Live Tracking Dashboard
                  </span>
                  <span className="text-amber-300">24/7 Access</span>
                </p>
                <p className="rounded-xl bg-blue-900/60 px-4 py-3 text-blue-100/90">
                  Monthly plans start from{" "}
                  <span className="font-semibold text-white">Rs. 3,500</span>{" "}
                  including device, installation, and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
