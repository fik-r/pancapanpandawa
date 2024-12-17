
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CareerDetailContent from "@/components/layouts/CareerDetailContent";
import HowToApply from "@/components/layouts/HowToApply";
import { getCareerpage } from "@/lib/actions/CareerpageActions";
import { getCareer } from "@/lib/actions/CareerActions";
import { getSocialMedia } from "@/lib/actions/SocialMediaActions";
export const dynamic = 'force-dynamic'

export default async function CareerDetail({ params }) {
    const { id } = await params;
    const [
        careerpageData,
        careerData,
        socialMediaData
    ] = await Promise.all([
        getCareerpage(),
        getCareer(id),
        getSocialMedia()
    ])

    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"Career"} data={careerpageData?.hero} />
            <CareerDetailContent data={careerData} />
            <HowToApply />
            <Footer data={socialMediaData} />
        </div>
    );
}
