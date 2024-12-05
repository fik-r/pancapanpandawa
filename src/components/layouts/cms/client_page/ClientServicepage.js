"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormServices } from "@/components/layouts/cms/form/FormServices"
import { FormServiceGallery } from "@/components/layouts/cms/form/FormServiceGallery"
import { useToast } from "@/hooks/use-toast"
import { updateHeroServicepage, updateGalleryServicepage, updateContentServicepage } from "@/lib/actions/ServicepageActions"
export default function ClientServicepage({ data }) {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateHeroServicepage(data)
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
                        const result = await updateContentServicepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormServiceGallery
                    initialData={data?.gallery}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateGalleryServicepage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
            </div>
        </Layout>
    )
}