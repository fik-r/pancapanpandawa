import ContactDetail from "@/components/layouts/ContactDetail";
import { Hero2 } from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ContactForm from "@/components/layouts/ContactForm";
import { getContact } from "@/lib/actions/ContactpageActions";
import { getContacts } from "@/lib/actions/ContactActions";
export const dynamic = 'force-dynamic'
export default async function Contact() {
    const [
        contactpageData,
        contactsData
    ] = await Promise.all([
        getContact(),
        getContacts()
    ])
    const data = {
        ...contactpageData,
        contact: {
            ...contactpageData.contact,
            items: contactsData
        }
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero2 data={data?.hero} />
            <div className="flex flex-col lg:grid lg:grid-cols-2 px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] lg:gap-x-[3rem] lg:mb-[10.625rem]">
                <ContactDetail data={data?.contact} />
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}