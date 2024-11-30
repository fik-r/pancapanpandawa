import { notFound } from 'next/navigation'
import { getContact } from '@/lib/actions/ContactpageActions';
import ClientContactpage from '@/components/layouts/cms/client_page/ClientContactpage';
export const dynamic = 'force-dynamic'

export default async function ServerCmsHomepage() {
    const contactpageData = await getContact();
    return (
        <ClientContactpage data={contactpageData} />
    )
}