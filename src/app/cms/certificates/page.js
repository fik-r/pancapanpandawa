import { getCertificates } from "@/lib/actions/CertificateActions"
import Layout from "@/components/layouts/cms/Layout";
import DatatableCertificate from "@/components/layouts/cms/table/DatatableCertificate";
export const dynamic = 'force-dynamic'

export default async function Certificates() {
    const certificatesData = await getCertificates();
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <DatatableCertificate data={certificatesData} />
            </div>
        </Layout>
    )
}