import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AppSection = ({ title, children }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Update</Button>
            </CardFooter>
        </Card>
    )
}

export default AppSection