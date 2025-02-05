import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Heading3 from "./Heading3";

type PropTypes = {
    title?: React.ReactNode | string
    children?: React.ReactNode
    className?: string
    onBack?: () => void;
};

const BackAndTitle = ({
    title,
    children,
    className,
    onBack
}: PropTypes) => {

    const navigate = useNavigate()

    const handleBack = () => {
        if (onBack) {
            onBack()
        } else {
            navigate(-1)
        }
    }

    return (
        <div className={cn(className, "mt-3 border-b")}>
            <div className="flex items-center gap-4 pb-2">
                <ArrowLeft onClick={handleBack} className="w-10 h-10 hover:bg-muted cursor-pointer p-2 rounded-full" />
                {title && <Heading3>{title}</Heading3>}
            </div>
            {children && children}
        </div>
    );
}

export default BackAndTitle