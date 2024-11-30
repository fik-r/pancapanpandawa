import { getOurTeam } from "@/lib/actions/OurTeamActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableOurTeam from "@/components/layouts/cms/table/DatatableOurTeam";
export const dynamic = 'force-dynamic'

export default async function WhyUs() {
    const ourTeamsData = await getOurTeam();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableOurTeam data={ourTeamsData} />
            </div>
        </Layout>
    )
}