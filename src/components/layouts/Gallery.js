
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { BASE_URL } from "@/lib/utils"

const SingleGallery = ({ url, alt, isRounded, height }) => {
    return (
        <div className={`relative w-[full] ${height ? height : "h-[15rem] lg:h-[41.25rem]"}`}>
            <Image src={url}
                alt={alt}
                objectFit="cover"
                layout="fill"
                className={`${isRounded ? "rounded-xl" : ""}`}
            />
            <div className={`${isRounded ? "rounded-xl" : ""} absolute inset-0 bg-black opacity-20 z-[1]`}></div>
        </div>
    )
}

const CarouselGallery = ({ data }) => {
    return (
        <Carousel>
            <CarouselContent className="lg:gap-x-[2.5rem]">
                {data.map((item, key) => {
                    return (
                        <CarouselItem className="basis-3/4" key={key}><SingleGallery alt="gallery" url={BASE_URL + item.image} /></CarouselItem>
                    )
                })}
            </CarouselContent>
        </Carousel>

    )
}

const ServiceGallery = ({ data }) => {
    const topRowItems = data?.items?.slice(0, 2);
    const bottomRowItems = data?.items?.slice(2);
    return (
        <div className="flex flex-col px-[1.5rem] py-[2.5rem] lg:p-[3.75rem]">
            <span className="p-text-heading-sm lg:p-text-display-lg font-bold text-dune mb-[1.5rem] lg:mb-[3rem]">{data?.heading}</span>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[1.5rem] gap-y-[1rem] lg:mb-[1.5rem]">
                {topRowItems.map((item, index) => (
                    <SingleGallery
                        key={index}
                        isRounded={true}
                        alt={"servicegallery"}
                        url={BASE_URL + item.image}
                        height={"lg:h-[19.5rem] h-[15rem]"}
                    />
                ))}
            </div>
            <div className="flex flex-col mt-[1rem] lg:grid lg:grid-cols-3 gap-y-[1rem] lg:gap-x-[1.5rem]">
                {bottomRowItems.map((item, index) => (
                    <SingleGallery
                        key={index}
                        isRounded={true}
                        alt={"servicegallery"}
                        url={BASE_URL + item.image}
                        height={"lg:h-[19.5rem] h-[15rem]"}
                    />
                ))}
            </div>
        </div>
    )
}

export {
    SingleGallery,
    CarouselGallery,
    ServiceGallery
};