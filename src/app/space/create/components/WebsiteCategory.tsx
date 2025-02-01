import { cn } from "@/lib/utils";
import { WEBSITE_CATEGORIES } from "../types/type";

type PropType = {
    className?: string;
}

const WebsiteCategory = ({ className }: PropType) => {
    return (
        <div className={cn("w-full text-center", className)}>
            <div className="mx-auto flex items-center justify-center max-w-2xl gap-2 flex-wrap ">
                {
                    WEBSITE_CATEGORIES.map((item) => {
                        return <span key={item.value} className="px-4 text-sm py-1 rounded-full border cursor-pointer hover:bg-primary/90 hover:text-primary-foreground" >{item.label}</span>
                    })
                }
            </div>
        </div>
    )
}

export default WebsiteCategory
