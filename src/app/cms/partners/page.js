import { getPartners } from "@/lib/actions/PartnerActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatablePartner from "@/components/layouts/cms/table/DatatablePartner";
export const dynamic = 'force-dynamic'

export default async function Partner() {
    const partnerData = await getPartners();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatablePartner data={partnerData} />
            </div>
        </Layout>
    )
}