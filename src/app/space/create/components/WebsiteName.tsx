import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";

type PropType = {
    className?: string;
}

const WebsiteName = ({ className }: PropType) => {
    return (
        <div className={cn("w-full text-center", className)}>
            <div className="mx-auto flex items-center justify-center flex-col max-w-sm mt-5">
                <div className="flex rounded-lg shadow-sm shadow-black/5 w-full">
                    <span className="z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                        https://
                    </span>
                    <Input
                        className="-ms-px rounded-s-none shadow-none text-center"
                        placeholder="www.example-website.com"
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default WebsiteName
