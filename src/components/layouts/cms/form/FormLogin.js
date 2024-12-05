"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";

export default function FormLogin({ title = "Login", action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: "",
        password: ""
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
                    id="username"
                    placeholder={"Input username here.."}
                    value={formData.username}
                    isError={errors?.username}
                    label={"Username"}
                    onChange={handleInputChange}
                />
                <AppInputGroup
                    id="password"
                    placeholder={"Input password here.."}
                    value={formData.password}
                    isError={errors?.password}
                    label={"Password"}
                    type={"password"}
                    onChange={handleInputChange}
                />
                <div className="text-end">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </AppSection>
    )
}