"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableWhyUs } from "@/components/layouts/cms/form/FormWhyUs"
import { createOrUpdateReason, deleteReason } from "@/lib/actions/ReasonActions"
import { useRouter } from 'next/navigation';

export default function DatatableWhyUs({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Why Us"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "text",
                        header: "Text"
                    },
                ]}
                deleteAction={deleteReason}
                form={
                    <FormDatatableWhyUs initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateReason(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}