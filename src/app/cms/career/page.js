import { notFound } from 'next/navigation'
import ClientCareerpage from "@/components/layouts/cms/client_page/ClientCareerpage"
import { getCareerpage } from "@/lib/actions/CareerpageActions"
export const dynamic = 'force-dynamic'

export default async function ServerCmsHomepage() {
    const careerpageData = await getCareerpage();
    return (
        <ClientCareerpage data={careerpageData} />
    )
}