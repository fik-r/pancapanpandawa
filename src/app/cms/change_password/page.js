import { notFound } from 'next/navigation'
import ClientChangePassword from '@/components/layouts/cms/client_page/ClientChangePassword';
export const dynamic = 'force-dynamic'

export default async function ServerCmsChangePassword() {
    return (
        <ClientChangePassword />
    )
}