import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    const NavLink = ({ text, cta }) => {
        return (
            <Link className="text-white p-text-body-md font-semibold cursor-pointer" href={cta}>{text}</Link>
        )
    }
    return (
        <div className="w-full flex flex-row lg:h-[6.25rem] absolute bg-transparent my-[1rem] px-[1.5rem] lg:my-[1.25rem] lg:px-[3.75rem] z-[99] justify-between items-center lg:justify-normal">
            <div className="relative w-[3.125rem] lg:w-[4rem] h-[3.125rem] lg:h-[4rem] cursor-pointer">
                <Image src="/icons/ic_logo.png"
                    layout="fill"
                    alt="ic_logo" />
            </div>
            <div className="flex-grow flex-row justify-center items-center gap-x-[2.5rem] hidden lg:flex">
                <NavLink text={"About"} cta={"/about"} />
                <NavLink text={"Services"} cta={"/services"} />
                <NavLink text={"Career"} cta={"/career"} />
                <NavLink text={"Contact"} cta="/contact" />
            </div>
            <div className="w-[2rem] h-[2rem] relative lg:hidden cursor-pointer">
                <Image src="/icons/ic_menu.svg"
                    layout="fill"
                    alt="ic_menu" />
            </div>
        </div>
    )
}

export default Navbar