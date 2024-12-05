"use client";
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection";
import { Button } from "@/components/ui/button";
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import { BASE_URL } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FormWhyUs({ title = "Why Us", initialData, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
        imageUrl: initialData?.image ? BASE_URL + initialData?.image : "",
        imageFile: {},
    });

    const [preview, setPreview] = useState(
        initialData?.image ? BASE_URL + initialData?.image : null
    );

    function handleInputChange(e) {
        const { id, value } = e.target;

        setFormData({ ...formData, [id]: value });

        if (value.trim() !== "") {
            setErrors((prev) => ({ ...prev, [id]: false }));
        } else {
            setErrors((prev) => ({ ...prev, [id]: true }));
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, imageFile: file }));
            setPreview(URL.createObjectURL(file));
            setErrors((prev) => ({ ...prev, imageFile: false }));
        } else {
            setErrors((prev) => ({ ...prev, imageFile: true }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

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
        if (!isValid) return;

        const formDataInSchema = {
            heading: formData.heading,
            image: formData.imageFile,
        };

        if (action) action(formDataInSchema);
    }

    return (
        <AppSection title={title}>
            <form className="grid w-full items-center gap-4" onSubmit={handleSubmit}>
                <AppInputGroup
                    id="heading"
                    placeholder="Input heading text here..."
                    value={formData.heading}
                    isError={errors.heading}
                    label="Heading"
                    onChange={handleInputChange}
                />
                <AppInputGroup
                    id="image"
                    placeholder="Upload your image..."
                    isError={errors.imageFile}
                    label="Image"
                    type="file"
                    preview={preview}
                    onChange={handleImageChange}
                />
                <Link href={"/cms/whyus"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Reasons
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </Link>
                <div className="text-end">
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </AppSection>
    );
}

export function FormDatatableWhyUs({ title = "Why Us", initialData = {}, action }) {
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
                    placeholder={"Input text text here.."}
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