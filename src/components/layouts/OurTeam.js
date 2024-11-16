import Image from "next/image"

const OurTeam = () => {
    const Item = () => {
        return (
            <div className="flex flex-col w-full">
                <div className="relative w-full h-[15rem] lg:h-[19.5rem]">
                    <Image
                        src={"https://picsum.photos/id/233/1440/312.webp"}
                        layout="fill"
                        className="z-[0] rounded-lg"
                        alt="test"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 z-[1] rounded-lg"></div>
                </div>
                <span className="mt-[1rem] lg:mt-[1.5rem] p-text-body-md lg:p-text-body-lg font-semibold text-dune">
                    Kolonel CZI Setiya Gantiarto
                </span>
                <span className="mt-[0.25rem] p-text-body-md lg:p-text-body-lg text-dune">
                    Pembina
                </span>
            </div>
        )
    }
    return (
        <div className="flex flex-col px-[1.5rem] py-[3.75rem] lg:py-[6.25rem] lg:px-[3.75rem]">
            <span className="font-bold p-text-heading-sm lg:p-text-display-lg text-dune">
                Our Team
            </span>
            <span className="text-carbon font-normal mt-[1rem] lg:mt-[1.5rem] p-text-body-sm lg:p-text-body-md mb-[1.5rem] lg:mb-[3rem]">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for company
            </span>
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-[2rem] lg:gap-[1.5rem]">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default OurTeam