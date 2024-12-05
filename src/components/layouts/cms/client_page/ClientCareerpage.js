"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormContentCareer, FormExplorePositionCareer } from "@/components/layouts/cms/form/FormCareer"
import { updateContentCareerpage, updateExploreCareerpage, updateHeroCareerpage } from "@/lib/actions/CareerpageActions"
import { useToast } from "@/hooks/use-toast"
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
                        const result = await updateHeroCareerpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormContentCareer
                    initialData={data?.content}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateContentCareerpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormExplorePositionCareer
                    initialData={data?.explorePositions}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateExploreCareerpage(data)
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