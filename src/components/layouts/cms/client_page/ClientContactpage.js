"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import FormHero from "@/components/layouts/cms/form/FormHero"
import { FormContact } from "@/components/layouts/cms/form/FormContact"
import { updateHeroContactpage, updateContactContactpage } from "@/lib/actions/ContactpageActions"
import { useToast } from "@/hooks/use-toast"
export default function ClientContactpage({ data }) {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormHero
                    initialData={data?.hero}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateHeroContactpage(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                    }} />
                <FormContact
                    initialData={data?.contact}
                    action={async (data) => {
                        setLoading(true)
                        const result = await updateContactContactpage(data)
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