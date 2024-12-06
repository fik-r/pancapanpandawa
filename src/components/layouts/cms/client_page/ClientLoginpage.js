"use client"
import { useState } from "react"
import FormLogin from "@/components/layouts/cms/form/FormLogin"
import { login } from "@/lib/actions/AuthActions"
import Loading from "@/components/layouts/Loading"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation';

export default function Login() {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const router = useRouter();

    return (
        <div className="w-full h-screen flex justify-center items-center bg-primary lg:px-[25rem]">
            <FormLogin
                action={async (data) => {
                    setLoading(true)
                    const result = await login(data)
                    setLoading(false)
                    if (result.isValid) {
                        router.push('/cms'); // Redirect to the CMS dashboard
                    } else {
                        toast({
                            variant: result.isValid ? "primary" : "destructive",
                            description: result.isValid ? "Success" : "Login failed. Please check your username and password and try again.",
                        })
                    }
                }} />
            <Loading loading={loading} />
            <Toaster />
        </div>
    )
}
