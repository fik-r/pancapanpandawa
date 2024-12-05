import { BASE_URL } from "@/lib/utils";
import Image from "next/image";

const Partners = ({ data }) => {
    return (
        <div className="flex flex-col px-[1.5rem] mt-[2.5rem] lg:mt-[0px] mb-[3.063rem] lg:px-[3.75rem] lg:mb-[6.25rem]">
            <span className="text-center text-carbon p-text-body-md lg:p-text-heading-sm lg:h-[4rem] font-medium mb-[0.75rem] lg:mb-[0px]">{data?.title}</span>
            <div className="grid grid-cols-2 gap-y-[0.313rem] gap-x-[0.75rem] lg:flex lg:flex-row lg:gap-x-[1.75rem] justify-center">
                {data?.items?.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            src={BASE_URL + item.image}
                            width={240}
                            height={100}
                            className="max-h-[100px]"
                            alt={item.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Partners;