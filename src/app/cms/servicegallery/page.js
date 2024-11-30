import { getGallery } from "@/lib/actions/ServiceGalleryActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableServiceGallery from "@/components/layouts/cms/table/DatatableServiceGallery";
export const dynamic = 'force-dynamic'

export default async function Testimonials() {
    const servicesGalleryData = await getGallery();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableServiceGallery data={servicesGalleryData} />
            </div>
        </Layout>
    )
}