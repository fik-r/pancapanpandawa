
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LandingCareer from "@/components/LandingCareer";

export default function Career() {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"Career"} />
            <LandingCareer />
            <Footer />
        </div>
    );
}
