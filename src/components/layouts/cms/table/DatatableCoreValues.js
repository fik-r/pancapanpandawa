"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableCoreValues } from "@/components/layouts/cms/form/FormCoreValues"
import { createOrUpdateCoreValues, deleteCoreValues } from "@/lib/actions/CoreValuesActions"
import { BASE_URL } from "@/lib/utils"
import { useRouter } from 'next/navigation';

export default function DatatableCoreValues({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Core Values"}
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
                        accessorKey: "image",
                        header: "Image",
                        cell: ({ row }) => (
                            <img src={BASE_URL + row.getValue("image")} alt={row.getValue("image")} className="rounded-lg w-full lg:w-[8rem] cursor-pointer mt-[0.5rem]" />
                        ),
                    }
                ]}
                deleteAction={deleteCoreValues}
                form={
                    <FormDatatableCoreValues initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateCoreValues(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}