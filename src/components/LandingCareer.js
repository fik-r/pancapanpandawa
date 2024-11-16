import { Snail } from "lucide-react";
import { SingleGallery } from "./layouts/Gallery";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import Link from "next/link";

const LandingCareer = () => {
    const ItemJob = () => {
        return (
            <div className="border rounded-xl border-[#CDCDCD] flex flex-col gap-y-[1.5rem] lg:gap-y-[0px] lg:flex-row lg:justify-between p-[1.5rem]">
                <span className="p-text-body-lg lg:p-text-heading-md text-dune font-medium">
                    Driver Regional Jakarta
                </span>
                <Link href={"/career/driver-jakarta"}>
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
                    Elevate your impact. Join our team and grow with us.
                </span>
                <span className="font-normal leading-[1.5rem] p-text-body-sm lg:leading-[1.875rem] lg:p-text-body-md text-carbon">
                    Lorem ipsum dolor sit amet consectetur. Magnis cursus congue vestibulum odio. Pharetra aliquam id in aliquam laoreet massa donec facilisis. Ut mi pellentesque volutpat at elementum pulvinar elit id ultricies. Sit neque elementum urna nulla nibh consectetur. Pellentesque aliquet eu lectus et eget. Habitant sit pharetra quisque magna volutpat imperdiet nulla a.
                    Leo sed consequat morbi id non suspendisse consequat. Volutpat viverra ornare bibendum at a pulvinar. Tortor ipsum id dolor proin vulputate. Volutpat viverra eget ac sodales ut imperdiet. Leo id eget platea in condimentum nisl lobortis. Velit.
                </span>
            </div>
            <SingleGallery alt={"carrer"} />
            <div className="flex flex-col pt-[3.375rem] px-[1.5rem] pb-[2.5rem] lg:pt-[8.75rem] lg:px-[3.75rem]">
                <div className="flex flex-col lg:flex-row lg:gap-x-[4rem] gap-y-[1rem] lg:gap-y-[0px]">
                    <span className="w-full text-dune lg:w-[40%] font-bold p-text-heading-sm lg:p-text-display-lg">Explore our open positions </span>
                    <span className="w-full text-carbon lg:leading-[1.875rem] lg:w-[60%] p-text-body-sm lg:p-text-body-md">Lorem ipsum dolor sit amet consectetur. Magnis cursus congue vestibulum odio. Pharetra aliquam id in aliquam laoreet massa donec facilisis. Ut mi pellentesque volutpat at elementum pulvinar elit id ultricies.</span>
                </div>
                <div className="flex flex-col gap-y-[1rem] mt-[1.5rem] lg:mt-[3rem]">
                    <ItemJob />
                    <ItemJob />
                    <ItemJob />
                </div>
            </div>
        </div>
    )
}

export default LandingCareer;