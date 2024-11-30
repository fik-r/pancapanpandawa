import { BASE_URL } from "@/lib/utils";
import Image from "next/image";

const WhyUs = ({ data }) => {
    const Item = ({ text }) => {
        return (
            <div className="w-full lg:line-clamp-1 rounded-[16px] border border-[#3C61AC] bg-[rgba(25,66,149,0.5)] p-[1rem] text-white p-text-body-sm leading-[1.25rem] lg:p-text-body-lg">
                {text}
            </div>
        )
    }
    return (
        <div className="px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] bg-gradient-1 flex flex-col lg:flex-row lg:gap-x-[3rem]">
            <div className="relative w-full lg:w-[23.938rem] h-[12.5rem] lg:h-[30.5rem]">
                <Image
                    src={BASE_URL + data?.image}
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                    alt="img_whyus"
                    className="rounded-xl"
                />
                <div className="absolute bg-black opacity-20 inset-0 z-[1] rounded-xl"></div>
            </div>

            <div className="flex-grow flex flex-col gap-y-[0.75rem] lg:gap-y-[1rem] pb-[0px] lg:pb-[1.438rem] pt-[2rem] lg:pt-[0.688rem]">
                <span className="text-white p-text-heading-sm lg:p-text-display-lg">{data?.heading}</span>
                {data?.items.map((item, key) => {
                    return (
                        <Item
                            key={key}
                            text={`${(key + 1)}. ${item.text}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default WhyUs;