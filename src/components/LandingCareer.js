import { SingleGallery } from "./layouts/Gallery";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import Link from "next/link";
import { BASE_URL } from "@/lib/utils";
const LandingCareer = ({ data }) => {
    const ItemJob = ({ item }) => {
        return (
            <div className="border rounded-xl border-[#CDCDCD] flex flex-col gap-y-[1.5rem] lg:gap-y-[0px] lg:flex-row lg:justify-between p-[1.5rem]">
                <span className="p-text-body-lg lg:p-text-heading-md text-dune font-medium">
                    {item.title}
                </span>
                <Link href={"/career/detail?q=" + item._id}>
                    <Button className="w-[8.188rem] rounded-full p-text-body-sm font-semibold">
                        Job Details
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-[2.5rem] px-[1.5rem] lg:pt-[6.25rem] lg:pb-[3.125rem] lg:px-[3.75rem]">
                <span className="font-bold text-dune p-text-heading-sm mb-[1rem] lg:mb-[1.5rem] lg:p-text-display-lg">
                    {data?.content?.title}
                </span>
                <span className="font-normal leading-[1.5rem] p-text-body-sm lg:leading-[1.875rem] lg:p-text-body-md text-carbon">
                    {data?.content?.description}
                </span>
            </div>
            <SingleGallery alt={"carrer"} url={BASE_URL + data?.content?.image} />
            <div className="flex flex-col pt-[3.375rem] px-[1.5rem] pb-[2.5rem] lg:pt-[8.75rem] lg:px-[3.75rem]">
                <div className="flex flex-col lg:flex-row lg:gap-x-[4rem] gap-y-[1rem] lg:gap-y-[0px]">
                    <span className="w-full text-dune lg:w-[40%] font-bold p-text-heading-sm lg:p-text-display-lg">{data?.explorePositions?.title}</span>
                    <span className="w-full text-carbon lg:leading-[1.875rem] lg:w-[60%] p-text-body-sm lg:p-text-body-md">{data?.explorePositions?.description}</span>
                </div>
                <div className="flex flex-col gap-y-[1rem] mt-[1.5rem] lg:mt-[3rem]">
                    {data?.items?.map((item, key) => {
                        return (
                            <ItemJob item={item} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LandingCareer;