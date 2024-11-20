import { Button } from "@/components/ui/button"
import { BASE_URL } from "@/lib/utils"
import Image from "next/image"
const Hero1 = ({ data }) => {
    const Info = ({ label, value }) => {
        return (
            <div className="flex flex-col gap-y-[0.5rem]">
                <span className="text-white p-text-heading-md lg:p-text-heading-xl">{value}</span>
                <span className="text-white p-text-body-md">{label}</span>
            </div>
        )
    }
    return (
        <div className="px-[1.5rem] pb-[2.313rem] pt-[6.313rem] lg:px-[3.75rem] lg:pb-[6.563rem] lg:pt-[0px] flex flex-col relative">
            <Image src={BASE_URL + data.image}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute z-[-2] cursor-pointer"
                alt="hero-bg" />
            <div className="absolute inset-0 bg-black opacity-20 z-[-1]"></div>
            <span className="p-text-heading-lg lg:p-text-display-xl text-white lg:mt-[18.75rem]">{data.heading}</span>
            <Button
                className="mt-[1.5rem] lg:mt-[2rem] bg-transparent text-white rounded-[0.75rem] w-[8.688rem] h-[3.688rem] lg:w-[9.875rem] lg:h-[4rem] font-semibold p-text-body-md lg:p-text-heading-sm"
                variant="outline"
            >Learn more</Button>
            <div className="hero-info flex flex-col lg:grid lg:grid-cols-3 p-[1.5rem] lg:p-[2rem] mt-[3rem] lg:mt-[3.75rem] gap-y-[1rem] lg:gap-y-[0rem]">
                <Info label={data.highlight_1.label} value={data.highlight_1.value} />
                <Info label={data.highlight_2.label} value={data.highlight_2.value}/>
                <Info label={data.highlight_3.label} value={data.highlight_3.value}/>
            </div>
        </div>
    )
}

const Hero2 = ({ title }) => {
    return (
        <div className="px-[1.5rem] lg:px-[3.75rem] pb-[3.75rem] lg:pb-[8.5rem] flex flex-col relative">
            <Image src="https://picsum.photos/id/233/1440/720.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute z-[-2] cursor-pointer"
                alt="hero-bg" />
            <div className="absolute inset-0 bg-black opacity-20 z-[-1]"></div>
            <span className="p-text-heading-lg lg:p-text-display-xl text-white mt-[12.313rem] lg:mt-[18.75rem]">{title}</span>
        </div>
    )
}

export {
    Hero1,
    Hero2
}