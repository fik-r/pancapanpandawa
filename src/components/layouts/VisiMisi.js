const VisiMisi = ({ data }) => {
    return (
        <div className="px-[1.5rem] py-[2.5rem] lg:py-[6.25rem] lg:px-[3.75rem] flex flex-col gap-y-[1.5rem]">
            <div className="font-bold p-text-heading-sm lg:p-text-display-lg text-dune">{data?.title}</div>
            <div className="flex flex-col p-text-body-sm lg:p-text-body-md">
                <span className="font-semibold">Visi</span>
                <span className="text-carbon my-[0.25rem]">{data?.visi}</span>
            </div>

            <div className="flex flex-col p-text-body-sm lg:p-text-body-md">
                <span className="font-semibold">Misi</span>
                {data?.items?.map((item, key) => {
                    return (
                        <span className="text-carbon my-[0.25rem]" key={key}>{`${(key + 1)}. ${item.text}`}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default VisiMisi