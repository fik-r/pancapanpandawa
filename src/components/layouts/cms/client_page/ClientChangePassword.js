"use client"
import { useState } from "react"
import Layout from "@/components/layouts/cms/Layout"
import FormChangePassword from "@/components/layouts/cms/form/FormChangePassword"
import { changePassword } from "@/lib/actions/AuthActions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation';

export default function ClientChangePasswordpage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { toast } = useToast()
    return (
        <Layout loading={loading}>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <FormChangePassword
                    action={async (data) => {
                        setLoading(true)
                        const result = await changePassword(data)
                        setLoading(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Wrong password",
                        })
                        if (result) {
                            window.location.reload();
                        }
                    }} />
            </div>
        </Layout>
    )
}