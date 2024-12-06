'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    ChevronDown
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import DOMPurify from "dompurify"
import { useSearchParams } from "next/navigation"

const OurServices = ({ data }) => {
    const searchParams = useSearchParams();
    const queryValue = searchParams.get("q");
    const [selectedValue, setSelectedValue] = useState(
        queryValue ? queryValue : data?.items[0].title
    )
    const CollapsibleContent = ({ title, content }) => {
        const [isExpand, setIsExpand] = useState(false)

        return (
            <div className="py-[1.5rem] lg:py-[2rem] border-b border-[#E3E3E3]">
                <div className="hidden lg:flex flex-row justify-between gap-x-[4rem]">
                    <span className="w-[30%] text-dune p-text-heading-md font-medium">{title}</span>
                    <div className={`content-html w-[70%] text-carbon p-text-body-md leading-[1.875rem] ${isExpand ? "" : "hidden"}`}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
                    <div>
                        <Image src={
                            isExpand ? "/icons/ic_minimize.svg" : "/icons/ic_plus.svg"
                        } width={22} height={22} objectFit="cover" alt={"ic_action"} className="cursor-pointer" onClick={() => {
                            setIsExpand(!isExpand)
                        }} />
                    </div>
                </div>
                <div className="lg:hidden flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-dune p-text-body-md font-medium">{title}</span>
                        <div>
                            <Image src={
                                isExpand ? "/icons/ic_minimize.svg" : "/icons/ic_plus.svg"
                            } width={20} height={20} objectFit="cover" alt={"ic_action"} className="cursor-pointer" onClick={() => {
                                setIsExpand(!isExpand)
                            }} />
                        </div>
                    </div>
                    <div className={`content-html mt-[1rem] w-full text-carbon p-text-body-sm font-normal leading-[1.25rem] ${isExpand ? "" : "hidden"}`}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
                    ></div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem]">
            <div className="flex flex-col gap-y-[1rem] lg:gap-y-[0px] lg:flex-row lg:gap-x-[4rem]">
                <span className="text-dune font-bold p-text-heading-sm lg:p-text-display-lg">{data?.title}</span>
                <span className="w-full lg:w-[50%] text-carbon leading-[1.5rem] lg:leading-[1.875rem] p-text-body-sm lg:p-text-body-md">{data?.description}</span>
            </div>
            <Tabs defaultValue={data?.items[0]?.title} className="hidden lg:block w-full mt-[2rem]">
                <TabsList className="mb-[2rem]">
                    {data?.items?.map((item, key) => {
                        return (
                            <TabsTrigger value={item.title} key={key}>{item.title}</TabsTrigger>
                        )
                    })}
                </TabsList>
                {data?.items?.map((item, key) => {
                    return (
                        <TabsContent value={item.title} key={key}>
                            <div className="flex flex-col">
                                {item?.details?.map((detail, detailKey) => {
                                    return (
                                        <CollapsibleContent
                                            key={detailKey}
                                            title={detail.title}
                                            content={detail.html} />
                                    )
                                })}
                            </div>
                        </TabsContent>
                    )
                })}
            </Tabs>
            {/* for mobile */}
            <div className="flex flex-col lg:hidden mt-[1.5rem] relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer p-[1rem] border rounded-xl border-[#ACAAAA] flex flex-row justify-between">
                            <span className="font-medium p-text-body-sm text-dune">{selectedValue}</span>
                            <ChevronDown />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[88vw]">
                        {data?.items?.map((item, key) => {
                            return (
                                <DropdownMenuItem key={key} onClick={() => {
                                    setSelectedValue(item.title)
                                }}>{item.title}</DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex flex-col mt-[1.5rem]">
                    {data?.items?.filter(item => item.title == selectedValue)[0].details?.map((detail, key) => {
                        return (
                            <CollapsibleContent
                                key={key}
                                title={detail.title}
                                content={detail.html} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurServices