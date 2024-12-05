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
import { useToast } from "@/hooks/use-toast"
export default function ClientHomepage({ data }) {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    showHighlight={"true"}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateHeroHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />

                <FormServices
                    initialData={data?.services}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateServiceHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />

                <FormPartner
                    initialData={data?.partners}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updatePartnersHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />

                <FormWhyUs
                    initialData={data?.whyChooseUs}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateWhyUsHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormCertificate
                    initialData={data?.certificates}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateCertificateHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />

                <FormTestimonials
                    initialData={data?.testimonials}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateTestimonialsHomepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }}
                />
            </div>
        </Layout>
    )
}