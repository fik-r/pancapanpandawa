"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableCareer } from "@/components/layouts/cms/form/FormCareer"
import { createOrUpdateCareer, deleteCareer } from "@/lib/actions/CareerActions"
import { BASE_URL } from "@/lib/utils"
import { useRouter } from 'next/navigation';
import LoadingOverlay from "@/components/layouts/Loading"
import { useToast } from "@/hooks/use-toast"

export default function DatatableCertificates({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    const { toast } = useToast()
    return (
        <div className="flex flex-col">
            <LoadingOverlay loading={loading} />
            <AppDatatable
                title={"Careers"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "title",
                        header: "Title"
                    },
                    {
                        accessorKey: "contractType",
                        header: "Contract Type"
                    },
                    {
                        accessorKey: "areaRegion",
                        header: "Area Region"
                    },
                    {
                        accessorKey: "yearsOfExp",
                        header: "Years of Experience"
                    },
                ]}
                deleteAction={deleteCareer}
                form={
                    <FormDatatableCareer initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        const result = await createOrUpdateCareer(data, id)
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