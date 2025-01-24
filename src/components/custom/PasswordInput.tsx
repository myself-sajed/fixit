import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PropType {
    id: string;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    required: boolean;
}

const PasswordInput = ({ id, onChange, required }: PropType) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
        <div className="relative">
            <Input
                id={id}
                onChange={onChange}
                className="pe-9"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                required={required}
            />
            <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
            >
                {isVisible ? (
                    <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                    <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
            </button>
        </div>
    );
}

export default PasswordInput