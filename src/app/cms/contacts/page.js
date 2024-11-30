import Layout from "@/components/layouts/cms/Layout";
import DatatableContact from "@/components/layouts/cms/table/DatatableContact";
import { getContacts } from "@/lib/actions/ContactActions";
export const dynamic = 'force-dynamic'

export default async function Contacts() {
    const contactsData = await getContacts();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableContact data={contactsData} />
            </div>
        </Layout>
    )
}