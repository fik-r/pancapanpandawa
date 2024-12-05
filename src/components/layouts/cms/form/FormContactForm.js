"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import AppInput from "@/components/layouts/cms/AppInput";
import AppWYSIWYG from "@/components/layouts/cms/AppWYSIWYG";
import { v4 as uuidv4 } from 'uuid';

export function FormContactForm({ title = "Contact Form", initialData = {}, action }) {
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        companyEmail: initialData?.companyEmail || "",
        phoneNumber: initialData?.phoneNumber || "",
        message: initialData?.message || "",
    })

    return (
        <AppSection title={title}>
            <form className="grid w-full items-center gap-4">
                <AppInputGroup
                    id="name"
                    placeholder={"Input name text here.."}
                    value={formData.name}
                    label={"Name"}
                    disabled={true}
                />
                <AppInputGroup
                    id="companyEmail"
                    placeholder={"Input companyEmail text here.."}
                    value={formData.companyEmail}
                    label={"Company Email"}
                    disabled={true}
                />
                <AppInputGroup
                    id="phoneNumber"
                    placeholder={"Input phone number text here.."}
                    value={formData.phoneNumber}
                    label={"Phone Number"}
                    disabled={true}
                />

                <AppInputGroup
                    id="message"
                    placeholder={"Input message text here.."}
                    value={formData.message}
                    label={"Message"}
                    type={"textarea"}
                    disabled={true}
                />
            </form>
        </AppSection>
    )
}