import Layout from "@/components/layouts/cms/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import AppSection from "@/components/layouts/cms/AppSection"

const CmsHome = () => {

    const CardHero = () => {
        return (
            <AppSection title={"Hero"}>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Heading</Label>
                            <Input id="name" placeholder="Input your heading text here.." />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Highlight</Label>
                            <Input id="name" placeholder="3 years+" />
                            <Input id="name" placeholder="Trusted service partnership" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Image</Label>
                            <Input id="name" type="file" />
                        </div>
                    </div>
                </form>
            </AppSection>
        )
    }

    const CardServices = () => {
        return (
            <AppSection title="Services">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Title</Label>
                            <Input id="name" placeholder="Input your title here.." />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Description</Label>
                            <Input id="name" placeholder="Input your title text here.." />
                        </div>
                    </div>
                </form>
            </AppSection>
        )
    }

    const CardWhyChooseUs = () => {
        return (
            <AppSection title="Why choose use?">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Title</Label>
                            <Input id="name" placeholder="Why choose us?" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Image</Label>
                            <Input id="name" type="file" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">1. Text</Label>
                            <Input id="name" placeholder="Input your heading text here.." />
                        </div>
                    </div>
                </form>
            </AppSection>
        )
    }
    return (
        <Layout>
            <div className="lg:px-[2.5rem] p-[1rem] w-full flex flex-col gap-y-[1rem]">
                <CardHero />
                <CardServices />
                <CardWhyChooseUs />
            </div>
        </Layout>
    )
}

export default CmsHome