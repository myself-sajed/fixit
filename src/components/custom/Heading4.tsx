import { cn } from "@/lib/utils";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
}

const Heading4 = ({ children, className }: PropTypes) => {
    return (
        <h1 className={cn("text-lg", className)}>
            {children}
        </h1>
    )
}

export default Heading4
