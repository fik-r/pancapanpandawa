
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CareerDetailContent from "@/components/layouts/CareerDetailContent";
import HowToApply from "@/components/layouts/HowToApply";

export default function CareerDetail() {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"Career"} />
            <CareerDetailContent />
            <HowToApply/>
            <Footer />
        </div>
    );
}
