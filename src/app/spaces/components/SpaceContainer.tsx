import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type PropType = {
    Icon: LucideIcon
    title: string;
    children: React.ReactNode;
    className?: string;
}

const SpaceContainer = ({ Icon, title, children, className }: PropType) => {
    return (
        <Card className={cn(className, "shadow-none")}>
            <div className="border-b py-2 px-3">
                <p className="font-medium flex items-center"><Icon className="h-4 w-4 mr-3" />{title}</p>
            </div>
            {children}
        </Card>
    )
}

export default SpaceContainer
