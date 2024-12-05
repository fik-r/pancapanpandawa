"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/lib/utils";

export function FormServiceGallery({ title = "Gallery of Services", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
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
                    id="heading"
                    placeholder={"Input heading text here.."}
                    value={formData.heading}
                    isError={errors?.heading}
                    label={"Heading"}
                    onChange={handleInputChange}
                />
                <Link href={"/cms/servicegallery"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Gallery of Services
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

export function FormDatatableServiceGallery({ title = "Gallery of Services", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        imageUrl: initialData?.image ? BASE_URL + initialData?.image : "",
        imageFile: {}
    })
    const [preview, setPreview] = useState(initialData?.image ? (BASE_URL + initialData?.image) : null);

    function handleSubmit(e) {
        e.preventDefault()
        let newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            if (key !== "imageUrl") {
                if (key === "imageFile") {
                    if (!formData.imageFile.name && formData.imageUrl == "") {
                        newErrors[key] = true;
                        isValid = false;
                    }
                } else if (formData[key] === "") {
                    newErrors[key] = true;
                    isValid = false;
                }
            }
        });

        setErrors(newErrors);
        if (!isValid) return
        const formDataInSchema = {
            image: formData.imageFile,
            imageUrl: initialData?.image
        }
        if (action)
            action(formDataInSchema, initialData._id)
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setFormData({ ...formData, imageFile: file })
        if (file) {
            setPreview(URL.createObjectURL(file));
            setErrors({ ...errors, imageFile: false });
        } else {
            setErrors({ ...errors, imageFile: true });
        }
    }

    return (
        <AppSection title={title}>
            <form className="grid w-full items-center gap-4" onSubmit={handleSubmit}>
                <AppInputGroup
                    id="image"
                    placeholder={"Input image text here.."}
                    isError={errors?.imageFile}
                    label={"Image"}
                    type={"image"}
                    preview={preview}
                    onChange={handleImageChange}
                />
                <div className="text-end">
                    <Button type="submit">{initialData?._id ? "Update" : "Add"}</Button>
                </div>
            </form>
        </AppSection>
    )
}