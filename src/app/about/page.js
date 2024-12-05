
import { Hero2 } from "@/components/layouts/Hero"
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AboutCompany from "@/components/layouts/AboutCompany";
import CoreValues from "@/components/layouts/CoreValues";
import VisiMisi from "@/components/layouts/VisiMisi";
import { SingleGallery } from "@/components/layouts/Gallery";
import OurTeam from "@/components/layouts/OurTeam";
import { getAboutpage } from "@/lib/actions/AboutpageActions";
import { getMissions } from "@/lib/actions/MissionActions";
import { getCoreValues } from "@/lib/actions/CoreValuesActions";
import { BASE_URL } from "@/lib/utils";
import { getOurTeam } from "@/lib/actions/OurTeamActions";
import { getSocialMedia } from "@/lib/actions/SocialMediaActions";
export const dynamic = 'force-dynamic'

export default async function About() {
    const [
        aboutpageData,
        missionsData,
        coreValuesData,
        ourTeamData,
        socialMediaData,
    ] = await Promise.all([
        getAboutpage(),
        getMissions(),
        getCoreValues(),
        getOurTeam(),
        getSocialMedia()
    ]);
    const data = {
        ...aboutpageData,
        visiMission: {
            ...aboutpageData?.visiMission,
            items: missionsData
        },
        coreValues: {
            ...aboutpageData?.coreValues,
            items: coreValuesData
        },
        ourTeam: {
            ...aboutpageData?.ourTeam,
            items: ourTeamData
        },
    }

    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Hero2 data={data?.hero} />
            <AboutCompany data={data?.aboutCompany} />
            <CoreValues data={data?.coreValues} />
            <VisiMisi data={data?.visiMission} />
            <SingleGallery alt="gallery" url={BASE_URL + data?.gallery?.image} />
            <OurTeam data={data?.ourTeam} />
            <Footer data={socialMediaData} />
        </div>
    );
}
