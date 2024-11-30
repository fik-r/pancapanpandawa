"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableOurTeams } from "@/components/layouts/cms/form/FormOurTeam"
import { createOrUpdateOurTeam, deleteOurTeam } from "@/lib/actions/OurTeamActions"
import { useRouter } from 'next/navigation';
import { BASE_URL } from "@/lib/utils"
export default function DatatableOurTeam({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Our Team"}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setLoading={setLoading}
                setFormData={setFormData}
                data={data}
                initialColumns={[
                    {
                        accessorKey: "name",
                        header: "Name"
                    },
                    {
                        accessorKey: "position",
                        header: "Position"
                    },
                    {
                        accessorKey: "image",
                        header: "Image",
                        cell: ({ row }) => (
                            <img src={BASE_URL + row.getValue("image")} alt={row.getValue("image")} className="rounded-lg w-full lg:w-[8rem] cursor-pointer mt-[0.5rem]" />
                        ),
                    }
                ]}
                deleteAction={deleteOurTeam}
                form={
                    <FormDatatableOurTeams initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateOurTeam(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}