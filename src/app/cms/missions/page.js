import Layout from "@/components/layouts/cms/Layout";
import DatatableVisiMission from "@/components/layouts/cms/table/DatatableMission";
import { getMissions } from "@/lib/actions/MissionActions";
export const dynamic = 'force-dynamic'

export default async function WhyUs() {
    const missionData = await getMissions();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableVisiMission data={missionData} />
            </div>
        </Layout>
    )
}