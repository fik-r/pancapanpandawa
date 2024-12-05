
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
import { getHomepage } from "@/lib/actions/HomepageActions";
import { getPartners } from "@/lib/actions/PartnerActions";
import { getServices } from "@/lib/actions/ServicesActions";
import { getCertificates } from "@/lib/actions/CertificateActions";
import { getTestimonials } from "@/lib/actions/TestimonialActions";
import { getReasons } from "@/lib/actions/ReasonActions";
import { getGallery } from "@/lib/actions/ServiceGalleryActions";
import { getSocialMedia } from "@/lib/actions/SocialMediaActions";
export const dynamic = 'force-dynamic'

export default async function Home() {
  const [
    homepageData,
    partnersData,
    servicesData,
    certificateData,
    testimonialsData,
    reasonsData,
    galleryData,
    socialMediaData,
  ] = await Promise.all([
    getHomepage(),
    getPartners(),
    getServices(),
    getCertificates(),
    getTestimonials(),
    getReasons(),
    getGallery(),
    getSocialMedia()
  ]);
  const data = {
    ...homepageData,
    partners: {
      ...homepageData?.partners,
      items: partnersData
    },
    services: {
      ...homepageData?.services,
      items: servicesData
    },
    certifcates: {
      ...homepageData?.certificates,
      items: certificateData
    },
    testimonials: {
      ...homepageData?.testimonials,
      items: testimonialsData
    },
    whyChooseUs: {
      ...homepageData?.whyChooseUs,
      items: reasonsData
    }
  }

  return (
    <div className="flex flex-col relative">
      {/* Navbar */}
      <Navbar />
      <Hero1 data={data?.hero} />
      <Services data={data?.services} />
      <Partners data={data?.partners} />
      <WhyUs data={data?.whyChooseUs} />
      <ComplianceCertification data={data?.certifcates} />
      <CarouselGallery data={galleryData} />
      <Testimonials data={data?.testimonials} />
      <div className="flex flex-col lg:flex-row py-[2.5rem] px-[1.5rem] lg:py-[6.25rem] lg:px-[3.75rem] lg:gap-x-[3rem]">
        <span className="lg:w-[50%] font-bold p-text-heading-sm lg:p-text-display-lg text-dune mb-[1.5rem] lg:mb-[3rem]">Get in touch with us</span>
        <ContactForm />
      </div>
      <Footer data={socialMediaData} />
    </div>
  );
}
