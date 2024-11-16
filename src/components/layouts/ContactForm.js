import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
const ContactForm = () => {
    return (
        <div className="flex-grow flex flex-col gap-y-[1rem] lg:gap-y-[2rem]">
            <Input type="text" placeholder="Input your name here" className="p-text-body-md rounded-lg" />
            <Input type="email" placeholder="Input your company email here" className="p-text-body-md rounded-lg" />
            <Input type="text" placeholder="Input your phone number here" className="p-text-body-md rounded-lg" />
            <Textarea type="text" placeholder="Input your message here" className="p-text-body-md rounded-lg" />
            <span className="p-text-body-sm lg:p-text-body-md text-[#343434]">
                By completing this form, you agree that the information provided may be stored and handled in accordance with our <u className="cursor-pointer">Privacy Policy</u>.
            </span>
            <Button className="w-[9.125rem] lg:w-[13.75rem] h-[3.188rem] lg:h-[4.188rem] p-text-body-md font-semibold rounded-xl lg:rounded-lg">Send Inquiry</Button>
        </div>
    )
}

export default ContactForm;