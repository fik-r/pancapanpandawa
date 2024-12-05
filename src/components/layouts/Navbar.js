"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { BASE_URL } from "@/lib/utils"
import { X, ChevronRight } from "lucide-react"
const Navbar = () => {
    const [expandMenuMobile, setExpandMenuMobile] = useState()

    const NavLink = ({ text, cta }) => {
        return (
            <Link className="text-white p-text-body-md font-semibold cursor-pointer" href={cta}>{text}</Link>
        )
    }

    const MobileNavLink = ({ text, cta }) => {
        return (
            <Link href={cta}>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-white p-text-body-md font-medium">{text}</span>
                    <ChevronRight className="text-white" width={24} height={24} />
                </div>
            </Link>
        )
    }

    return (
        <>
            <div className="w-full flex flex-row lg:h-[6.25rem] absolute bg-transparent my-[1rem] px-[1.5rem] lg:my-[1.25rem] lg:px-[3.75rem] z-[99] justify-between items-center lg:justify-normal">
                <div className="relative w-[3.125rem] lg:w-[4rem] h-[3.125rem] lg:h-[4rem] cursor-pointer">
                    <Link href="/">
                        <Image src="/icons/ic_logo.png"
                            layout="fill"
                            alt="ic_logo" />
                    </Link>
                </div>
                <div className="flex-grow flex-row justify-center items-center gap-x-[2.5rem] hidden lg:flex">
                    <NavLink text={"About"} cta={"/about"} />
                    <NavLink text={"Services"} cta={"/services"} />
                    <NavLink text={"Career"} cta={"/career"} />
                    <NavLink text={"Contact"} cta="/contact" />
                </div>
                <div className="w-[2rem] h-[2rem] relative lg:hidden cursor-pointer" onClick={() => {
                    setExpandMenuMobile(true)
                }}>
                    <Image src="/icons/ic_menu.svg"
                        layout="fill"
                        alt="ic_menu" />
                </div>


            </div>
            {expandMenuMobile &&
                <div className="lg:hidden w-full top-0 fixed h-full bg-black bg-opacity-50 z-[999]">
                    <div
                        style={{
                            background: 'linear-gradient(90deg, rgba(9, 28, 75, 1) 0%, rgba(27, 70, 124, 1) 100%)',
                        }}
                        className="w-full h-full p-[1.5rem] flex flex-col overflow-y-auto">
                        <div className="flex flex-row justify-between items-center mb-[3.125rem]">
                            <img className="w-[3.125rem] h-[3.125rem] cursor-pointer" src={"/icons/ic_logo.png"} onClick={() => {
                                setExpandMenuMobile(false)
                            }} />
                            <X className="text-white cursor-pointer" width={32} height={32} onClick={() => {
                                setExpandMenuMobile(false)
                            }} />
                        </div>
                        <div className="flex flex-col gap-y-[1.563rem]">
                            <MobileNavLink text={"About"} cta={"/about"} />
                            <MobileNavLink text={"Services"} cta={"/services"} />
                            <MobileNavLink text={"Career"} cta={"/career"} />
                            <MobileNavLink text={"Contact"} cta="/contact" />
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Navbar