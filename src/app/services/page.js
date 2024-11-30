
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import OurServices from "@/components/layouts/OurServices";
import { ServiceGallery } from "@/components/layouts/Gallery";
import { getServicepage } from "@/lib/actions/ServicepageActions";
import { getGallery } from "@/lib/actions/ServiceGalleryActions";
import { getServices } from "@/lib/actions/ServicesActions";
export const dynamic = 'force-dynamic'

export default async function Services() {
    const [
        servicepageData,
        galleryOfServiceData,
        servicesData
    ] = await Promise.all([
        getServicepage(),
        getGallery(),
        getServices()
    ]);
    const data = {
        ...servicepageData,
        gallery: {
            ...servicepageData?.gallery,
            items: galleryOfServiceData
        },
        services: {
            ...servicepageData?.services,
            items: servicesData
        }
    }

    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 data={data?.hero} />
            <OurServices data={data?.services} />
            <ServiceGallery data={data?.gallery} />
            <Footer />
        </div>
    );
}
