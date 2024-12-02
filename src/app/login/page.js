"use client"
import { useState } from "react"
import FormLogin from "@/components/layouts/cms/form/FormLogin"
import { login } from "@/lib/actions/AuthActions"
import Loading from "@/components/layouts/Loading"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { redirect } from "next/navigation"
export const dynamic = 'force-dynamic'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    return (
        <div className="w-full h-screen flex justify-center items-center bg-primary lg:px-[25rem]">
            <FormLogin
                action={async (data) => {
                    setLoading(true)
                    const result = await login(data)
                    setLoading(false)
                    if (result) {
                        redirect("/cms")
                    } else {
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Login failed. Please check your username and password and try again.",
                        })
                    }
                }} />
            <Loading loading={loading} />
            <Toaster />
        </div>
    )
}
