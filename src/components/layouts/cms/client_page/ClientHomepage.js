"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import {
    updateHeroHomepage,
    updateServiceHomepage,
    updatePartnersHomepage,
    updateCertificateHomepage,
    updateTestimonialsHomepage,
    updateWhyUsHomepage
} from "@/lib/actions/HomepageActions"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormServices } from "@/components/layouts/cms/form/FormServices"
import { FormPartner } from "@/components/layouts/cms/form/FormPartner"
import { FormCertificate } from "@/components/layouts/cms/form/FormCertificate"
import { FormTestimonials } from "@/components/layouts/cms/form/FormTestimonial"
import { FormWhyUs } from "@/components/layouts/cms/form/FormWhyUs"

export default function ClientHomepage({ data }) {
    const [loading, setLoading] = useState(false)

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

                <FormWhyUs
                    initialData={data?.whyChooseUs}
                    action={async (data) => {
                        setLoading(true)
                        await updateWhyUsHomepage(data)
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