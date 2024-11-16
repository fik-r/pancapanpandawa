
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const SingleGallery = ({ url, alt, isRounded, height }) => {
    return (
        <div className={`relative w-[full] ${height ? height : "h-[15rem] lg:h-[41.25rem]"}`}>
            <Image src="https://picsum.photos/id/233/1440/660.webp"
                alt={alt}
                objectFit="cover"
                layout="fill"
                className={`${isRounded ? "rounded-xl" : ""}`}
            />
            <div className={`${isRounded ? "rounded-xl" : ""} absolute inset-0 bg-black opacity-20 z-[1]`}></div>
        </div>
    )
}

const CarouselGallery = () => {
    return (
        <Carousel>
            <CarouselContent className="lg:gap-x-[2.5rem]">
                <CarouselItem className="basis-3/4"><SingleGallery alt="gallery" /></CarouselItem>
                <CarouselItem className="basis-3/4"><SingleGallery alt="gallery" /></CarouselItem>
                <CarouselItem className="basis-3/4"><SingleGallery alt="gallery" /></CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}

const ServiceGallery = () => {
    return (
        <div className="flex flex-col px-[1.5rem] py-[2.5rem] lg:p-[3.75rem]">
            <span className="p-text-heading-sm lg:p-text-display-lg font-bold text-dune mb-[1.5rem] lg:mb-[3rem]">Gallery of Services</span>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[1.5rem] gap-y-[1rem] lg:mb-[1.5rem]">
                <SingleGallery isRounded={true} alt={"gallery"} height={"lg:h-[19.5rem] h-[15rem]"}/>
                <SingleGallery isRounded={true} alt={"gallery"} height={"lg:h-[19.5rem] h-[15rem]"} />
            </div>
            <div className="flex flex-col mt-[1rem] lg:grid lg:grid-cols-3 gap-y-[1rem] lg:gap-x-[1.5rem]">
                <SingleGallery isRounded={true} alt={"gallery"} height={"lg:h-[19.5rem] h-[15rem]"}/>
                <SingleGallery isRounded={true} alt={"gallery"} height={"lg:h-[19.5rem] h-[15rem]"} />
                <SingleGallery isRounded={true} alt={"gallery"} height={"lg:h-[19.5rem] h-[15rem]"} />
            </div>
        </div>
    )
}

export {
    SingleGallery,
    CarouselGallery,
    ServiceGallery
};