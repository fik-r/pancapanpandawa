
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AboutCompany from "@/components/layouts/AboutCompany";
import CoreValues from "@/components/layouts/CoreValues";
import VisiMisi from "@/components/layouts/VisiMisi";
import { SingleGallery } from "@/components/layouts/Gallery";
import OurTeam from "@/components/layouts/OurTeam";

export default function About() {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"About Us"}/>
            <AboutCompany />
            <CoreValues />
            <VisiMisi />
            <SingleGallery alt="gallery" />
            <OurTeam />
            <Footer />
        </div>
    );
}
