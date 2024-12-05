"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FormTestimonials({ title = "Testimonials", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || ""
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
                    placeholder={"Input title text here.."}
                    value={formData.title}
                    isError={errors?.title}
                    label={"Title"}
                    onChange={handleInputChange}
                />
                <Link href={"/cms/testimonials"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Testimonials
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

export function FormDatatableTestimonials({ title = "Testimonials", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        personName: initialData?.personName || "",
        personJob: initialData?.personJob || "",
        comment: initialData?.comment || "",
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
        const formDataInSchema = {
            personName: formData.personName,
            personJob: formData.personJob,
            comment: formData.comment
        }
        if (action)
            action(formDataInSchema, initialData._id)
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
                    id="personName"
                    placeholder={"Input name here.."}
                    value={formData.personName}
                    isError={errors?.personName}
                    label={"Name"}
                    onChange={handleInputChange}
                />
                <AppInputGroup
                    id="personJob"
                    placeholder={"Input job here.."}
                    value={formData.personJob}
                    isError={errors?.personJob}
                    label={"Job"}
                    onChange={handleInputChange}
                />

                <AppInputGroup
                    id="comment"
                    placeholder={"Input comment here.."}
                    value={formData.comment}
                    isError={errors?.comment}
                    label={"Comment"}
                    onChange={handleInputChange}
                    type={"textarea"}
                />
                <div className="text-end">
                    <Button type="submit">{initialData?._id ? "Update" : "Add"}</Button>
                </div>
            </form>
        </AppSection>
    )
}