import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
export default function AppInput({ placeholder, id, isError, value, onChange, type = "text", preview, }) {

    return (
        <div className="flex flex-col">
            {type != "textarea" && <Input id={id} placeholder={placeholder} value={value} onChange={onChange} type={type == "image" ? "file" : type} />}
            {type == "textarea" && <Textarea id={id} placeholder={placeholder} value={value} onChange={onChange} />}
            {isError && <Label className="text-red-500 mt-[0.25rem]">This field cannot be left blank.</Label>}
            {preview && type === "image" && <img src={preview} alt="Preview" className="rounded-lg w-[8rem] h-[8rem] cursor-pointer mt-[0.5rem]" onClick={() => {
                window.open(preview)
            }} />}
        </div>
    )
}