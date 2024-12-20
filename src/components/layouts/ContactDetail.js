export default function ContactDetail({ data }) {
    const LeftItem = ({ label, text, showBorder }) => {
        return (
            <div className={`flex flex-col py-[1rem] lg:py-[1.5rem] gap-y-[1rem] ${showBorder ? "border-b border-[#E3E3E3]" : ""}`}>
                <span className="font-bold p-text-body-lg lg:p-text-heading-md text-dune">{label}</span>
                <span className="font-medium text-dune p-text-body-md lg:p-text-heading-sm">
                    {text}
                </span>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <span className="text-dune font-bold p-text-heading-sm lg:p-text-display-lg lg:mb-[1.5rem] mb-[1rem]">{data?.title}</span>
            <span className="font-normal p-text-body-sm lg:p-text-body-md leading-[1.5rem] lg:leading-[1.875rem] text-carbon mb-[1.5rem]">
                {data?.description}
            </span>
            <div className="flex flex-col">
                {data?.items?.map((item, key) => {
                    return (
                        <LeftItem key={key} label={item.title} text={item.description} showBorder={data?.items?.length - 1 != key} />
                    )
                })}
            </div>
        </div>
    )
}