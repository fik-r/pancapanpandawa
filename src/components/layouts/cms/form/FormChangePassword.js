"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function FormChangePassword({ title = "Change Password", action }) {
    const { toast } = useToast()
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        oldPassword: "",
        confirmPassword: "",
        newPassword: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        let newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            if (formData[key] === "") {
                newErrors[key] = true;
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (!isValid) return
        if (formData.newPassword != formData.confirmPassword) {
            toast({
                variant: "destructive",
                description: "Password not match",
            })

            return
        }
        if (action)
            action(formData)
    }

    function handleInputChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (value && value.trim() !== "") {
            setErrors({ ...errors, [id]: false });
        } else {
            setErrors({ ...errors, [id]: true });
        }
    }

    return (
        <AppSection title={title}>
            <form className="grid w-full items-center gap-4" onSubmit={handleSubmit}>
                <AppInputGroup
                    id="oldPassword"
                    placeholder={"Input new password here.."}
                    value={formData.oldPassword}
                    isError={errors?.oldPassword}
                    label={"Old Password"}
                    onChange={handleInputChange}
                    type={"password"}
                />
                <AppInputGroup
                    id="newPassword"
                    placeholder={"Input new password here.."}
                    value={formData.newPassword}
                    isError={errors?.newPassword}
                    label={"New Password"}
                    onChange={handleInputChange}
                    type={"password"}
                />
                <AppInputGroup
                    id="confirmPassword"
                    placeholder={"Input new password here.."}
                    value={formData.confirmPassword}
                    isError={errors?.confirmPassword}
                    label={"Confirm Password"}
                    onChange={handleInputChange}
                    type={"password"}
                />

                <div className="text-end">
                    <Button type="submit">Update</Button>
                </div>
            </form>
            <Toaster />
        </AppSection>
    )
}