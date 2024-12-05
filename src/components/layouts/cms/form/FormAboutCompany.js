"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import { BASE_URL } from "@/lib/utils";
export default function FormAboutCompany({ initialData, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
        description: initialData?.description || "",
        imageUrl: initialData?.image ? BASE_URL + initialData?.image : "",
        imageFile: {},
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
            heading: formData.heading,
            description: formData.description,
            image: formData.imageFile,
            imageUrl: initialData?.image,
        }
        if (action)
            action(formDataInSchema)
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
        <AppSection title={"About Company"}>
            <form className="grid w-full items-center gap-4" onSubmit={handleSubmit}>
                <AppInputGroup
                    id="heading"
                    placeholder={"Input heading text here.."}
                    value={formData.heading}
                    isError={errors?.heading}
                    label={"Heading"}
                    onChange={handleInputChange}
                />

                <AppInputGroup
                    id="description"
                    placeholder={"Input description text here.."}
                    value={formData.description}
                    isError={errors?.description}
                    label={"Description"}
                    type={"textarea"}
                    onChange={handleInputChange}
                />

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
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </AppSection>
    )
}