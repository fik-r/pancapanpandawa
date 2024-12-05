"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import { BASE_URL } from "@/lib/utils";
export default function FormAboutGallery({ initialData, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
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
            image: formData.imageFile,
            imageUrl: initialData?.image,
        }
        if (action)
            action(formDataInSchema)
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
        <AppSection title={"About Gallery"}>
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
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </AppSection>
    )
}