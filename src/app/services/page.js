
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import OurServices from "@/components/layouts/OurServices";
import { ServiceGallery } from "@/components/layouts/Gallery";

export default function Services() {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"Our Services"} />
            <OurServices />
            <ServiceGallery />
            <Footer />
        </div>
    );
}
