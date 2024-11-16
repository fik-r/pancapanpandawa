export default function ContactDetail() {
    const LeftItem = ({ label, text }) => {
        return (
            <div className="flex flex-col py-[1rem] lg:py-[1.5rem] gap-y-[1rem] border-b border-[#E3E3E3]">
                <span className="font-bold p-text-body-lg lg:p-text-heading-md text-dune">{label}</span>
                <span className="font-medium text-dune p-text-body-md lg:p-text-heading-sm">
                    {text}
                </span>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <span className="text-dune font-bold p-text-heading-sm lg:p-text-display-lg lg:mb-[1.5rem] mb-[1rem]">How can we help you?</span>
            <span className="font-normal p-text-body-sm lg:p-text-body-md leading-[1.5rem] lg:leading-[1.875rem] text-carbon mb-[1.5rem]">
                Lorem ipsum dolor sit amet consectetur. Magnis cursus congue vestibulum odio. Pharetra aliquam id in aliquam laoreet massa donec facilisis.
            </span>
            <div className="flex flex-col">
                <LeftItem label={"Office Address"} text={"Lorem ipsum no 2401, Sudirman Jakarta Selatan Indonesia 12802"} />
                <LeftItem label={"Email"} text={"marketing@pancapandawasukses.id"} />
                <LeftItem label={"Telephone"} text={"+6288886666"} />
            </div>
        </div>
    )
}