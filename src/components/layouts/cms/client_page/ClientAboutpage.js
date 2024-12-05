"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import {
    updateAboutCompanyAboutpage,
    updateHeroAboutpage,
    updateCoreValuesAboutpage,
    updateVisiMissionAboutpage,
    updateAboutGalleryAboutpage,
    updateOurTeamAboutpage
} from "@/lib/actions/AboutpageActions"
import FormHero from "@/components/layouts/cms/form/FormHero"
import FormAboutCompany from "@/components/layouts/cms/form/FormAboutCompany"
import { FormCoreValues } from "@/components/layouts/cms/form/FormCoreValues"
import { FormVisiMission } from "@/components/layouts/cms/form/FormVisiMission"
import FormAboutGallery from "@/components/layouts/cms/form/FormAboutGallery"
import { FormOurTeam } from "@/components/layouts/cms/form/FormOurTeam"
import { useToast } from "@/hooks/use-toast"


export default function ClientAboutpage({ data }) {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateHeroAboutpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormAboutCompany
                    initialData={data?.aboutCompany}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateAboutCompanyAboutpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }}
                />
                <FormCoreValues
                    initialData={data?.coreValues}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateCoreValuesAboutpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }}
                />
                <FormVisiMission
                    initialData={data?.visiMission}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateVisiMissionAboutpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }}
                />
                <FormAboutGallery
                    initialData={data?.gallery}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateAboutGalleryAboutpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }}
                />
                <FormOurTeam
                    initialData={data?.ourTeam}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateOurTeamAboutpage(data)
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