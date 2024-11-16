import Image from "next/image"

const AboutCompany = () => {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 py-[1.5rem] lg:py-[6.25rem] px-[1.5rem] lg:px-[3.75rem] gap-x-[3rem]">
            <div className="flex flex-col">
                <span className="p-text-heading-sm font-bold lg:p-text-display-lg text-dune">About Company</span>
                <span className="font-normal p-text-body-sm lg:p-text-body-md text-carbon mt-[1rem] lg:mt-[1.5rem] leading-[1.5rem] lg:leading-[1.875rem]">PT. Panca Pandawa Sukses merupakan perusahaan yang bergerak dibidang jasa alih daya pekerja maupun pekerjaan yang bersifat kegiatan pendukung. Kami mempunyai izin berusaha dari OSS dan sudah berlaku efektif sehingga memberikan kepastian hukum bagi pengguna jasa dan pekerja. Kami memahami di era bisnis saat ini, Organisasi membutuhkan perbaikan secara terus - menerus untuk dapat bersaing di pasar Nasional dan Global. Salah satu strategi untuk bisa bersaing adalah dengan fokus pada kompetisi inti. Pengembangan kompetisi inti memberikan dampak cukup besar dari segi produktif dan efisiensi.</span>
            </div>
            <div className="relative h-[15rem] lg:h-[30rem] mt-[1.5rem] lg:mt-[0px]">
                <Image
                    src="https://picsum.photos/id/250/1440/480.webp"
                    layout="fill"
                    objectFit="cover"
                    alt="about_img"
                    className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-20 z-[1] rounded-lg"></div>
            </div>
        </div>
    )
}

export default AboutCompany