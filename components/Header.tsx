"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoB from "@/src/logo-b.png";

const PHONE_NUMBER = "077 9833 747";
const PHONE_LINK = "tel:+94779833747";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 lg:py-[6px]"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <Image
                src={logoB}
                alt="RoadCare 24 Logo"
                width={120}
                height={120}
                className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[110px] xl:h-[110px]"
              />
            </a>
          </div>

          {/* Navigation Links - Centered on Desktop */}
          <nav
            className="hidden lg:flex items-center space-x-6 flex-1 justify-center"
            aria-label="Section navigation"
          >
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#partner-form"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Partner With Us
            </a>
            <a
              href="#footer"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Right Side - Phone Button and Mobile Menu */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Desktop Phone Button */}
            <a
              href={PHONE_LINK}
              className="hidden lg:flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label={`Call ${PHONE_NUMBER}`}
            >
              <svg
                className="w-5 h-5"
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
              <span>{PHONE_NUMBER}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Phone Button */}
            <a
              href={PHONE_LINK}
              className="lg:hidden flex items-center space-x-1.5 sm:space-x-2 bg-primary text-white px-3 sm:px-4 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg text-xs sm:text-sm"
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
              <span className="hidden min-[375px]:inline">{PHONE_NUMBER}</span>
              <span className="min-[375px]:hidden">Call</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 mt-4 pt-4 pb-4">
            <nav
              className="flex flex-col space-y-3"
              aria-label="Mobile navigation"
            >
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Testimonials
              </a>
              <a
                href="#partner-form"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Partner With Us
              </a>
              <a
                href="#footer"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
