import { BASE_URL } from "@/lib/utils"
import Image from "next/image"

const OurTeam = ({ data }) => {
    const Item = ({ item }) => {
        return (
            <div className="flex flex-col w-full">
                <div className="relative w-full min-h-[15rem] lg:min-h-[19.5rem] max-h-[15rem] lg:max-h-[19.5rem]">
                    <Image
                        src={BASE_URL + item.image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        className="z-[0] rounded-lg"
                        alt={item.name}
                    />
                    <div className="absolute inset-0 bg-black opacity-20 z-[1] rounded-lg"></div>
                </div>
                <span className="mt-[1rem] lg:mt-[1.5rem] p-text-body-md lg:p-text-body-lg !font-semibold text-dune">
                    {item.name}
                </span>
                <span className="mt-[0.25rem] p-text-body-md lg:p-text-body-lg text-dune">
                    {item.position}
                </span>
            </div>
        )
    }
    return (
        <div className="flex flex-col px-[1.5rem] py-[3.75rem] lg:py-[6.25rem] lg:px-[3.75rem]">
            <span className="p-text-heading-sm lg:p-text-display-lg text-dune !font-bold">
                {data?.title}
            </span>
            <span className="text-carbon mt-[1rem] lg:mt-[1.5rem] p-text-body-sm lg:p-text-body-md mb-[1.5rem] lg:mb-[3rem] !font-normal">
                {data?.description}
            </span>
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-[2rem] lg:gap-[1.5rem]">
                {data?.items.map((item, key) => {
                    return (
                        <Item item={item} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default OurTeam