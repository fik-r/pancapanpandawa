import { getCoreValues } from "@/lib/actions/CoreValuesActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableCoreValues from "@/components/layouts/cms/table/DatatableCoreValues";
export const dynamic = 'force-dynamic'

export default async function CoreValues() {
    const coreValuesData = await getCoreValues();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableCoreValues data={coreValuesData} />
            </div>
        </Layout>
    )
}