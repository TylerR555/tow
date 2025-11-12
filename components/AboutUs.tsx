"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".about-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll(".about-item");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white"
      aria-labelledby="about-us-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Side - Title, Subtitle, and Content */}
          <div className="about-item opacity-0 space-y-6">
            <div>
              <h2
                id="about-us-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 !leading-[1.1]"
              >
                Your Trusted Partner for Emergency Roadside Assistance Across
                Sri Lanka
              </h2>
            </div>

            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                RoadCare 24 is Sri Lanka's premier emergency towing and roadside
                assistance service provider. We understand that vehicle
                breakdowns can happen at any time, anywhere, and we're committed
                to being there when you need us most.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                With years of experience serving drivers across the island,
                we've built a reputation for reliability, professionalism, and
                exceptional customer service. Our team of licensed drivers and
                trained professionals is available 24/7, 365 days a year.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you need emergency towing, a jump start, tyre change, or
                fuel delivery, RoadCare 24 is just a phone call away. We're here
                to get you back on the road safely and quickly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Available Service
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  30min
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Average Response
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  Island
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Wide Coverage
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Licensed Drivers
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual/Image */}
          <div className="about-item opacity-0 flex">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80"
                alt="RoadCare 24 team assisting with roadside support"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/80">
                  Always On Call
                </p>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Professional roadside support when it matters most
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
