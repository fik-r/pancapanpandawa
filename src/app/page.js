
import { Hero1 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Services from "@/components/layouts/Services";
import Partners from "@/components/layouts/Partners";
import WhyUs from "@/components/layouts/WhyUs";
import Footer from "@/components/layouts/Footer";
import ComplianceCertification from "@/components/layouts/ComplianceCertification";
import Testimonials from "@/components/layouts/Testimonials";
import ContactForm from "@/components/layouts/ContactForm";
import { CarouselGallery } from "@/components/layouts/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Navbar */}
      <Navbar />
      <Hero1 />
      <Services />
      <Partners />
      <WhyUs />
      <ComplianceCertification />
      <CarouselGallery />
      <Testimonials />
      <div className="flex flex-col lg:flex-row py-[2.5rem] px-[1.5rem] lg:py-[6.25rem] lg:px-[3.75rem] lg:gap-x-[3rem]">
        <span className="lg:w-[50%] font-bold p-text-heading-sm lg:p-text-display-lg text-dune mb-[1.5rem] lg:mb-[3rem]">Get in touch with us</span>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
