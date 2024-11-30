import { BASE_URL } from "@/lib/utils"
import Image from "next/image"

const AboutCompany = ({ data }) => {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 py-[1.5rem] lg:py-[6.25rem] px-[1.5rem] lg:px-[3.75rem] gap-x-[3rem]">
            <div className="flex flex-col">
                <span className="p-text-heading-sm font-bold lg:p-text-display-lg text-dune">{data?.heading}</span>
                <span className="font-normal p-text-body-sm lg:p-text-body-md text-carbon mt-[1rem] lg:mt-[1.5rem] leading-[1.5rem] lg:leading-[1.875rem]">{data?.description}</span>
            </div>
            <div className="relative h-[15rem] lg:h-[30rem] mt-[1.5rem] lg:mt-[0px]">
                <Image
                    src={BASE_URL + data?.image}
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