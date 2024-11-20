import AppInput from "@/components/layouts/cms/AppInput"
import { Label } from "@/components/ui/label"

export default function AppInputGroup({
    id,
    placeholder,
    isError,
    label,
    value,
    onChange,
    type,
    preview,
    children
}) {
    return (
        <div className="flex flex-col space-y-1.5">
            {label && <Label htmlFor={id}>{label}</Label>}
            <AppInput
                id={id}
                placeholder={placeholder}
                isError={isError}
                value={value}
                type={type}
                preview={preview}
                onChange={onChange}
            />
            {children}
        </div>
    )
}