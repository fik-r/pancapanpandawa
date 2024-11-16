import ContactDetail from "@/components/layouts/ContactDetail";
import { Hero2 } from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ContactForm from "@/components/layouts/ContactForm";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero2 title={"Contact"} />
            <div className="flex flex-col lg:grid lg:grid-cols-2 px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] lg:gap-x-[3rem] lg:mb-[10.625rem]">
                <ContactDetail />
                <ContactForm/>
            </div>
            <Footer />
        </div>
    )
}