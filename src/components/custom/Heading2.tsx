import { cn } from "@/lib/utils";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
}

const Heading2 = ({ children, className }: PropTypes) => {
    return (
        <h1 className={cn("text-2xl font-semibold", className)}>
            {children}
        </h1>
    )
}

export default Heading2
