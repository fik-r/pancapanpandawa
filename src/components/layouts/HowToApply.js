export default function HowToApply() {
    return (
        <div
            style={{ background: "linear-gradient(90deg, #0E1D57 0%, #173E93 100%)" }}
            className="flex flex-col gap-y-[2rem] lg:grid grid-cols-4 lg:py-[5rem] lg:px-[3.75rem] py-[2.5rem] px-[1.5rem] lg:gap-x-[4rem]">
            <span
                className="col-span-1 font-bold text-white p-text-heading-sm lg:p-text-display-lg">
                How to Apply?
            </span>
            <span className="col-span-3 text-white lg:p-text-heading-sm lg:leading-[2rem]">
                Send your CV and a short motivational letter to career@pancapandawasukses.id with the name of the position in the subject of the email.
            </span>
        </div>
    )
}