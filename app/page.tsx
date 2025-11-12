import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import GpsTracker from "@/components/GpsTracker";
import ImageGallery from "@/components/ImageGallery";
import Testimonials from "@/components/Testimonials";
import PartnerForm from "@/components/PartnerForm";
import PhoneCTA from "@/components/PhoneCTA";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <GpsTracker />
      <ImageGallery />
      <Testimonials />
      <PartnerForm />
      <PhoneCTA />
      <Footer />
      <FloatingCallButton />
      <BackToTop />
    </main>
  );
}
