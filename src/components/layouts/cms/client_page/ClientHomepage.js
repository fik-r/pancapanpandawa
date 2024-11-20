"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import {
    updateHeroHomepage,
    updateServiceHomepage,
    updatePartnersHomepage,
    updateCertificateHomepage,
    updateTestimonialsHomepage,
} from "@/lib/actions/HomepageActions"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormServices } from "@/components/layouts/cms/form/FormServices"
import { FormPartner } from "@/components/layouts/cms/form/FormPartner"
import { FormCertificate } from "@/components/layouts/cms/form/FormCertificate"
import { FormTestimonials } from "../form/FormTestimonial"

export default function ClientHomepage({ data }) {
    const [loading, setLoading] = useState(false)

    // const CardWhyChooseUs = () => {
    //     return (
    //         <AppSection title="Why choose use?">
    //             <form>
    //                 <div className="grid w-full items-center gap-4">
    //                     <div className="flex flex-col space-y-1.5">
    //                         <Label htmlFor="name">Title</Label>
    //                         <Input id="name" placeholder="Why choose us?" />
    //                     </div>
    //                     <div className="flex flex-col space-y-1.5">
    //                         <Label htmlFor="name">Image</Label>
    //                         <Input id="name" type="file" />
    //                     </div>
    //                     <div className="flex flex-col space-y-1.5">
    //                         <Label htmlFor="name">1. Text</Label>
    //                         <Input id="name" placeholder="Input your heading text here.." />
    //                     </div>
    //                 </div>
    //             </form>
    //         </AppSection>
    //     )
    // }

    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    showHighlight={"true"}
                    action={async (data) => {
                        setLoading(true)
                        await updateHeroHomepage(data)
                        setLoading(false)
                    }} />

                <FormServices
                    initialData={data?.services}
                    action={async (data) => {
                        setLoading(true)
                        await updateServiceHomepage(data)
                        setLoading(false)
                    }} />

                <FormPartner
                    initialData={data?.partners}
                    action={async (data) => {
                        setLoading(true)
                        await updatePartnersHomepage(data)
                        setLoading(false)
                    }} />

                <FormCertificate
                    initialData={data?.certificates}
                    action={async (data) => {
                        setLoading(true)
                        await updateCertificateHomepage(data)
                        setLoading(false)
                    }} />

                <FormTestimonials
                    initialData={data?.testimonials}
                    action={async (data) => {
                        setLoading(true)
                        await updateTestimonialsHomepage(data)
                        setLoading(false)
                    }}
                />
            </div>
        </Layout>
    )
}