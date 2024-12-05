"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { deleteContactForm } from "@/lib/actions/ContactFormActions"
import { FormContactForm } from "../form/FormContactForm"
import LoadingOverlay from "@/components/layouts/Loading"

export default function DatatableContactForm({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div className="flex flex-col">
            <LoadingOverlay loading={loading} />
            <AppDatatable
                title={"Contact Form"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                viewOnly={true}
                initialColumns={[
                    {
                        accessorKey: "name",
                        header: "name"
                    },
                    {
                        accessorKey: "companyEmail",
                        header: "Company Email"
                    },
                ]}
                deleteAction={deleteContactForm}
                form={
                    <FormContactForm initialData={formData} />
                }
            />
        </div>
    )
}