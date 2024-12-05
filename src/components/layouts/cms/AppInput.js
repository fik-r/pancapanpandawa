"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import AppWYSIWYG from "./AppWYSIWYG"
export default function AppInput({ placeholder, id, isError, value, onChange, type = "text", preview, disabled }) {

    return (
        <div className="flex flex-col">
            {type == "wysiwyg" && <AppWYSIWYG value={value} onModelChange={onChange} placeholder={placeholder} />}
            {type != "textarea" && type != "wysiwyg" && <Input disabled={disabled} id={id} placeholder={placeholder} value={value} onChange={onChange} type={type == "image" ? "file" : type} />}
            {type == "textarea" && <Textarea id={id} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}/>}
            {isError && <Label className="text-red-500 mt-[0.25rem]">This field cannot be left blank.</Label>}
            {preview && type === "image" && <img src={preview} alt="Preview" className="rounded-lg w-[8rem] h-[8rem] cursor-pointer mt-[0.5rem]" onClick={() => {
                window.open(preview)
            }} />}
        </div>
    )
}