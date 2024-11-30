import { notFound } from 'next/navigation'
import ClientAboutpage from "@/components/layouts/cms/client_page/ClientAboutpage"
import { getAboutpage } from "@/lib/actions/AboutpageActions"
export const dynamic = 'force-dynamic'

export default async function ServerCmsHomepage() {
    const aboutpageData = await getAboutpage();
    return (
        <ClientAboutpage data={aboutpageData} />
    )
}