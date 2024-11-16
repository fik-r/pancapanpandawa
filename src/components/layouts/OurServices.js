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

const OurServices = () => {
    const CollapsibleContent = ({ title, content }) => {
        const [isExpand, setIsExpand] = useState(false)
        return (
            <div className="py-[1.5rem] lg:py-[2rem] border-b border-[#E3E3E3]">
                <div className="hidden lg:flex flex-row justify-between gap-x-[4rem]">
                    <span className="w-[30%] text-dune p-text-heading-md font-medium">{title}</span>
                    <span className={`w-[70%] text-carbon p-text-body-md leading-[1.875rem] ${isExpand ? "" : "hidden"}`}>Kami memberikan solusi pengamanan yang handal dan professional untuk melayani dan memproteksi klien dan assetnya. Security yang telah dipilih secara selektif, pendidikan dan pelatihan yang terkoordinir secara intens sehingga terbentuk sdm yang berintegritas dan handal serta siap menghadapi situasi di lapangan. Kami memberikan solusi pengamanan yang handal dan professional untuk melayani dan memproteksi klien dan assetnya. Security yang telah dipilih secara selektif, pendidikan dan pelatihan yang terkoordinir secara intens sehingga terbentuk sdm yang berintegritas dan handal serta siap menghadapi situasi di lapangan. </span>
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
                    <span className={`mt-[1rem] w-full text-carbon p-text-body-sm font-normal leading-[1.25rem] ${isExpand ? "" : "hidden"}`}>Kami memberikan solusi pengamanan yang handal dan professional untuk melayani dan memproteksi klien dan assetnya. Security yang telah dipilih secara selektif, pendidikan dan pelatihan yang terkoordinir secara intens sehingga terbentuk sdm yang berintegritas dan handal serta siap menghadapi situasi di lapangan. Kami memberikan solusi pengamanan yang handal dan professional untuk melayani dan memproteksi klien dan assetnya. Security yang telah dipilih secara selektif, pendidikan dan pelatihan yang terkoordinir secara intens sehingga terbentuk sdm yang berintegritas dan handal serta siap menghadapi situasi di lapangan. </span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem]">
            <div className="flex flex-col gap-y-[1rem] lg:gap-y-[0px] lg:flex-row lg:gap-x-[4rem]">
                <span className="text-dune font-bold p-text-heading-sm lg:p-text-display-lg">We specialize in such areas</span>
                <span className="w-full lg:w-[50%] text-carbon leading-[1.5rem] lg:leading-[1.875rem] p-text-body-sm lg:p-text-body-md">We help you to provide our best professional resources in various industry. We tend to be focus on integrity, attitude, and core skill development. Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.</span>
            </div>
            <Tabs defaultValue="security" className="hidden lg:block w-full mt-[2rem]">
                <TabsList className="mb-[2rem]">
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="driver">Driver</TabsTrigger>
                    <TabsTrigger value="cs">Cleaning Service</TabsTrigger>
                </TabsList>
                <TabsContent value="security">
                    <div className="flex flex-col">
                        <CollapsibleContent title={"About Service"} content={""} />
                        <CollapsibleContent title={"Service Management System"} content={""} />
                        <CollapsibleContent title={"Security Organization"} content={""} />
                        <CollapsibleContent title={"Standart Operational Procedure"} content={""} />
                    </div>
                </TabsContent>
            </Tabs>
            {/* for mobile */}
            <div className="flex flex-col lg:hidden mt-[1.5rem] relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer p-[1rem] border rounded-xl border-[#ACAAAA] flex flex-row justify-between">
                            <span className="font-medium p-text-body-sm text-dune">Security</span>
                            <ChevronDown />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[88vw]">
                        <DropdownMenuItem onClick={() => { }}>Security</DropdownMenuItem>
                        <DropdownMenuItem>Driver</DropdownMenuItem>
                        <DropdownMenuItem>Customer Service</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex flex-col mt-[1.5rem]">
                    <CollapsibleContent title={"About Service"} content={""} />
                    <CollapsibleContent title={"Service Management System"} content={""} />
                    <CollapsibleContent title={"Security Organization"} content={""} />
                    <CollapsibleContent title={"Standart Operational Procedure"} content={""} />
                </div>
            </div>
        </div>
    )
}

export default OurServices