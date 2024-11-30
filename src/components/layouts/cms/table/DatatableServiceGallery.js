"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableServiceGallery } from "@/components/layouts/cms/form/FormServiceGallery"
import { createOrUpdateGallery, deleteGallery } from "@/lib/actions/ServiceGalleryActions"
import { BASE_URL } from "@/lib/utils"
import { useRouter } from 'next/navigation';

export default function DatatableServiceGallery({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Gallery of Services"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "image",
                        header: "Image",
                        cell: ({ row }) => (
                            <img src={BASE_URL + row.getValue("image")} alt={row.getValue("image")} className="rounded-lg w-full lg:w-[8rem] cursor-pointer mt-[0.5rem]" />
                        ),
                    }
                ]}
                deleteAction={deleteGallery}
                form={
                    <FormDatatableServiceGallery initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateGallery(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}