"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { FormDatatableVisiMission } from "@/components/layouts/cms/form/FormVisiMission"
import { createOrUpdateMission, deleteMission } from "@/lib/actions/MissionActions"
import { useRouter } from 'next/navigation';

export default function DatatableVisiMission({ data }) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Mission"}
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
                deleteAction={deleteMission}
                form={
                    <FormDatatableVisiMission initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateMission(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}