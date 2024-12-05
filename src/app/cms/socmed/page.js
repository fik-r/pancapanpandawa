import { getSocialMedia } from "@/lib/actions/SocialMediaActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableSocialMedia from "@/components/layouts/cms/table/DatatableSocialMedia";
export const dynamic = 'force-dynamic'

export default async function Services() {
    const socmedData = await getSocialMedia();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableSocialMedia data={socmedData} />
            </div>
        </Layout>
    )
}