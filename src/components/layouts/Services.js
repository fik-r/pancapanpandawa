import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import { BASE_URL } from "@/lib/utils";
import Link from "next/link";

const Services = ({ data }) => {
    const Item = ({ data }) => {
        return (
            <div className="flex flex-col w-full lg:h-[21.125rem] border-[1px] border-primary rounded-[1rem] bg-ghost p-[1rem] lg:p-[1.5rem]">
                <div className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem] relative mb-[0.75rem] lg:mb-[1rem]">
                    <Image
                        src={BASE_URL + data.image}
                        layout="fill"
                        alt="ic_services"
                    />

                </div>
                <span className="p-text-heading-sm lg:p-text-heading-lg text-dune mb-[0.25rem] lg:mb-[0.75rem] line-clamp-1">{data.title}</span>
                <span className="p-text-body-sm lg:p-text-body-md leading-[1.25rem] lg:leading-[1.875rem] text-dune mb-[1rem] lg:mb-[1.5rem] text-carbon line-clamp-3 lg:line-clamp-4">{data.description}</span>
                <Link href={"/services?q=" + data.title}>
                    <Button className="w-[8.188rem] rounded-full p-text-body-sm font-semibold">
                        See details
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        )
    }
    return (
        <div className="px-[1.5rem] py-[2.5rem] lg:px-[3.75rem] lg:py-[6.25rem] flex flex-col">
            <span className="font-bold p-text-heading-sm lg:p-text-display-lg text-dune">
                {data.title}
            </span>
            <span className="p-text-body-sm lg:p-text-body-md text-carbon mt-[1rem] lg:mt-[1.5rem] mb-[1.5rem] lg:mb-[3rem] leading-[1.5rem] lg:leading-[1.875rem]">
                {data.description}
            </span>
            <div className="flex flex-col gap-y-[1rem] lg:grid lg:grid-cols-4 lg:gap-y-[0px] lg:gap-x-[1.5rem] overflow-x-auto">
                {
                    data.items.map((item, index) => {
                        return (
                            <Item key={index} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services;