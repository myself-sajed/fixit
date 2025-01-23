import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-center text-left px-8 py-10 gap-5 max-w-4xl mx-auto" >
                <h1 className="text-4xl hero-font sm:text-6xl space-y-2 text-primary/90">
                    <p>Let's Make Your App</p>
                    <p className="flex items-end justify-center gap-3"><i className="text-[#fa4155]">Bug</i> <img className="size-12" src="/assets/images/bug.svg" alt="bug" /><span>Free</span></p>
                </h1>
                <p className="font-medium text-primary/60 text-center">Create dedicated spaces for your website's feedback, bug reports, and suggestions, which will make your website bug-free and make your users happy.</p>
                <Button className="group px-10 mt-16">
                    Let's get started
                    <ArrowRight
                        className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                </Button>
            </section >
        </div >
    )
}

export default Hero
