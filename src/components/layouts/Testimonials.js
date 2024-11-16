import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const Testimonials = () => {
    const Item = () => {
        const cardClass = "rounded-lg border border-[#EAEAEA] bg-white shadow-[0px_90px_55px_0px_rgba(0,0,0,0.02),0px_10px_30px_0px_rgba(0,0,0,0.03)]"
        return (
            <div className={`flex flex-col ${cardClass} p-[1rem] lg:p-[2rem]`}>
                <div className="font-semibold p-text-body-lg lg:p-text-heading-md h-[13.875rem] mb-[1rem] leading-[2rem]">“Companies with strong employer services and attitude. Very recommended.”</div>
                <div className="flex flex-row gap-x-[0.313rem] mb-[1rem]">
                    <Image src={"/icons/ic_star.svg"}
                        width={16}
                        height={16}
                        alt="ic_star" />
                    <Image src={"/icons/ic_star.svg"}
                        width={16}
                        height={16}
                        alt="ic_star" />
                    <Image src={"/icons/ic_star.svg"}
                        width={16}
                        height={16}
                        alt="ic_star" />
                    <Image src={"/icons/ic_star.svg"}
                        width={16}
                        height={16}
                        alt="ic_star" />
                    <Image src={"/icons/ic_star.svg"}
                        width={16}
                        height={16}
                        alt="ic_star" />
                </div>
                <span className="text-dune p-text-body-lg font-semibold mb-[0.25rem]">Adi Hasibuan</span>
                <span className="text-dune p-text-body-lg">PT. Adiperkasa Anugerah Pratama</span>
            </div>
        )
    }
    return (
        <div className="flex flex-col py-[3.75rem] lg:py-[6.25rem]">
            <span className="p-text-heading-sm lg:p-text-display-lg text-dune mb-[1.5rem] lg:mb-[3rem] px-[1.5rem] lg:px-[3.75rem]">We have worked with thousands of amazing people</span>
            <Carousel>
                <CarouselContent className="px-[1.5rem] lg:px-[3.75rem]">
                    <CarouselItem className="basis-11/12 lg:basis-1/3"><Item /></CarouselItem>
                    <CarouselItem className="basis-11/12 lg:basis-1/3"><Item /></CarouselItem>
                    <CarouselItem className="basis-11/12 lg:basis-1/3"><Item /></CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Testimonials;