import { cn } from "@/lib/utils";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
}

const Heading3 = ({ children, className }: PropTypes) => {
    return (
        <h1 className={cn("text-xl", className)}>
            {children}
        </h1>
    )
}

export default Heading3
