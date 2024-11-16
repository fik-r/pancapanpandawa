import Image from "next/image"

const ComplianceCertification = () => {

    const Item = () => {
        return (
            <div className="flex flex-row gap-x-[1.5rem] lg:gap-x-[2rem]">
                <div className="w-[5rem] h-[5rem] lg:w-[8.75rem] lg:h-[8.75rem] relative">
                    <Image src={"/icons/ic_compliance.png"}
                        layout="fill"
                        quality={100}
                        alt="ic_compliance_certificate" />
                </div>
                <div className="flex flex-col gap-y-[0.5rem] lg:gap-y-[0.75rem] w-fit lg:w-[19.313rem]">
                    <span className="text-dune font-semibold p-text-body-md lg:p-text-heading-lg line-clamp-1">Sertifikat 001</span>
                    <span className="text-carbon p-text-body-sm lg:p-text-body-md line-clamp-5 lg:line-clamp-3 leading-[1.25rem] lg:leading-[1.875rem]">Lorem ipsum dolor sit amet consectetur. Ut risus cras orci malesuada ornare viverra tincidunt mi in. Varius lacus eget.</span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col mb-[0.688rem] lg:mb-[0px] py-[2.5rem] lg:py-[6.25rem] px-[1.5rem] lg:px-[3.75rem]">
            <div className="h-[4rem] lg:h-fit flex items-center lg:mb-[3rem] mb-[1rem]">
                <span className="p-text-heading-sm lg:p-text-display-lg text-dune">Compliance Certification</span>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-[2rem] lg:gap-y-[0px]">
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default ComplianceCertification