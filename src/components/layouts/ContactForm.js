"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Toaster } from "../ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { createContactForm } from "@/lib/actions/ContactFormActions"
import { useState } from "react"
import Loading from "./Loading"
const ContactForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        companyEmail: "",
        phoneNumber: "",
        message: "",
    })

    function handleInputChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    async function handleSubmit() {
        let newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            if (key !== "phoneNumber") {
                if (formData[key] === "") {
                    newErrors[key] = true;
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            toast({
                variant: "destructive",
                description: "Fill required form!",
            })
            return;
        }

        setLoading(true)
        const result = await createContactForm(formData)
        setLoading(false)
        toast({
            variant: result ? "primary" : "destructive",
            description: result ? "Success" : "Error",
        })
    }

    return (
        <div className="flex-grow flex flex-col gap-y-[1rem] lg:gap-y-[2rem]">
            <Input id={"name"} value={formData.name} type="text"
                placeholder="Input name here"
                className="p-text-body-md rounded-lg"
                onChange={handleInputChange}
            />
            <Input id={"companyEmail"} value={formData.companyEmail}
                type="email"
                placeholder="Input company email here"
                className="p-text-body-md rounded-lg"
                onChange={handleInputChange} />
            <Input
                id={"phoneNumber"}
                type="number"
                value={formData.phoneNumber}
                placeholder="Input phone number here"
                className="p-text-body-md rounded-lg"
                onChange={handleInputChange}
            />
            <Textarea
                id={"message"}
                type="text"
                value={formData.message}
                placeholder="Input message here"
                className="p-text-body-md rounded-lg"
                onChange={handleInputChange}
            />
            <span className="p-text-body-sm lg:p-text-body-md text-[#343434]">
                By completing this form, you agree that the information provided may be stored and handled in accordance with our <u className="cursor-pointer">Privacy Policy</u>.
            </span>
            <Button className="w-[9.125rem] lg:w-[13.75rem] h-[3.188rem] lg:h-[4.188rem] p-text-body-md font-semibold rounded-xl lg:rounded-lg" onClick={handleSubmit}>Send Inquiry</Button>
            <Toaster />
            <Loading loading={loading} />
        </div>
    )
}

export default ContactForm;