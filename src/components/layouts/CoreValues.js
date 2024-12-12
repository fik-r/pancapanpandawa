import { BASE_URL } from "@/lib/utils";
import Image from "next/image";
const CoreValues = ({ data }) => {

    const Item = ({ item }) => {
        return (
            <div className="flex flex-row gap-x-[1.5rem]">
                <Image
                    src={BASE_URL + item?.image}
                    width={40}
                    height={40}
                    alt="ic_core_value"
                    className="min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px]"
                />
                <div className="flex flex-col gap-y-[0.5rem]">
                    <span className="text-white p-text-body-md lg:p-text-body-lg !font-semibold">{item?.title}</span>
                    <span className="text-white p-text-body-sm lg:p-text-body-lg !font-normal">{item?.description}</span>
                </div>
            </div>
        )
    }
    return (
        <div className="py-[1.5rem] lg:py-[2.5rem] px-[1.5rem] lg:px-[3.75rem]">
            <div className="rounded-lg px-[1.5rem] py-[2rem] lg:p-[2.5rem] bg-[#0C204D] flex flex-col relative">
                <Image src={"/overlay_corevalues.svg"}
                    layout="fill"
                    alt="overlay"
                    className="absolute z-[0]"
                />
                <span className="font-bold p-text-heading-sm lg:p-text-display-lg text-white mb-[1.5rem] z-[1]">{data?.title}</span>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-[1.5rem] lg:gap-[2.5rem] z-[1]">
                    {data?.items?.map((item, key) => {
                        return (
                            <Item item={item} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CoreValues;