import { getTestimonials } from "@/lib/actions/TestimonialActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableTestimonial from "@/components/layouts/cms/table/DatatableTestimonial";
export const dynamic = 'force-dynamic'

export default async function Testimonials() {
    const testimonialsData = await getTestimonials();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableTestimonial data={testimonialsData} />
            </div>
        </Layout>
    )
}