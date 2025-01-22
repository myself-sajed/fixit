import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const Root = () => {
    return (
        <div>
            <Outlet />
            <Toaster richColors={true} />
        </div>
    );
};

export default Root;
