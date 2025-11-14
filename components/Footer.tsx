import Image from "next/image";
import logoW from "@/src/logo w.png";

const PHONE_NUMBER = "077 9833 747";
const PHONE_LINK = "tel:+94779833747";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-8 sm:py-10 md:py-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-8 lg:mb-10 items-start">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start -mt-2">
              <Image
                src={logoW}
                alt="RoadCare 24 Logo"
                width={200}
                height={200}
                className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px]"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed -mb-2">
              Your trusted partner for emergency towing and roadside assistance
              across Sri Lanka.
            </p>
          </div>

          <div className="flex flex-col space-y-3 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Contact Us</h4>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center md:justify-start space-x-2 text-primary hover:text-primary-light transition-colors text-sm sm:text-base"
              aria-label={`Call ${PHONE_NUMBER}`}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold selectable-phone">{PHONE_NUMBER}</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm">
              Available 24/7, 365 days a year
            </p>
          </div>

          <div className="flex flex-col space-y-3 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Coverage</h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Island-wide service across all provinces of Sri Lanka
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
            <p className="text-sm sm:text-base text-gray-400">
              © {currentYear} RoadCare 24. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Technology Partner:{" "}
              <a
                href="https://syntelligenceit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light"
              >
                syntelligenceIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
