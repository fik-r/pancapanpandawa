import { getReasons } from "@/lib/actions/ReasonActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableWhyUs from "@/components/layouts/cms/table/DatatableWhyUs";
export const dynamic = 'force-dynamic'

export default async function WhyUs() {
    const whyUsData = await getReasons();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableWhyUs data={whyUsData} />
            </div>
        </Layout>
    )
}