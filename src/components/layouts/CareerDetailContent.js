"use client"
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import DOMPurify from "dompurify"

export default function CareerDetailContent({ data }) {
    console.log(data)
    const LeftItem = ({ label, text }) => {
        return (
            <div className="flex flex-col py-[1rem] lg:py-[1.5rem] gap-y-[1rem] border-b border-[#E3E3E3]">
                <span className="font-bold p-text-body-lg lg:p-text-heading-md text-dune">{label}</span>
                <span className="font-medium text-dune p-text-body-md lg:p-text-heading-sm">
                    {text}
                </span>
            </div>
        )
    }

    const RightItem = ({ label, text }) => {
        return (
            <div className="flex flex-col lg:gap-y-[1rem] gap-y-[0.75rem]">
                <span className="font-semibold lg:font-bold p-text-body-lg lg:p-text-heading-md text-dune">{label}</span>
                <div className="text-carbon font-normal p-text-body-sm lg:p-text-body-md leading-[1.5rem] lg:leading-[1.875rem] content-html"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col lg:py-[6.25rem] lg:px-[3.75rem] py-[2.5rem] px-[1.5rem]">
            <Link href={"/career"}>
                <Button variant="outline" className="hidden lg:flex w-[12.188rem] h-[3.5rem] bg-white border border-[#CFCFCF] text-black rounded-full p-text-body-md font-semibold">
                    <ChevronLeft className="h-[1.5rem] w-[1.5rem]" />
                    Back to Career
                </Button>
            </Link>
            <span className="lg:my-[3rem] mb-[1.5rem] font-bold p-text-heading-sm lg:p-text-display-lg text-dune">{data?.title}</span>
            <hr className="hidden lg:flex mb-[3rem]" />
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-x-[4rem] gap-y-[1.5rem]">
                <div className="lg:col-span-1 flex flex-col">
                    <LeftItem label={"Contract Type"} text={data?.contractType} />
                    <LeftItem label={"Area Region"} text={data?.areaRegion} />
                    <LeftItem label={"Years of Experienec"} text={data?.yearsOfExp} />
                </div>
                <div className="lg:col-span-3 flex flex-col gap-y-[2rem]">
                    <RightItem label={"Job Description"} text={data?.jobDesc}/>
                    <RightItem label={"Job Qualification"} text={data?.jobQualification}/>
                    <RightItem label={"Perks & Benefit"} text={data?.perks}/>
                </div>
            </div>
        </div>
    )
}