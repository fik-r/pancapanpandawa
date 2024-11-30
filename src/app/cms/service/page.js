import { notFound } from 'next/navigation'
import ClientServicepage from "@/components/layouts/cms/client_page/ClientServicepage"
import { getServicepage } from "@/lib/actions/ServicepageActions"
export const dynamic = 'force-dynamic'

export default async function ServerCmsHomepage() {
    const servicepageData = await getServicepage();
    return (
        <ClientServicepage data={servicepageData} />
    )
}