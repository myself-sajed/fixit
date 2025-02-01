import { cn } from "@/lib/utils";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
}

const Heading1 = ({ children, className }: PropTypes) => {
    return (
        <h1 className={cn("text-3xl font-bold text-primary", className)}>
            {children}
        </h1>
    )
}

export default Heading1
