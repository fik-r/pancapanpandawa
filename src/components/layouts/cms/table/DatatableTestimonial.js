"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableTestimonials } from "@/components/layouts/cms/form/FormTestimonial"
import { createOrUpdateTestimonial, deleteTestimonial } from "@/lib/actions/TestimonialActions"
import { useRouter } from 'next/navigation';
import LoadingOverlay from "@/components/layouts/Loading"
import { useToast } from "@/hooks/use-toast"

export default function DatatableTestimonial({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    const { toast } = useToast()
    return (
        <div className="flex flex-col">
            <LoadingOverlay loading={loading} />
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
                        const result = await createOrUpdateTestimonial(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        toast({
                            variant: result ? "primary" : "destructive",
                            description: result ? "Success" : "Error",
                        })
                        if (result) {
                            router.refresh()
                        }
                    }} />
                }
            />
        </div>
    )
}