"use client"
import { useState } from "react"
import FormLogin from "@/components/layouts/cms/form/FormLogin"
import { login } from "@/lib/actions/AuthActions"
export const dynamic = 'force-dynamic'

export default function Login() {
    const [loading, setLoading] = useState(false)
    return (
        <div className="w-full h-screen flex justify-center items-center bg-primary px-[25rem]">
            <FormLogin
                action={async (data) => {
                    setLoading(true)
                    await login(data)
                    setLoading(false)
                }} />
        </div>
    )
}
