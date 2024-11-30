"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FormVisiMission({ title = "Visi & Mission", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        visi: initialData?.visi || ""
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
                    id="title"
                    placeholder={"Input your title text here.."}
                    value={formData.title}
                    isError={errors?.title}
                    label={"Title"}
                    onChange={handleInputChange}
                />
                <AppInputGroup
                    id="visi"
                    placeholder={"Input your visi text here.."}
                    value={formData.visi}
                    isError={errors?.visi}
                    label={"Visi"}
                    onChange={handleInputChange}
                />
                <Link href={"/cms/missions"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Missions
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </Link>
                <div className="text-end">
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </AppSection>
    )
}

export function FormDatatableVisiMission({ title = "Mission", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        text: initialData?.text || "",
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
            action(formData, initialData._id)
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
                    id="text"
                    placeholder={"Input your text text here.."}
                    value={formData.text}
                    isError={errors?.text}
                    label={"Text"}
                    onChange={handleInputChange}
                />

                <div className="text-end">
                    <Button type="submit">{initialData?._id ? "Update" : "Add"}</Button>
                </div>
            </form>
        </AppSection>
    )
}