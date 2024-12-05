import Layout from "@/components/layouts/cms/Layout";
import DatatableContactForm from "@/components/layouts/cms/table/DatatableContactForm";
import { getContactForms } from "@/lib/actions/ContactFormActions";
export const dynamic = 'force-dynamic'

export default async function Contacts() {
    const contactsData = await getContactForms();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableContactForm data={contactsData} />
            </div>
        </Layout>
    )
}