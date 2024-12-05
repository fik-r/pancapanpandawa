import { getCareers } from "@/lib/actions/CareerActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableCareer from "@/components/layouts/cms/table/DatatableCareer";
export const dynamic = 'force-dynamic'

export default async function CoreValues() {
    const careersData = await getCareers();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableCareer data={careersData} />
            </div>
        </Layout>
    )
}