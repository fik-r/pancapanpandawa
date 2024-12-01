"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormServices } from "@/components/layouts/cms/form/FormServices"
import { FormServiceGallery } from "@/components/layouts/cms/form/FormServiceGallery"
import { updateHeroServicepage, updateGalleryServicepage, updateContentServicepage } from "@/lib/actions/ServicepageActions"
export default function ClientServicepage({ data }) {
    const [loading, setLoading] = useState(false)

    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    action={async (data) => {
                        setLoading(true)
                        await updateHeroServicepage(data)
                        setLoading(false)
                    }} />
                <FormServices
                    initialData={data?.services}
                    action={async (data) => {
                        setLoading(true)
                        await updateContentServicepage(data)
                        setLoading(false)
                    }} />
                <FormServiceGallery
                    initialData={data?.gallery}
                    action={async (data) => {
                        setLoading(true)
                        await updateGalleryServicepage(data)
                        setLoading(false)
                    }} />
            </div>
        </Layout>
    )
}