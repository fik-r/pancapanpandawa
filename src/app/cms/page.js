import { notFound } from 'next/navigation'
import ClientHomepage from "@/components/layouts/cms/client_page/ClientHomepage"
import { getHomepage } from "@/lib/actions/HomepageActions"
export const dynamic = 'force-dynamic'

export default async function ServerCmsHomepage() {
    const homepageData = await getHomepage();
    return (
        <ClientHomepage data={homepageData} />
    )
}