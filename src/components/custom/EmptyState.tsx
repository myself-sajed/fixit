import { Bird, LucideIcon } from "lucide-react"
import Note from "./Note"
import Heading3 from "./Heading3";


type PropTypes = {
    Icon?: LucideIcon;
    title: string;
    description: string;
}

const EmptyState = ({ Icon = Bird, title, description }: PropTypes) => {
    return (
        <div className="flex items-center justify-center flex-col w-1/2 mx-auto mt-[10%] gap-4">
            <Icon className="size-12 opacity-80" />
            <div className="text-center space-y-1">
                <p className="text-xl"></p>
                <Heading3>{title}</Heading3>
                <Note>{description}</Note>
            </div>
        </div>
    )
}

export default EmptyState
