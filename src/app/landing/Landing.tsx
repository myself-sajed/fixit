import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const Landing = () => {
    return (
        <div className="min-h-screen">
            <div className="absolute inset-0 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_49rem_at_54%_49rem,#2ee6fd91,transparent)]">
                    <div className="space-y-20 w-full h-screen z-20">
                        <Navbar />
                        <Hero />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
