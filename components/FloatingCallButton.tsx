"use client";

const PHONE_NUMBER = "077 9833 747";
const PHONE_LINK = "tel:+94779833747";

export default function FloatingCallButton() {
  return (
    <>
      {/* Mobile - Bottom Right */}
      <a
        href={PHONE_LINK}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 md:hidden bg-primary hover:bg-primary-dark text-white rounded-full p-4 sm:p-5 shadow-2xl hover:shadow-primary/50 transform hover:scale-110 transition-all duration-300 animate-heartbeat touch-manipulation"
        aria-label={`Call ${PHONE_NUMBER} now`}
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* Desktop - Bottom Left */}
      <a
        href={PHONE_LINK}
        className="hidden md:flex fixed bottom-6 left-6 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-5 shadow-2xl hover:shadow-primary/50 transform hover:scale-110 transition-all duration-300 animate-heartbeat items-center justify-center"
        aria-label={`Call ${PHONE_NUMBER} now`}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </>
  );
}
