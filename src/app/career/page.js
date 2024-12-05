
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LandingCareer from "@/components/LandingCareer";
import { getCareerpage } from "@/lib/actions/CareerpageActions";
import { getCareers } from "@/lib/actions/CareerActions";
import { getSocialMedia } from "@/lib/actions/SocialMediaActions";
export const dynamic = 'force-dynamic'

export default async function Career() {
    const [
        careerpageData,
        careersData,
        socialMediaData,
    ] = await Promise.all([
        getCareerpage(),
        getCareers(),
        getSocialMedia()
    ])
    const data = {
        ...careerpageData,
        items: careersData
    }
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 title={"Career"} data={data?.hero} />
            <LandingCareer data={{
                explorePositions: {
                    ...data?.explorePositions
                },
                content: {
                    ...data?.content
                },
                items: data?.items
            }} />
            <Footer data={socialMediaData} />
        </div>
    );
}
