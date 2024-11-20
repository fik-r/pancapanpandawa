import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function AppDialog({ children, isOpen, setIsOpen }) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent className="sm:max-w-[56.25rem] pt-[3.5rem]">
                {children}
            </DialogContent>
        </Dialog>
    )
}
