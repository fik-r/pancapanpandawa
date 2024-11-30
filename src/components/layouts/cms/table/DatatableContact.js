"use client"
import { useState } from "react"
import AppDatatable from "@/components/layouts/cms/AppDatatable"
import { createOrUpdateContact, deleteContact } from "@/lib/actions/ContactActions"
import { useRouter } from 'next/navigation';
import { FormDatatableContacts } from "../form/FormContact"

export default function DatatableContact({ data }) {
    console.log(data)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter()
    return (
        <div className="flex flex-col">
            <AppDatatable
                title={"Contacts"}
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
                        accessorKey: "description",
                        header: "Description"
                    },
                ]}
                deleteAction={deleteContact}
                form={
                    <FormDatatableContacts initialData={formData} action={async (data, id) => {
                        setLoading(true)
                        await createOrUpdateContact(data, id)
                        setLoading(false)
                        setDialogOpen(false)
                        router.refresh()
                    }} />
                }
            />
        </div>
    )
}