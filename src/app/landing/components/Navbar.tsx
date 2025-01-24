import { Button } from "@/components/ui/button"
import siteLinks from "@/lib/siteLinks"
import { Wrench } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="my-5">
            <nav className="mx-5 rounded-full bg-muted/50">
                <div className=" px-4 py-3 text-foreground">
                    <div className="flex gap-2 md:items-center">
                        <div className="flex grow md:items-center">
                            <div
                                className="flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
                                aria-hidden="true"
                            >
                                <Wrench className="opacity-80" size={20} strokeWidth={2} />
                            </div>
                            <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
                                <div className="space-y-0.5">
                                    <p className="text-2xl font-medium hero-font">FixIt</p>
                                </div>
                                <div className="flex gap-3 max-md:flex-wrap">
                                    <Link to={siteLinks.login.href}>
                                        <Button variant="ghost" size="sm" className="text-sm">
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
