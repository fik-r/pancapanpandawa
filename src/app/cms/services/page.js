import { getServices } from "@/lib/actions/ServicesActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableServices from "@/components/layouts/cms/table/DatatableServices";
export const dynamic = 'force-dynamic'

export default async function Services() {
    const servicesData = await getServices();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableServices data={servicesData} />
            </div>
        </Layout>
    )
}