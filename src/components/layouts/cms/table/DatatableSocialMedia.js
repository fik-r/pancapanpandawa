"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import FormSocialMedia from "@/components/layouts/cms/form/FormSocialMedia"
import { createOrUpdateSocialMedia, deleteSocialMedia } from "@/lib/actions/SocialMediaActions"
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
                title={"Social Media"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "url",
                        header: "url"
                    },
                    {
                        accessorKey: "image",
                        header: "Image",
                        cell: ({ row }) => (
                            <img src={BASE_URL + row.getValue("image")} alt={row.getValue("image")} className="rounded-lg w-full lg:w-[8rem] cursor-pointer mt-[0.5rem]" />
                        ),
                    }
                ]}
                deleteAction={deleteSocialMedia}
                form={
                    <FormSocialMedia initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        const result = await createOrUpdateSocialMedia(data, id)
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