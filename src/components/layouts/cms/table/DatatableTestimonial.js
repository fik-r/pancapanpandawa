"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableTestimonials } from "@/components/layouts/cms/form/FormTestimonial"
import { createOrUpdateTestimonial, deleteTestimonial } from "@/lib/actions/TestimonialActions"
import { useRouter } from 'next/navigation';

export default function DatatableTestimonial({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Testimonials"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "personName",
                        header: "Name"
                    },
                    {
                        accessorKey: "personJob",
                        header: "Job"
                    },
                    {
                        accessorKey: "comment",
                        header: "Comment"
                    },
                ]}
                deleteAction={deleteTestimonial}
                form={
                    <FormDatatableTestimonials initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateTestimonial(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}