"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BASE_URL } from "@/lib/utils";

export function FormContentCareer({ title = "Content Career", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
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
            title: formData.title,
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

export function FormExplorePositionCareer({ title = "Explore Position", initialData = {}, action }) {
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
                />

                <Link href={"/cms/careers"}>
                    <Button className="rounded-md p-text-body-sm font-semibold">
                        Go to Careers
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

export function FormDatatableCareer({ title = "Career", initialData = {}, action }) {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        contractType: initialData?.contractType || "",
        areaRegion: initialData?.areaRegion || "",
        yearsOfExp: initialData?.yearsOfExp || "",
        jobDesc: initialData?.jobDesc || "",
        jobQualification: initialData?.jobQualification || "",
        perks: initialData?.perks || "",

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

    function handleInputWYSIWYGChange(field, value) {
        setFormData({ ...formData, [field]: value });

        if (value.trim() !== "") {
            setErrors({ ...errors, [field]: false });
        } else {
            setErrors({ ...errors, [field]: false });
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
                    id="contractType"
                    placeholder={"Input contract type here.."}
                    value={formData.contractType}
                    isError={errors?.contractType}
                    label={"Contract Type"}
                    onChange={handleInputChange}
                />

                <AppInputGroup
                    id="areaRegion"
                    placeholder={"Input area region here.."}
                    value={formData.areaRegion}
                    isError={errors?.areaRegion}
                    label={"Area Region"}
                    onChange={handleInputChange}
                />

                <AppInputGroup
                    id="yearsOfExp"
                    placeholder={"Input years of expierence here.."}
                    value={formData.yearsOfExp}
                    isError={errors?.yearsOfExp}
                    label={"Years of Experience"}
                    onChange={handleInputChange}
                />

                <AppInputGroup
                    id="jobDesc"
                    placeholder={"Input job description here.."}
                    value={formData.jobDesc}
                    isError={errors?.jobDesc}
                    label={"Job Description"}
                    onChange={(html) => handleInputWYSIWYGChange("jobDesc", html)}
                    type={"wysiwyg"}
                />

                <AppInputGroup
                    id="jobQualification"
                    placeholder={"Input job qualification here.."}
                    value={formData.jobQualification}
                    isError={errors?.jobQualification}
                    label={"Job Qualification"}
                    onChange={(html) => handleInputWYSIWYGChange("jobQualification", html)}
                    type={"wysiwyg"}
                />

                <AppInputGroup
                    id="perks"
                    placeholder={"Input perks & benefit here.."}
                    value={formData.perks}
                    isError={errors?.perks}
                    label={"Perks & Benefit"}
                    onChange={(html) => handleInputWYSIWYGChange("perks", html)}
                    type={"wysiwyg"}
                />

                <div className="text-end">
                    <Button type="submit">{initialData?._id ? "Update" : "Add"}</Button>
                </div>
            </form>
        </AppSection>
    )
}