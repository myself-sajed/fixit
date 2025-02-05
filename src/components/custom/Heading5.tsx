import { cn } from "@/lib/utils";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
}

const Heading5 = ({ children, className }: PropTypes) => {
    return (
        <h1 className={cn("text-base", className)}>
            {children}
        </h1>
    )
}

export default Heading5
