"use client"
import { useState } from "react";
import AppSection from "@/components/layouts/cms/AppSection"
import { Button } from "@/components/ui/button"
import AppInputGroup from "@/components/layouts/cms/AppInputGroup";
import AppInput from "@/components/layouts/cms/AppInput";
import { BASE_URL } from "@/lib/utils";
export default function FormHero({ initialData, showHighlight, action }) {
    const highlightFormData = () => {
        if (showHighlight) {
            return {
                highlight1_label: initialData?.highlight_1?.label || "",
                highlight1_value: initialData?.highlight_1?.value || "",
                highlight2_label: initialData?.highlight_2?.label || "",
                highlight2_value: initialData?.highlight_2?.value || "",
                highlight3_label: initialData?.highlight_3?.label || "",
                highlight3_value: initialData?.highlight_3?.value || "",
            }
        } else {
            return {}
        }
    }

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
        imageUrl: BASE_URL + initialData?.image || "",
        imageFile: {},
        ...highlightFormData()
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
        const highlightFormDataInSchema = () => {
            if (showHighlight) {
                return {
                    highlight_1: {
                        label: formData.highlight1_label,
                        value: formData.highlight1_value,
                    },
                    highlight_2: {
                        label: formData.highlight2_label,
                        value: formData.highlight2_value,
                    },
                    highlight_3: {
                        label: formData.highlight3_label,
                        value: formData.highlight3_value,
                    },
                }
            } else { }
        }
        const formDataInSchema = {
            heading: formData.heading,
            image: formData.imageFile,
            imageUrl: initialData?.image,
            ...highlightFormDataInSchema()
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
        <AppSection title={"Hero"}>
            <form className="grid w-full items-center gap-4" onSubmit={handleSubmit}>
                <AppInputGroup
                    id="heading"
                    placeholder={"Input your heading text here.."}
                    value={formData.heading}
                    isError={errors?.heading}
                    label={"Heading"}
                    onChange={handleInputChange}
                />
                {showHighlight &&
                    <>
                        <AppInputGroup
                            id="highlight1_value"
                            placeholder={"3 years+"}
                            value={formData.highlight1_value}
                            isError={errors?.highlight1_value}
                            label={"Highlight-1"}
                            onChange={handleInputChange}
                        >
                            <AppInput
                                id="highlight1_label"
                                placeholder={"Trusted service partnership"}
                                value={formData.highlight1_label}
                                isError={errors?.highlight1_label}
                                onChange={handleInputChange}
                            />
                        </AppInputGroup>
                        <AppInputGroup
                            id="highlight2_value"
                            placeholder={"3 years+"}
                            value={formData.highlight2_value}
                            isError={errors?.highlight2_value}
                            label={"Highlight-2"}
                            onChange={handleInputChange}
                        >
                            <AppInput
                                id="highlight2_label"
                                placeholder={"Trusted service partnership"}
                                value={formData.highlight2_label}
                                isError={errors?.highlight2_label}
                                onChange={handleInputChange}
                            />
                        </AppInputGroup>
                        <AppInputGroup
                            id="highlight3_value"
                            placeholder={"3 years+"}
                            value={formData.highlight3_value}
                            isError={errors?.highlight3_value}
                            label={"Highlight-3"}
                            onChange={handleInputChange}
                        >
                            <AppInput
                                id="highlight3_label"
                                placeholder={"Trusted service partnership"}
                                value={formData.highlight3_label}
                                isError={errors?.highlight3_label}
                                onChange={handleInputChange}
                            />
                        </AppInputGroup>
                    </>
                }

                <AppInputGroup
                    id="image"
                    placeholder={"Input your image text here.."}
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