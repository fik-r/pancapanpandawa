import Image from "next/image";

const Footer = () => {
    const Link = ({ text }) => {
        return (
            <div className="text-dune p-text-body-md font-medium cursor-pointer">{text}</div>
        )
    }

    const Socmed = ({ src, cta, alt }) => {
        return (
            <Image
                src={src}
                width={32}
                height={32}
                alt={alt}
                className="cursor-pointer"
            />
        )
    }
    return (
        <div className="flex flex-col py-[2.5rem] px-[1.5rem] lg:px-[3.75rem]">
            <div className="flex flex-col lg:flex-row gap-x-[1rem] items-start lg:items-center">
                <Image
                    src={"/icons/ic_logo_black.png"}
                    width={64}
                    height={60}
                    alt="ic_logo"
                    className="mb-[1.5rem] lg:mb-[0px]"
                />
                <div className="lg:flex-grow flex flex-col lg:flex-row lg:gap-x-[2.5rem] items-start  gap-y-[0.75rem] lg:gap-y-[0px] lg:items-center lg:px-[1.5rem] mb-[2rem] lg:mb-[0rem]">
                    <Link text={"About"} />
                    <Link text={"Services"} />
                    <Link text={"Career"} />
                    <Link text={"Contact"} />
                </div>

                <div className="flex flex-row gap-x-[1rem] items-center">
                    <Socmed
                        src={"/icons/facebook.svg"}
                        alt={"ic_facebook"}
                    />
                    <Socmed
                        src={"/icons/linkedin.svg"}
                        alt={"ic_linkedin"}
                    />
                    <Socmed
                        src={"/icons/instagram.svg"}
                        alt={"ic_instagram"}
                    />
                    <Socmed
                        src={"/icons/youtube.svg"}
                        alt={"ic_youtube"}
                    />
                </div>
            </div>
            <hr className="mt-[2rem] mb-[1.25rem]" />
            <span className="lg:text-center text-dune p-text-body-sm lg:p-text-body-md">© 2024 PT. Panca Pandawa Sukses. All rights reserved.</span>
        </div>
    )
}

export default Footer;