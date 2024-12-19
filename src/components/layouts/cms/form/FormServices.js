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

export function FormServices({ title = "Services", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || ""
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
                <AppInputGroup
                    id="description"
                    placeholder={"Input description text here.."}
                    value={formData.description}
                    isError={errors?.description}
                    label={"Description"}
                    onChange={handleInputChange}
                    type={"textarea"}
                />
                <Link href={"/cms/services"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Services
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

export function FormDatatableServices({ title = "Services", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        details: initialData?.details || [],
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

        // Validate details
        formData.details.forEach((detail, index) => {
            if (!detail.title || !detail.html) {
                newErrors[`details-${index}`] = true;
                isValid = false;
            }
        });

        setErrors(newErrors);
        if (!isValid) return

        const processedDetails = formData.details.map((detail) => ({
            ...detail,
            id: detail.id || uuidv4() // Use existing id if present, otherwise generate a new one
        }));

        const formDataInSchema = {
            title: formData.title,
            description: formData.description,
            image: formData.imageFile,
            imageUrl: initialData?.image,
            details: processedDetails
        }

        if (action)
            action(formDataInSchema, initialData.id)
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

    function addDetail() {
        setFormData({
            ...formData,
            details: [...formData.details, { title: "", html: "" }]
        });
    }

    function handleDetailChange(index, field, value) {
        const updatedDetails = [...formData.details];
        updatedDetails[index][field] = value;

        setFormData({ ...formData, details: updatedDetails });

        if (value.trim() !== "") {
            setErrors({ ...errors, [`details-${index}`]: false });
        } else {
            setErrors({ ...errors, [`details-${index}`]: true });
        }
    }

    function removeDetail(index) {
        const updatedDetails = formData.details.filter((_, i) => i !== index);
        setFormData({ ...formData, details: updatedDetails });
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
                <AppInputGroup
                    id="description"
                    placeholder={"Input description text here.."}
                    value={formData.description}
                    isError={errors?.description}
                    label={"Description"}
                    onChange={handleInputChange}
                    type={"textarea"}
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
                <Label>Detail</Label>
                {formData.details.map((detail, index) => (
                    <div key={index} className="flex flex-col gap-2 border p-2 rounded">
                        <AppInput
                            placeholder="Detail title"
                            value={detail.title}
                            onChange={(e) => handleDetailChange(index, "title", e.target.value)}
                        />
                        <AppWYSIWYG
                            value={detail.html}
                            onModelChange={(html) => handleDetailChange(index, "html", html)}
                        />
                        {errors[`details-${index}`] && <Label className="text-sm text-red-500 px-[0.25rem]">{"Detail title and content can't be empty!"}</Label>}
                        <Button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 mt-2"
                            onClick={() => removeDetail(index)}
                        >
                            Remove Detail
                        </Button>
                    </div>
                ))}
                <div className="text-start">
                    <Button type="button" className="bg-green-500 hover:bg-green-600" onClick={addDetail}>{"Add Detail"}</Button>
                </div>
                <div className="text-end">
                    <Button type="submit">{initialData?.id ? "Update" : "Add"}</Button>
                </div>
            </form>
        </AppSection>
    )
}