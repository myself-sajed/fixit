import { RainbowButton } from "@/components/ui/rainbow-button"
import siteLinks from "@/lib/siteLinks"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-center text-left px-8 py-10 gap-5 max-w-5xl mx-auto" >
                <h1 className="text-4xl hero-font sm:text-8xl tracking-tight">
                    <p>Make Your App</p>
                    <p className="flex items-center justify-center gap-5"><span>Bug</span> <img className="size-12" src="/assets/images/bug.svg" alt="bug" /><span>Free</span></p>
                </h1>
                <p className="text-center max-w-xl">Create dedicated <b>spaces</b> for website or app <b>feedback</b>, <b>bug reports</b>, and <b>suggestions</b> to ensure a bug-free experience and delight your users.</p>
                <Link to={siteLinks.dashboard.href}>
                    <RainbowButton className="mt-10">
                        <span className="font-normal text-sm">Create a Space</span>
                        <ChevronRight
                            className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                    </RainbowButton>
                </Link>
            </section >
        </div >
    )
}

export default Hero
